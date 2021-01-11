import EditorActionsManager from "./EditorActionsManager";
import $ from 'jquery';
export default class QtipManager{
  private cy: any;
  private editor: any;
  constructor(cy: any, editor: EditorActionsManager)
  {
    this.cy = cy;
    this.editor = editor;
  }

  generateEdgeQtipContentHTML(edge)
  {
    var self = this;
    var textInput = $('<div class="col-xs-6 inputCol"><input type="text" class="form-control" edgeid="' + edge.id() + '"value=""></div>');
    var pubmedIDList = $('<div class="pubmedIDList"></div>');
    var pubmedURL = 'https://www.ncbi.nlm.nih.gov/pubmed/';
    var pubmedData = edge.data('pubmedIDs');
    var edgeLabelInput = $('<div class="col-xs-6 inputCol"><input type="text" class="form-control" edgeid="' + edge.id() + '"value="'+ edge.data('name') +'"></div>');

    function generatePubmedLinks(argData, isInitialDisplay)
    {
      for (var key in argData)
      {
        if(!argData.hasOwnProperty(key)){
          continue;
        }
        var pubmedID = argData[key];

        if (isNaN(pubmedID))
          continue;

        const pubmedIDRemoveButton = $("<i edgeID='"+ edge.id() +"' class='fa fa-times qtipRemovePmedID' aria-hidden='true'></i>");
        pubmedIDRemoveButton.on('click', function(event)
        {
          $(event.target).parent().remove();
          var edge = self.cy.$('#'+$(event.target).attr('edgeId'));
          var pubmedId = [$(event.target).parent().find('a').text()];
          self.editor.removePubmedID(edge, pubmedId);
          if($('.pubmedIDList').children().length < 3)
          {
            $('.pubmedIDList').children().remove();
          }
        });

        const pubmedContent = $("<div>\
                              <label>\
                                <a target='_blank' href="
                                  + pubmedURL
                                  + pubmedID +">"+
                                  + pubmedID +
                                "</a>" +
                              "</label>\
                              </div>");
        pubmedContent.first().append(pubmedIDRemoveButton);
        pubmedIDList.append(pubmedContent);
      }
    }

    function generatePubmedLinksHeader()
    {
      pubmedIDList.append($('<hr/>'));
      pubmedIDList.append($('<label class="col-xs-12 pubmedIDLabel">Pubmed IDs</label>'));
    }

    if (pubmedData.length > 0)
    {
      generatePubmedLinksHeader();
      generatePubmedLinks(pubmedData, true);
    }

    textInput.change(function()
    {
      var edgeID = $(this).find('input').attr('edgeid');
      const val: string = $(this).find('input').val() as string;
      var pumbedIDs = val.split(';');
      $(this).find('input').val("");

      if($('.pubmedIDList').children().length === 0)
      {
        generatePubmedLinksHeader();
      }

      self.editor.addPubmedIDs(edge, pumbedIDs);

      generatePubmedLinks(pumbedIDs, false);

    });

    edgeLabelInput.change(function()
    {
        var edgeID = $(this).find('input').attr('edgeid');

        var cyEdge = self.cy.$('#'+edgeID)[0];
        var newName = $(this).find('input').val();
        $(this).find('input').val("");

        //TODO call associated Editor Actions Manager function
        self.editor.changeName(cyEdge, newName);
    });

    var wrapper = $('<div></div>');
    var pubmedRow = $('<div class="row">\
                 <div class="col-xs-6 qtipLabel">Add  PubmedID(s):</div>\
              </div>');

    pubmedRow.append(textInput);
    var labelRow = $('<div class="row">\
               <div class="col-xs-6 qtipLabel">Label:</div>\
            </div>');

    labelRow.append(edgeLabelInput);
    wrapper.append(labelRow);
    wrapper.append('<hr/>');
    pubmedRow.append(textInput);
    wrapper.append(pubmedRow);
    wrapper.append(pubmedIDList);
    return wrapper;
  }

  generateNodeQtipContentHTML(ele)
  {
    const self = this;
    const nodeData = ele.data();
    const textInput = $('<div class="col-xs-8 inputCol"><input type="text" class="form-control" nodeid="' + ele.id() + '" value="' + nodeData.name + '"></div>');
    textInput.change(function()
    {
      const nodeID = $(this).find('input').attr('nodeid');

      const cyNode = self.cy.$('#'+nodeID)[0];
      const newName = $(this).find('input').val();
      self.editor.changeName(cyNode, newName);
    });

    var wrapper = $('<div></div>');
    var row = $('<div class="row">\
                 <div class="col-xs-4 qtipLabel">Name:</div>\
              </div>');

    row.append(textInput);
    wrapper.append(row);

    if (ele.data().type === "GENE")
    {
      var entrezGeneButton = $('<div class="row centerText geneDetails"><button nodeid="' + ele.id() + '" type="button" class="btn btn-default">My Cancer Genome</button></div>');
      entrezGeneButton.find('button').on('click', function(event)
      {
        event.preventDefault();
        var nodeID = $(this).attr('nodeid');
        var nodeSymbol = self.cy.$('#'+nodeID)[0]._private.data['name'];
        var parent = $(this).parent();
        window.open('https://www.mycancergenome.org/content/gene/' + nodeSymbol);


      });
      wrapper.append(entrezGeneButton);
    }

    return wrapper;
  }

  addQtipToElements(eles)
  {
    var self = this;
    eles.forEach(function(ele,i)
    {
      var qTipOpts = {};
      if (ele.isNode())
      {
          qTipOpts =
          {
            content:
            {
              text:  function()
              {
                return self.generateNodeQtipContentHTML(this);
              },
              title: function()
              {
                return ele.data().type.toUpperCase() + ' DETAILS';
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
            } ,
            show:{
              event :"showqtipevent"
            } 
          };

      }
      else if(ele.isEdge())
      {
          qTipOpts =
          {
            content:
            {
              text:  function()
              {
                return self.generateEdgeQtipContentHTML(this);
              },
              title: function()
              {
                return 'INTERACTION DETAILS';
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
            } ,
            show:{
              event :"showqtipevent"
            } 
          };
      }
      ele.qtip(qTipOpts);
    });
  }


  //Utility Functions
  capitalizeFirstLetter(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


}
