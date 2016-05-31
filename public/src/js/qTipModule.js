;
module.exports = (function(cy,$)
{
  "use strict";

  function generateQtipContentHTML(ele)
  {
    var nodeData = ele.data();
    console.log(nodeData);
    var textInput = $('<div class="col-xs-8"><input type="text" class="form-control" nodeid="' + ele.id() + '" value="' + nodeData.name + '"></div>');
    textInput.change(function()
    {
      var nodeID = $(this).find('input').attr('nodeid');

      cy.$('#'+nodeID)[0]._private.data['name'] = $(this).find('input').val();
      cy.$('#'+nodeID)[0].css('content', $(this).find('input').val());
    });

    var row = $('<div class="row">\
                 <div class="col-xs-4 qtipLabel">Name:</div>\
              </div>');
    row.append(textInput);
    return row;
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
        width: 200
      }
    });
  }

}(window.cy, window.$));
