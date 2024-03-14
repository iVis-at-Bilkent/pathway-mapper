import _ from "lodash";
import { toast } from 'react-toastify';
import EditorActionsManager from "../managers/EditorActionsManager";
import { CBioPortalAPI, DiscreteCopyNumberFilter, MolecularDataFilter, Mutation, NumericGeneMolecularData, DiscreteCopyNumberData, MutationFilter } from 'cbioportal-ts-api-client';


export default class CBioPortalAccessor{
  static readonly CNA_GAIN = 2;

  static readonly GET_ALL_CANCER_STUDIES_URL  = "https://www.cbioportal.org/webservice.do?cmd=getCancerStudies";
  static readonly GET_GENETIC_PROFILES_URL = "https://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=";
  static readonly GET_PROFILE_DATA_URL = "https://www.cbioportal.org/webservice.do?cmd=getProfileData";
  static readonly MRNA_EXP_STUDY_NAME = "_mrna_median_Zscores";
  static readonly CNA_EXP_STUDY_NAME = "_gistic";
  static readonly VALIDATE_GENES_URL  = 'https://www.cbioportal.org/api/genes/fetch?geneIdType=HUGO_GENE_SYMBOL&projection=ID'
  static readonly MUTATION_EXP_STUDY_NAME = "_mutations";

  static readonly CNA_DELETION = -2;
  static readonly Z_SCORE_UPPER_THRESHOLD = 2;
  static readonly Z_SCORE_LOWER_THRESHOLD = -2;
  
  static readonly MUTATION = "Mutation";
  static readonly GENE_EXPRESSION = "Gene Expression";
  static readonly CNA = "Copy Number Alteration";
  cBioPortalAPIClient = new CBioPortalAPI("https://www.cbioportal.org");


  getDataTypes(){
      return [CBioPortalAccessor.MUTATION, CBioPortalAccessor.GENE_EXPRESSION, CBioPortalAccessor.CNA];
  }

  /*
  * Retrieves all cancer studies from cBioPortal
  * **/
  fetchCancerStudies(callbackFunction)
  {
    this.cBioPortalAPIClient.getAllStudiesUsingGET({
        projection: "SUMMARY",
    }).then(data => callbackFunction(_.keyBy(data, d => d.name)) )
      .catch(e => toast.error("Could not retrieve studies") ) ;
  };

