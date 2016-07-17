var SaveLoadUtilities = require('./SaveLoadUtility.js');


module.exports = (function($)
{
    'use strict';

    function focusOutHandler(event)
    {
        var inputFileName = $(".fileNameContent input");
        var oldFileName = inputFileName.attr('oldFileName');
        var parentEl = inputFileName.parent();
        parentEl.empty();
        var newFileName = $('<span>'+oldFileName+'</span>');
        newFileName.click(fileNameClickFunction);
        parentEl.append(newFileName);
    }

    function fileNameClickFunction(event)
    {
        event.preventDefault();
        switchToInputView();
    }

    function fileNameEditFunction(event)
    {
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        //Enter key
        if(key == 13)
        {
            event.preventDefault();
            switchToFileNameView();
        }
    }

    function switchToFileNameView()
    {
        var el = $(".fileNameContent input");
        var parentEl = el.parent();
        var fileName = el.val();
        parentEl.empty();
        var newFileName = $('<span>'+fileName+'</span>');
        newFileName.click(fileNameClickFunction);
        parentEl.append(newFileName);
    }

    function switchToInputView()
    {
        var el = $(".fileNameContent span");
        var fileName = el.text();
        var parentEl = el.parent();
        parentEl.empty();
        var inputField = $('<input class="form-control" type="text" oldFileName="'+fileName+'"/>');
        inputField.val(fileName);
        inputField.keydown(fileNameEditFunction);
        inputField.focusout(focusOutHandler);
        parentEl.append(inputField);
        inputField.focus();
    }

    // see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    function saveAsJPEG()
    {
        // var fileName = getFileName();
        var graphData = cy.jpeg();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = b64toBlob(b64data, "image/jpeg");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.jpg");
    }

    function saveAsPNG()
    {
        // var fileName = getFileName();
        var graphData = cy.png();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = b64toBlob(b64data, "image/png");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.png");
    }

    function saveGraph(){
        var fileName = getFileName();
        var graphJSON = cy.json();
        var returnString = SaveLoadUtilities.exportGraph(graphJSON);
        var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
    }


    function getFileName()
    {
        return $(".fileNameContent span").text();
    }

    function changeFileName(text)
    {
        $(".fileNameContent span").text(text);
    }

    function resetFileName()
    {
        $(".fileNameContent span").text('pathway.txt');
    }

    //Jquery handles
    $('#saveGraphBtn').on('click', function(evt)
    {
        saveGraph();
    });

    $('#loadGraphBtn').on('click', function(evt)
    {
        $('#fileinput').attr('value', "");
        $('#fileinput').trigger('click');
    });

    $('#fileinput').on('change', function()
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
                var allEles = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.loadFile(allEles.nodes, allEles.edges);
                changeFileName(file.name);
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#fileinput').val(null);
    });

    $('#mergeInput').on('change', function()
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
                var allEles = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.mergeGraph(allEles.nodes,allEles.edges);
                //TODO change file name maybe, probabyly  not necessary ?
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#mergeInput').val(null);
    });

    //File drop down handler
    $(".fileDropDown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'save')
        {
            saveGraph();
        }
        else if (dropdownLinkRole == 'load')
        {
            $('#fileinput').trigger('click');
        }
        else if (dropdownLinkRole == 'new')
        {
            window.editorActionsManager.removeAllElements();
            //TODO change filename in collaborative mode ??
            resetFileName();
        }
        else if (dropdownLinkRole == 'merge')
        {
            $('#mergeInput').trigger('click');
        }
        else if (dropdownLinkRole == 'jpeg')
        {
            saveAsJPEG();
        }
        else if (dropdownLinkRole == 'png')
        {
            saveAsPNG();
        }
    });

    //Initial file name click handler
    $(".fileNameContent span").click(fileNameClickFunction);

})(window.$)
