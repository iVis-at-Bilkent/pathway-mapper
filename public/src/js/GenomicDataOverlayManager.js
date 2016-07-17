/**
 *
 */

module.exports = (function()
{
    //TODO add parser
    
    var GenomicDataOverlayManager = function ()
    {

    };

    GenomicDataOverlayManager.prototype.createGenomicDataOverlay(node)
    {
        var dataURI = "data:image/svg+xml;utf8,";
        var svgNameSpace = 'http://www.w3.org/2000/svg';

        var svg = document.createElementNS(svgNameSpace,'svg');

        var rect = document.createElementNS(svgNameSpace, 'rect');
        rect.setAttribute('width', 300);
        rect.setAttribute('height', 300);
        rect.setAttribute('style', "fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)");

        svg.appendChild(rect);
        console.log(dataURI+svg.innerHTML);
    }

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

            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#fileinput').val(null);
    });
    return GenomicDataOverlayManager;

})();
