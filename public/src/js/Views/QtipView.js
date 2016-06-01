var QtipView = Backbone.View.extend(
{
  currentLayoutProperties: null,
  events:
  {

  },
  initialize: function (options)
  {
    var ele = options.ele;
    var nodeData = ele.data();
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

    var entrezGeneButton = $('<button  type="button" class="btn btn-default">Entrez Gene</button>');
    row.append(textInput);
    row.append(entrezGeneButton);
    return row;
  },
  render: function()
  {

  }
});

module.exports = layoutProps;
