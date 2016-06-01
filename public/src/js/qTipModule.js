;

var BackboneView = require('./Views/BioGeneView.js');

module.exports = (function(cy,$)
{
  "use strict";

  function generateQtipContentHTML(ele)
  {
    var nodeData = ele.data();
    var textInput = $('<div class="col-xs-8 inputCol"><input type="text" class="form-control" nodeid="' + ele.id() + '" value="' + nodeData.name + '"></div>');
    textInput.change(function()
    {
      var nodeID = $(this).find('input').attr('nodeid');

      cy.$('#'+nodeID)[0]._private.data['name'] = $(this).find('input').val();
      cy.$('#'+nodeID)[0].css('content', $(this).find('input').val());
    });

    var wrapper = $('<div></div>');
    var row = $('<div class="row">\
                 <div class="col-xs-4 qtipLabel">Name:</div>\
              </div>');

    var entrezGeneButton = $('<div class="row centerText geneDetails"><button nodeid="' + ele.id() + '" type="button" class="btn btn-default">Entrez Gene</button></div>');
    entrezGeneButton.find('button').on('click', function(event)
    {
      event.preventDefault();
      var nodeID = $(this).attr('nodeid');
      var nodeSymbol = cy.$('#'+nodeID)[0]._private.data['name'];
      var self = this;
      var parent = $(this).parent();
      parent.empty().append('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>');

      var formData = new FormData();
      formData.append('query', nodeSymbol);

      var request = new XMLHttpRequest();
      request.onreadystatechange = function ()
      {
        if(request.readyState === XMLHttpRequest.DONE)
        {
          if (request.status === 200)
          {
            var jsonData = JSON.parse(request.responseText);
            if (jsonData.count > 0)
            {
              var backboneView = new BackboneView({model: jsonData.geneInfo[0]}).render().html();
              parent.empty().append(backboneView);
            }
            else
            {
              parent.empty().append('There is no extra information for this gene');
            }
          }
          else
          {
            parent.empty().append('An error occured while retrieving the data');
          }
        }
      };
      request.open("POST", "/getBioGeneData");
      request.send(formData);
    });

    row.append(textInput);
    wrapper.append(row);
    wrapper.append(entrezGeneButton);
    return wrapper;
  }

  window.addQtipToElements = function(eles)
  {
    // just use the regular qtip api but on cy nodes
    eles.qtip(
    {
      content:
      {
        text:  function()
        {
          return generateQtipContentHTML(this);
        },
        title: function()
        {
            return 'Node Details';
        }
      },
      position: {
        my: 'top center',
        at: 'bottom center'
      },
      style: {
        classes: 'qtip-dark qtip-rounded',
        width: 400
      }
    });
  }

}(window.cy, window.$));