  /**
  * Retrieves all genetic profiles for given cancerStudy from cBioPortal
  */
  getSupportedGeneticProfiles(cancerStudy, callbackFunction)
  {
      var self = this;
      this.cBioPortalAPIClient.getAllMolecularProfilesInStudyUsingGET({studyId : cancerStudy})
      .then( data => callbackFunction(_.keyBy(data.filter( d => self.isSupportedCancerProfile(d.molecularProfileId)), d => d.molecularProfileId )));
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

  calcExpressionAlterationPercentages( molecularData : NumericGeneMolecularData[], geneticProfileId, entrezGeneIdToGene, sampleCount, callbackFunction)
  {
      //Total number of tumor samples in the response
      const numOfTumorSamples = _.uniq(molecularData.map( d => d.uniqueSampleKey)).length;
      const outData: {} = {};
      outData[geneticProfileId] = {};

      const dataByGenes = _.groupBy( molecularData, d => d.entrezGeneId );
      _.forEach(dataByGenes, (data, entrezGeneId) => {
         const alteredCount = data.filter( d => !_.isNaN(d.value) && (d.value >= CBioPortalAccessor.Z_SCORE_UPPER_THRESHOLD  || d.value <= CBioPortalAccessor.Z_SCORE_LOWER_THRESHOLD)).length;
         outData[geneticProfileId][entrezGeneIdToGene[entrezGeneId].hugoGeneSymbol] = ( alteredCount / numOfTumorSamples ) * 100;
        } );
      callbackFunction(outData);
  }

  calcMutationPercentages( molecularData : Mutation[], geneticProfileId, entrezGeneIdToGene, sampleCount, callbackFunction)
  {
      const outData: {} = {};
      outData[geneticProfileId] = {};

      const dataByGenes = _.groupBy( molecularData, d => d.entrezGeneId );
      _.forEach(dataByGenes, (data, entrezGeneId) => {
         const alteredCount = _.uniq(data.map( d => d.uniqueSampleKey)).length;
         outData[geneticProfileId][entrezGeneIdToGene[entrezGeneId].hugoGeneSymbol] = ( alteredCount / sampleCount ) * 100;
        } );
      callbackFunction(outData);
  }

  calcCNAAlterationPercentages( molecularData : DiscreteCopyNumberData [], geneticProfileId, entrezGeneIdToGene, sampleCount, callbackFunction)
  {

      const outData: {} = {};
      outData[geneticProfileId] = {};

      const dataByGenes = _.groupBy( molecularData, d => d.entrezGeneId );
      _.forEach(dataByGenes, (data, entrezGeneId) => {
         const alteredCount = data.filter( d => !_.isNaN(d.alteration) && (d.alteration === CBioPortalAccessor.CNA_GAIN  || d.alteration === CBioPortalAccessor.CNA_DELETION)).length;
         outData[geneticProfileId][entrezGeneIdToGene[entrezGeneId].hugoGeneSymbol] = ( alteredCount / sampleCount ) * 100;
        } );
      callbackFunction(outData);
  }
  /*
  *
  *    Retrieves profile data associated with the parameters below from cBioPortal
  *    @params
        {
          studyId: "gbm_tcga",
          geneticProfileId: "gbm_tcga_mutations",
          genes: ["BRCA1", "BRCA2", "TP53"]
        }
  * */
  getProfileData(studyId: string, molecularProfileId: string, geneList : string [], callbackFunction)
  {
      const outData = {};
      const self = this;
    
      const sampleListId = studyId + "_sequenced";
      this.cBioPortalAPIClient.getSampleListUsingGET({sampleListId: sampleListId})
       .then( data => {
          const sampleCount = data.sampleCount;
          this.cBioPortalAPIClient.fetchGenesUsingPOST({geneIdType : "HUGO_GENE_SYMBOL", projection : "SUMMARY", geneIds : geneList})
             .then( genes => {
                const entrezGeneIds = genes.map(gene => gene.entrezGeneId);
                const entrezGeneIdToGene = _.keyBy(genes, g => g.entrezGeneId)
                const molecularProfileType = CBioPortalAccessor.getDataType(molecularProfileId);
                if( molecularProfileType === CBioPortalAccessor.GENE_EXPRESSION){
                    this.cBioPortalAPIClient.fetchAllMolecularDataInMolecularProfileUsingPOST({molecularProfileId: molecularProfileId, molecularDataFilter: {entrezGeneIds, sampleListId} as MolecularDataFilter})
                      .then( data => self.calcExpressionAlterationPercentages( data, molecularProfileId,entrezGeneIdToGene, sampleCount, callbackFunction));
                }
                else if( molecularProfileType === CBioPortalAccessor.CNA){
                  this.cBioPortalAPIClient.fetchDiscreteCopyNumbersInMolecularProfileUsingPOST({molecularProfileId: molecularProfileId, discreteCopyNumberFilter: {entrezGeneIds, sampleListId} as DiscreteCopyNumberFilter})
                    .then( data => self.calcCNAAlterationPercentages(data, molecularProfileId, entrezGeneIdToGene, sampleCount, callbackFunction ));
                }
                else if( molecularProfileType === CBioPortalAccessor.MUTATION){
                  this.cBioPortalAPIClient.fetchMutationsInMolecularProfileUsingPOST( {molecularProfileId: molecularProfileId, projection : "ID", mutationFilter: {entrezGeneIds, sampleListId} as MutationFilter})
                    .then( data => self.calcMutationPercentages( data, molecularProfileId, entrezGeneIdToGene, sampleCount, callbackFunction ));
                }
   
            });
    });
  };

  validateGenes(nodeSymbols, editor: EditorActionsManager)
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
              editor.highlightInvalidGenes(validGeneArray);
          }
      };
      const queryURL = CBioPortalAccessor.VALIDATE_GENES_URL;
      request.open("POST", queryURL);
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(nodeSymbols));
    }
}
