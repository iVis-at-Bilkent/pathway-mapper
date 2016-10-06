/**
 * Created by istemi on 29.08.2016.
 */

module.exports = (function ($)
{
    //Genomic data file part
    $('#genomicDataInput').on('change', function()
    {
        var file = this.files[0];
        // Create a new FormData object.
        var formData = new FormData();
        formData.append('graphFile', file);
        var request = new XMLHttpRequest();
        request.onreadystatechange = function ()
        {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
            {
                window.editorActionsManager.addGenomicData(request.responseText);
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#genomicDataInput').val(null);
    });

    //Genomic data menu part
    $(".dataDropdown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'loadGenomic')
        {
            $('#genomicDataInput').trigger('click');
        }
        else if (dropdownLinkRole == 'dataViewSettings')
        {
            $('#genomicDataExplorerDiv').modal('show');
        }
        else if (dropdownLinkRole == 'loadSampleGenomicData')
        {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function ()
            {
                if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
                {
                    window.editorActionsManager.addGenomicData(request.responseText);
                }
            };
            request.open("GET", "/sampleGenomicData");
            request.send();
        }
        else if(dropdownLinkRole == 'removeGenomicData')
        {
            window.editorActionsManager.removeGenomicData();
        }
    });
})(window.$);

