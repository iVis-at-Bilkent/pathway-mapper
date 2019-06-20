import EditorActionsManager from "./EditorActionsManager";
import _ from "underscore";
export default class CBioPortalAccessor{
  static readonly CNA_GAIN = 2;

  static readonly GET_ALL_CANCER_STUDIES_URL  = "http://www.cbioportal.org/webservice.do?cmd=getCancerStudies";
  static readonly GET_GENETIC_PROFILES_URL = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=";
  static readonly GET_PROFILE_DATA_URL = "http://www.cbioportal.org/webservice.do?cmd=getProfileData";
  static readonly MRNA_EXP_STUDY_NAME = "_mrna_median_Zscores";
  static readonly CNA_EXP_STUDY_NAME = "_gistic";
  static readonly VALIDATE_GENES_URL  = 'http://www.cbioportal.org/api/genes/fetch?geneIdType=HUGO_GENE_SYMBOL&projection=ID'
  static readonly MUTATION_EXP_STUDY_NAME = "_mutations";

  static readonly CNA_DELETION = -2;
  static readonly Z_SCORE_UPPER_THRESHOLD = 2;
  static readonly Z_SCORE_LOWER_THRESHOLD = -2;
  
  static readonly MUTATION = "Mutation";
  static readonly GENE_EXPRESSION = "Gene Expression";
  static readonly CNA = "Copy Number Alteration";

  editor: EditorActionsManager;

  constructor(editor: EditorActionsManager)
  {
      this.editor = editor;
  }

  getDataTypes(){
      return [CBioPortalAccessor.MUTATION, CBioPortalAccessor.GENE_EXPRESSION, CBioPortalAccessor.CNA];
  }

  /*
  * Retrieves all cancer studies from cBioPortal
  * **/
  fetchCancerStudies(callbackFunction)
  {
    var cancerStudies = {};
    var request = new XMLHttpRequest();
    request.onreadystatechange = function ()
    {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
        {
            // By lines
            // Match all new line character representations
            var seperator = /\r?\n|\r/;
            var lines = request.responseText.split(seperator);

            // start from first line skip node meta data
            for(var i = 1; i < lines.length; i++)
            {
                if (lines[i].length <= 0)
                    continue;

                var lineData = lines[i].split('\t');
                cancerStudies[lineData[0]] = lineData;
            }
            callbackFunction(cancerStudies);
        }
        else if  (request.readyState === XMLHttpRequest.DONE && request.status != 200)
        {
            console.error("Error retrieving studies");
            // window.notificationManager.createNotification("Error retrieving cancer studies", "fail")
        }
    };
    request.open("GET", CBioPortalAccessor.GET_ALL_CANCER_STUDIES_URL);
    request.send();
  };

  /*
  * Retrieves all genetic profiles for given cancerStudy from cBioPortal
  * **/
  getSupportedGeneticProfiles(cancerStudy, callbackFunction)
  {
      var outData = {};
      var request = new XMLHttpRequest();
      var self = this;
      request.onreadystatechange = function ()
      {
          if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
          {
              // By lines
              // Match all new line character representations
              var seperator = /\r?\n|\r/;
              var lines = request.responseText.split(seperator);

              // start from first line skip node meta data
              for(var i = 1; i < lines.length; i++)
              {
                  if (lines[i].length <= 0)
                      continue;

                  var lineData = lines[i].split('\t');
                  var cancerProfileName = lineData[0];
                  if(self.isSupportedCancerProfile(cancerProfileName))
                  {
                      outData[cancerProfileName] = lineData;
                  }
              }

              callbackFunction(outData);
          }
          else if (request.readyState === XMLHttpRequest.DONE && request.status !== 200)
          {
            console.error("Error retrieving studies");
              // window.notificationManager.createNotification("Error retrieving genetic profiles", "fail")
          }
      };
      request.open("GET", CBioPortalAccessor.GET_GENETIC_PROFILES_URL + cancerStudy);
      request.send();
  };

  isSupportedCancerProfile(cancerProfileName: string)
  {
      return (cancerProfileName.endsWith(CBioPortalAccessor.MRNA_EXP_STUDY_NAME) ||
              cancerProfileName.endsWith(CBioPortalAccessor.CNA_EXP_STUDY_NAME) ||
              cancerProfileName.endsWith(CBioPortalAccessor.MUTATION_EXP_STUDY_NAME));
  };

