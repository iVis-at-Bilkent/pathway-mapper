;

var BackboneView = require('./BackboneViews/BioGeneView.js');

module.exports = (function($)
{
  "use strict";
  
  var QtipManager =function (cy)
  {
    this.cy = cy;
  };

  QtipManager.prototype.generateQtipContentHTML = function(ele)
  {
    var self = this;
    var nodeData = ele.data();
    var textInput = $('<div class="col-xs-8 inputCol"><input type="text" class="form-control" nodeid="' + ele.id() + '" value="' + nodeData.name + '"></div>');
    textInput.change(function()
    {
      var nodeID = $(this).find('input').attr('nodeid');

      var cyNode = self.cy.$('#'+nodeID)[0];
      var newName = $(this).find('input').val();
      window.editorActionsManager.changeName(cyNode, newName);
    });

    var wrapper = $('<div></div>');
    var row = $('<div class="row">\
                 <div class="col-xs-4 qtipLabel">Name:</div>\
              </div>');

    row.append(textInput);
    wrapper.append(row);

    if (ele.data().type === "GENE")
    {
      var entrezGeneButton = $('<div class="row centerText geneDetails"><button nodeid="' + ele.id() + '" type="button" class="btn btn-default">Entrez Gene</button></div>');
      entrezGeneButton.find('button').on('click', function(event)
      {
        event.preventDefault();
        var nodeID = $(this).attr('nodeid');
        var nodeSymbol = self.cy.$('#'+nodeID)[0]._private.data['name'];
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
      wrapper.append(entrezGeneButton);
    }

    return wrapper;
  };

  QtipManager.prototype.addQtipToElements = function(eles)
  {
    var self = this;
    eles.forEach(function(node,i)
    {
      var qTipOpts =
      {
        content:
        {
          text:  function()
          {
            return self.generateQtipContentHTML(this);
          },
          title: function()
          {
            return capitalizeFirstLetter(node.data().type.toLowerCase()) + ' Details';
          }
        },
        position: {
          my: 'top center',
          at: 'bottom center'
        },
        style:
        {
          classes: 'qtip-tipsy qtip-rounded',
          width: 400
        }
      };
      node.qtip(qTipOpts);
    });

  };
  

  //Utility Functions
  function capitalizeFirstLetter(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return QtipManager;

}(window.$));
