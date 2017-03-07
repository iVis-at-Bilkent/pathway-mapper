var SaveLoadUtils =
{
  //Exports given json graph(based on cy.export()) into a string
  exportGraph: function(pathwayDetails)
  {
    var returnString = pathwayDetails.pathwayTitle + '\n\n';
    returnString += pathwayDetails.pathwayDescription +'\n\n';

    //Get nodes and edges
    var nodes = pathwayDetails.graphJSON.elements.nodes;
    var edges = pathwayDetails.graphJSON.elements.edges;

    //Prepare Meta Line
     returnString += '--NODE_NAME\tNODE_ID\tNODE_TYPE\tPARENT_ID\tPOSX\tPOSY--'+'\n';

    if (nodes)
    {
      for (var i = 0; i < nodes.length; i++)
      {
        //Node specific data fields
        var nodeName = nodes[i].data.name;
        var parentID = nodes[i].data.parent;
        var nodeID = nodes[i].data.id;
        var pos = nodes[i].position;
        var nodeType = nodes[i].data.type;

        //Check if node has a parent, if not set parent id -1
        if (nodes[i].data.parent)
        {
          parentID = nodes[i].data.parent;
        }
        else
        {
          parentID = -1;
        }

        // Write a line for a node
        returnString +=  nodeName + '\t' +
                         nodeID + '\t' +
                         nodeType + '\t' +
                         parentID + '\t' +
                         parseInt(pos.x) + '\t' +
                         parseInt(pos.y) + '\t\n';
      }
    }



    //Put a blank line between nodes and edges
    returnString += '\n';
    returnString += '--EDGE_ID\tSOURCE\tTARGET\tEDGE_TYPE\INTERACTION_PUBMED_ID\n';

    if (edges) {
      //Write edges
      for (var i = 0; i < edges.length; i++)
      {
        var edgeID = edges[i].data.id;
        var edgeType = edges[i].data.type;
        var source = edges[i].data.source;
        var target = edges[i].data.target;
        var pubmedIDs = edges[i].data.pubmedIDs;
        var pubmedString = "";

        if (pubmedIDs != undefined) {
            for (var j = 0; j < pubmedIDs.length; j++)
            {
              pubmedString += pubmedIDs[j];
              if (j != pubmedIDs.length - 1)
                  pubmedString += ";"
            }
        }

        returnString += edgeID + '\t' +
                        source + '\t' +
                        target + '\t' +
                        edgeType + '\t' +
                        pubmedString + '\n';
      }
    }

    //Finally return a string that includes whole graph lovely and peacefully :)
    return returnString;
  },
  exportAsSIFNX: function(pathwayDetails)
  {
    var returnString = "";

    //Get nodes and edges
    var nodes = pathwayDetails.graphJSON.elements.nodes;
    var edges = pathwayDetails.graphJSON.elements.edges;

    returnString += 'PARTICIPANT_A\tINTERACTION_TYPE\tPARTICIPANT_B\tINTERACTION_PUBMED_ID\tPATHWAY_NAMES\n';

    if (edges) {
      //Write edges
      for (var i = 0; i < edges.length; i++)
      {
        var edgeType = edges[i].data.type;
        var source = edges[i].data.source;
        var target = edges[i].data.target;
        var pubmedIDs = edges[i].data.pubmedIDs;
        var pubmedString = "";

        if (pubmedIDs != undefined) {
            for (var j = 0; j < pubmedIDs.length; j++)
            {
              pubmedString += pubmedIDs[j];
              if (j != pubmedIDs.length - 1)
                  pubmedString += ";"
            }
        }

        returnString += cy.$('#'+ source).data('name') + '\t' +
                        edgeType + '\t' +
                        cy.$('#'+ target).data('name')  + '\t' +
                        pubmedString + '\t' +
                        pathwayDetails.pathwayTitle + '\n';
      }
    }

    //Put a blank line between nodes and edges
    returnString += '\n';
    returnString += 'PARTICIPANT\tPARTICIPANT_TYPE\tPARENT_ID\tPOSX\tPOSY'+'\n';

    if (nodes)
    {
      for (var i = 0; i < nodes.length; i++)
      {
        //Node specific data fields
        var nodeName = nodes[i].data.name;
        var nodeType = nodes[i].data.type;
        var parentID = nodes[i].data.parent;
        var pos = nodes[i].position;

        //Check if node has a parent, if not set parent id -1
        if (nodes[i].data.parent)
        {
          parentID = nodes[i].data.parent;
        }
        else
        {
          parentID = -1;
        }

        // Write a line for a node
        returnString +=  nodeName + '\t' +
                         nodeType + '\t' +
                         parentID + '\t' +
                         parseInt(pos.x) + '\t' +
                         parseInt(pos.y) + '\n';
      }
    }

    //Finally return a string that includes whole graph lovely and peacefully :)
    return returnString;
  },
  parseGraph: function(graphText)
  {

    var allEles = [];
    var nodes = [];
    var edges = [];

    // By lines
    // Match all new line character representations
    var seperator = /\r?\n|\r/;
    var lines = graphText.split(seperator);
    var edgesStartIndex = -1;
    var graphDataIndex = 5;

    var title = lines[0];
    var description = lines[2];

    //TODO Legacy pathways workaround
    if (lines[0].includes("--NODE_NAME"))
    {
      graphDataIndex = 1;
      title = "New Pathway";
      description = "";
    }

    // start from first line skip node meta data
    for(var i = graphDataIndex; i < lines.length; i++)
    {
      // If we encounter a blank line, that means we need to parse edges from now on !
      // so skip blank line and edge meta line
      if (lines[i].length == 0 || lines[i] === "")
      {
        edgesStartIndex = i + 2;
        break;
      }

      //Fetch a line for nodes
      var lineData = lines[i].split('\t');
      var nodeName = lineData[0];
      var nodeID = lineData[1];
      var nodeType = lineData[2];
      var parentID = lineData[3];
      var posX = (lineData.length > 4) ? lineData[4] : "0";
      var posY = (lineData.length > 5) ? lineData[5] : "0";

      var newNode = {
        group: 'nodes',
        data:
        {
          id: nodeID,
          name: nodeName,
          type:nodeType
        },
        position:
        {
          x: parseInt(posX),
          y: parseInt(posY)
        }
      };

      if ( parentID != '-1')
      {
        newNode.data.parent = parentID;
      }
      nodes.push(newNode);
    }

    //Read edges
    for(var i = edgesStartIndex; i < lines.length; i++)
    {
      //If we reach EOF we break loop
      if (lines[i].length == 0)
      {
        break;
      }

      var lineData = lines[i].split('\t');
      var edgeID = lineData[0];
      var edgeSource = lineData[1];
      var edgeTarget = lineData[2];
      var edgeType = lineData[3];
      var pubmedIDs = (lineData.length > 4) ? lineData[4].split(';') : [];

      newEdge = {
        group: 'edges', data:
        {
          id: edgeID,
          type: edgeType,
          source: edgeSource,
          target: edgeTarget,
          pubmedIDs: pubmedIDs
        }
      };
      edges.push(newEdge);
    }

    return {title: title, description: description, nodes: nodes, edges: edges};
  }
}

module.exports = SaveLoadUtils;
