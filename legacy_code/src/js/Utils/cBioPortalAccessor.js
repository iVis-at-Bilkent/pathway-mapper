module.exports = (function()
{
    function CBioPortalAccessor()
    {
        this.GET_ALL_CANCER_STUDIES_URL  = "http://www.cbioportal.org/webservice.do?cmd=getCancerStudies";
        this.GET_GENETIC_PROFILES_URL = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=";
        this.GET_PROFILE_DATA_URL = "http://www.cbioportal.org/webservice.do?cmd=getProfileData";
        this.MRNA_EXP_STUDY_NAME = "_mrna_median_Zscores";
        this.CNA_EXP_STUDY_NAME = "_gistic";
        this.VALIDATE_GENES_URL  = 'http://www.cbioportal.org/api/genes/fetch?geneIdType=HUGO_GENE_SYMBOL&projection=ID'
        this.MUTATION_EXP_STUDY_NAME = "_mutations";


        this.CNA_DELETION = -2;
        this.CNA_GAIN = 2;
        this.Z_SCORE_UPPER_THRESHOLD = 2;
        this.Z_SCORE_LOWER_THRESHOLD = -2;


        this.MUTATION = "Mutation";
        this.GENE_EXPRESSION = "Gene Expression";
        this.CNA = "Copy Number Alteration";
    }

    /*
    * Retrieves all cancer studies from cBioPortal
    * **/
    CBioPortalAccessor.prototype.fetchCancerStudies = function (callbackFunction)
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
                window.notificationManager.createNotification("Error retrieving cancer studies", "fail")
            }
        };
        request.open("GET", this.GET_ALL_CANCER_STUDIES_URL);
        request.send();
    };

    /*
    * Retrieves all genetic profiles for given cancerStudy from cBioPortal
    * **/
    CBioPortalAccessor.prototype.getSupportedGeneticProfiles = function (cancerStudy, callbackFunction)
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
            else if (request.readyState === XMLHttpRequest.DONE && request.status != 200)
            {
                window.notificationManager.createNotification("Error retrieving genetic profiles", "fail")
            }
        };
        request.open("GET", this.GET_GENETIC_PROFILES_URL + cancerStudy);
        request.send();
    };

    CBioPortalAccessor.prototype.isSupportedCancerProfile = function(cancerProfileName)
    {
        return (cancerProfileName.endsWith(this.MRNA_EXP_STUDY_NAME) ||
                cancerProfileName.endsWith(this.CNA_EXP_STUDY_NAME) ||
                cancerProfileName.endsWith(this.MUTATION_EXP_STUDY_NAME));
    };

    CBioPortalAccessor.prototype.getDataType = function(cancerProfileName)
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
    }
    

    CBioPortalAccessor.prototype.calcAlterationPercentages = function(paramLines, geneticProfileId, callbackFunction)
    {
        // By lines
        // Match all new line character representations
        var seperator = /\r?\n|\r/;
        var lines = paramLines.split(seperator);
        var startIndex = 0;

        //Find starting index of actual data skip commented lines
        for (var i in lines)
        {
            if(!lines[i].startsWith('#'))
            {
                startIndex = parseInt(i);
                break;
            }
        }

        //Total number of tumor samples in the response
        var tumorSamples = lines[startIndex].split('\t');
        var numOfTumorSamples = tumorSamples.length - 2;
        var outData = {};
        outData[geneticProfileId] = {};

        var geneticProfileType = this.getDataType(geneticProfileId);

        // skip meta line and iterate over tumor sample data
        for(var i = startIndex+1; i < lines.length; i++)
        {
            if (lines[i].length <= 0)
                continue;

            //Iterate over samples for each gene to calculate profile data
            var lineData = lines[i].split('\t');
            var profileDataAlteration = 0;
            for(var j = 2; j < lineData.length; j++)
            {
                if(lineData[j] !== 'NaN')
                {
                    if( geneticProfileType == this.MUTATION )
                        profileDataAlteration++;
                    else if ( (geneticProfileType == this.CNA) && ( lineData[j] == this.CNA_GAIN || lineData[j] == this.CNA_DELETION )  )
                        profileDataAlteration++;
                    else if ( (geneticProfileType == this.GENE_EXPRESSION) && (parseInt(lineData[j]) >= this.Z_SCORE_UPPER_THRESHOLD || parseInt(lineData[j]) <= this.Z_SCORE_LOWER_THRESHOLD))
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
    CBioPortalAccessor.prototype.getProfileData = function ( params, callbackFunction)
    {
        //params
        //caseSetId, geneticProfileId, genes

        var outData = {};
        var request = new XMLHttpRequest();
        var self = this;
        request.onreadystatechange = function ()
        {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
            {
                self.calcAlterationPercentages(request.responseText, params.geneticProfileId, callbackFunction);
                window.notificationManager.createNotification(
                    "Profile data " + params.geneticProfileId + " is succesfully loaded from cBioPortal ",
                    "success");

            }
        };

        //Create query URL
        var queryURL = this.GET_PROFILE_DATA_URL;
        //Fetch sequenced case list !!
        queryURL += "&case_set_id=" + params.caseSetId + "_sequenced";
        queryURL += "&genetic_profile_id=" + params.geneticProfileId;
        queryURL += "&gene_list=";

        for(var i = 0; i < params.genes.length; i++)
        {
            queryURL += params.genes[i];
            if(i != params.genes.length - 1)
                queryURL += "+";
        }

        request.open("GET", queryURL);
        request.send();
    };

    CBioPortalAccessor.prototype.validateGenes = function(nodeSymbols)
    {
        var request = new XMLHttpRequest();
        var self = this;

        request.onreadystatechange = function ()
        {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
            {
                var validGeneSymbols = JSON.parse(request.responseText);
                var validGeneArray = _.map(validGeneSymbols, function(object)
                {
                    return object.hugoGeneSymbol;
                });
                window.editorActionsManager.highlightInvalidGenes(validGeneArray);
            }
        };
        var queryURL = this.VALIDATE_GENES_URL;
        request.open("POST", queryURL);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(nodeSymbols));
    }

    return CBioPortalAccessor;

})();