  static getDataType(cancerProfileName: string)
  {
      if ( cancerProfileName.endsWith(this.MRNA_EXP_STUDY_NAME))
      {
          return this.GENE_EXPRESSION;
      }
      else if ( cancerProfileName.endsWith(this.CNA_EXP_STUDY_NAME))
      {
          return this.CNA;
      }
      else if ( cancerProfileName.endsWith(this.MUTATION_EXP_STUDY_NAME))
      {
          return this.MUTATION;
      }

      return "";
  }
  

  calcAlterationPercentages(paramLines, geneticProfileId, callbackFunction)
  {
      // By lines
      // Match all new line character representations
      const seperator = /\r?\n|\r/;
      const lines = paramLines.split(seperator);
      let startIndex = 0;

      //Find starting index of actual data skip commented lines
      for (const i in lines)
      {
          if(!lines[i].startsWith('#'))
          {
              startIndex = parseInt(i);
              break;
          }
      }

      //Total number of tumor samples in the response
      const tumorSamples = lines[startIndex].split('\t');
      const numOfTumorSamples = tumorSamples.length - 2;
      const outData: {} = {};
      outData[geneticProfileId] = {};

      const geneticProfileType = CBioPortalAccessor.getDataType(geneticProfileId);

      // skip meta line and iterate over tumor sample data
      for(let i = startIndex + 1; i < lines.length; i++)
      {
          if (lines[i].length <= 0)
              continue;

          //Iterate over samples for each gene to calculate profile data
          const lineData = lines[i].split('\t');
          let profileDataAlteration = 0;
          for(let j = 2; j < lineData.length; j++)
          {
              if(lineData[j] !== 'NaN')
              {
                  if( geneticProfileType === CBioPortalAccessor.MUTATION )
                      profileDataAlteration++;
                  else if ( (geneticProfileType === CBioPortalAccessor.CNA) 
                  && ( lineData[j] === CBioPortalAccessor.CNA_GAIN || lineData[j] === CBioPortalAccessor.CNA_DELETION )  )
                      profileDataAlteration++;
                  else if ( (geneticProfileType === CBioPortalAccessor.GENE_EXPRESSION) 
                  && (parseInt(lineData[j]) >= CBioPortalAccessor.Z_SCORE_UPPER_THRESHOLD 
                  || parseInt(lineData[j]) <= CBioPortalAccessor.Z_SCORE_LOWER_THRESHOLD))
                      profileDataAlteration++;
              }
          }

          //
          outData[geneticProfileId][lineData[1]] = ( profileDataAlteration / numOfTumorSamples ) * 100;
      }

      callbackFunction(outData);
  }


  /*
  *
  *    Retrieves profile data associated with the parameters below from cBioPortal
  *    @params
        {
          caseSetId: "gbm_tcga",
          geneticProfileId: "gbm_tcga_mutations",
          genes: ["BRCA1", "BRCA2", "TP53"]
        }
  * */
  getProfileData(params, callbackFunction)
  {
      //params
      //caseSetId, geneticProfileId, genes

      const outData = {};
      const request = new XMLHttpRequest();
      const self = this;
      request.onreadystatechange = function ()
      {
          if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
          {
              self.calcAlterationPercentages(request.responseText, params.geneticProfileId, callbackFunction);
              console.log("Profile data " + params.geneticProfileId + " is succesfully loaded from cBioPortal ",
                  "success");
              /*window.notificationManager.createNotification(
                  "Profile data " + params.geneticProfileId + " is succesfully loaded from cBioPortal ",
                  "success");*/

          }
      };

      //Create query URL
      let queryURL = CBioPortalAccessor.GET_PROFILE_DATA_URL;
      //Fetch sequenced case list !!
      queryURL += "&case_set_id=" + params.caseSetId + "_sequenced";
      queryURL += "&genetic_profile_id=" + params.geneticProfileId;
      queryURL += "&gene_list=";
      let isFirst = true;
      console.log(params.genes)
      for(const gene of Object.keys(params.genes))
      {
          if(!isFirst){
            queryURL += "+";
          } else {
              isFirst = false;
          }
          queryURL += gene;
          
      }
      console.log(queryURL);

      request.open("GET", queryURL);
      request.send();
  };

  validateGenes(nodeSymbols)
  {
      const request = new XMLHttpRequest();
      const self = this;

      request.onreadystatechange = function ()
      {
          if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
          {
              const validGeneSymbols = JSON.parse(request.responseText);
              const validGeneArray = _.map(validGeneSymbols, function(object)
              {
                  return object.hugoGeneSymbol;
              });
              self.editor.highlightInvalidGenes(validGeneArray);
          }
      };
      const queryURL = CBioPortalAccessor.VALIDATE_GENES_URL;
      request.open("POST", queryURL);
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(nodeSymbols));
    }
}
