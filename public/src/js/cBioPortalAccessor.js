module.exports = (function()
{
    function CBioPortalAccessor()
    {
        this.cancerStudies = {};
        this.GET_ALL_CANCER_STUDIES_URL  = "http://www.cbioportal.org/webservice.do?cmd=getCancerStudies";
        this.GET_GENETIC_PROFILES_URL = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=";
        this.GET_PROFILE_DATA_URL = "http://www.cbioportal.org/webservice.do?cmd=getProfileData";

        this.fetchCancerStudies();
        this.getAllGeneticProfiles("acbc_mskcc_2015", function(data){
            console.log(data);
        });

        //params
        //caseSetId, geneticProfileId, genes
        this.getProfileData(
            {
                caseSetId: "gbm_tcga",
                geneticProfileId: "gbm_tcga_mutations",
                genes: ["BRCA1", "BRCA2", "TP53"]
            },
            function(data)
            {
                console.log(data);
            }
        );
    }

    //cancer_study_id	name	description
    CBioPortalAccessor.prototype.fetchCancerStudies = function ()
    {
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
                    self.cancerStudies[lineData[0]] = lineData;
                }
                //console.log(self.cancerStudies);
            }
        };
        request.open("GET", this.GET_ALL_CANCER_STUDIES_URL);
        request.send();
    };

    //genetic_profile_id	genetic_profile_name	genetic_profile_description	cancer_study_id	genetic_alteration_type
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


    //http://www.cbioportal.org/webservice.do?cmd=getProfileData&case_set_id=gbm_tcga_all&genetic_profile_id=gbm_tcga_mutations&gene_list=BRCA1+BRCA2+TP53
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
                console.log(request.responseText);

                /*// By lines
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

                callbackFunction(outData);*/
            }
        };

        //Create query URL
        var queryURL = this.GET_PROFILE_DATA_URL;
        queryURL += "&case_set_id=" + params.caseSetId + "_all";
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