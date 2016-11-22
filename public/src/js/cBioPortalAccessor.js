module.exports = (function()
{
    function CBioPortalAccessor()
    {
        this.GET_ALL_CANCER_STUDIES_URL  = "http://www.cbioportal.org/webservice.do?cmd=getCancerStudies";
        this.GET_GENETIC_PROFILES_URL = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=";
        this.GET_PROFILE_DATA_URL = "http://www.cbioportal.org/webservice.do?cmd=getProfileData";

        //TEST PART
        // this.fetchCancerStudies();
        // this.getAllGeneticProfiles("acbc_mskcc_2015", function(data){
        //     console.log(data);
        // });
        // this.getProfileData(
        //     {
        //         caseSetId: "gbm_tcga",
        //         geneticProfileId: "gbm_tcga_mutations",
        //         genes: ["BRCA1", "BRCA2", "TP53"]
        //     },
        //     function(data)
        //     {
        //         console.log(data);
        //     }
        // );
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
        };
        request.open("GET", this.GET_ALL_CANCER_STUDIES_URL);
        request.send();
    };

    /*
    * Retrieves all genetic profiles for given cancerStudy from cBioPortal
    * **/
    CBioPortalAccessor.prototype.getAllGeneticProfiles = function (cancerStudy, callbackFunction)
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
                    outData[lineData[0]] = lineData;
                }

                callbackFunction(outData);
            }
        };
        request.open("GET", this.GET_GENETIC_PROFILES_URL + cancerStudy);
        request.send();
    };



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
                // By lines
                // Match all new line character representations
                var seperator = /\r?\n|\r/;
                var lines = request.responseText.split(seperator);
                //Total number of tumor samples in the response
                var tumorSamples = lines[2].split('\t');
                var numOfTumorSamples = tumorSamples.length - 2;

                // skip meta parts
                for(var i = 3; i < lines.length; i++)
                {
                    if (lines[i].length <= 0)
                        continue;

                    //Iterate over samples for each gene to calculate profile data
                    var lineData = lines[i].split('\t');
                    var profileDataAlteration = 0;
                    for(var j = 2; j < lineData.length; j++)
                    {
                        if(lineData[j] !== 'NaN')
                            profileDataAlteration++;
                    }

                    //
                    outData[lineData[1]] = ( profileDataAlteration / numOfTumorSamples ) * 100;
                }

                callbackFunction(outData);
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

    return CBioPortalAccessor;

})();