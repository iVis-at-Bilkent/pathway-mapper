import { IPathwayInfo } from "../managers/FileOperationsManager";

export default class SaveLoadUtility{
  //Exports given json graph(based on cy.export()) into a string
  static exportGraph(pathwayDetails: IPathwayInfo, cy, edgeEditing)
  {
    var returnString = pathwayDetails.pathwayTitle + '\n\n';
    returnString += pathwayDetails.pathwayDetails +'\n\n';

    //Get nodes and edges
    var nodes = cy.nodes();
    var edges = cy.edges();

    //Prepare Meta Line
     returnString += '--NODE_NAME\tNODE_ID\tNODE_TYPE\tPARENT_ID\tPOSX\tPOSY\tWIDTH\tHEIGHT--'+'\n';

    if (nodes)
    {
      for (let i = 0; i < nodes.length; i++)
      {
        returnString += this.exportNode(nodes[i]);
      }
    }

    //Put a blank line between nodes and edges
    returnString += '\n';
    returnString += '--EDGE_ID\tSOURCE\tTARGET\tEDGE_TYPE\tINTERACTION_PUBMED_ID\tEDGE_NAME\tEDGE_BENDS\tEDGE_CURVE_STYLE\n';

    if (edges) {
      //Write edges
      for (let i = 0; i < edges.length; i++)
      {
        var edgeID = edges[i].data('id');
        var edgeType = edges[i].data('type');
        var source = edges[i].data('source');
        var target = edges[i].data('target');
        var pubmedIDs = edges[i].data('pubmedIDs');
        var pubmedString = "";
        var edgeName = (edges[i].data('name')) ? edges[i].data('name') : "";
        var edgeCurveStyle = edges[i].css('curve-style');

        var numberOfAnchorPoints = 0;
        var anchors = edgeEditing.getAnchorsAsArray(edges[i])
        if (anchors !== undefined)
            numberOfAnchorPoints = anchors.length/2;
        var anchorPointPositions = "";
        for (var j = 0; j < numberOfAnchorPoints; j++)
        {
            anchorPointPositions += "(" + anchors[2*j] + ";" +
                anchors[2*j+1] + ")";
        }

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
                        pubmedString + '\t' +
                        edgeName + '\t' +
                        anchorPointPositions + '\t' + 
                        edgeCurveStyle + '\n';
      }
    }

    //Finally return a string that includes whole graph lovely and peacefully :)
    return returnString;
  }
  static exportAsSIFNX(cy: any)
  {
    let returnString = "";

    //Get nodes and edges
    const nodes = cy.nodes();
    const edges = cy.edges();
    const nodeMap = {};
    //Put a blank line between nodes and edges
    returnString += '\n';
    returnString += 'PARTICIPANT\tPARTICIPANT_TYPE\tPARENT_ID\tPOSX\tPOSY\tWIDTH\tHEIGHT'+'\n';

    if (nodes)
    {
      for (var i = 0; i < nodes.length; i++)
      {
        returnString += this.exportNode(nodes[i]);

        nodeMap[nodes[i].id()] = nodes[i];
      }
    }

    //Put a blank line between nodes and edges
    returnString += '\n';
    returnString += 'PARTICIPANT_A\tPARTICIPANT_B\tTYPE\tPUBMED_IDS\n';

    
    if (edges) {
      //Write edges
      for (var i = 0; i < edges.length; i++)
      {
        var edgeType = edges[i].data("type");
        var source = edges[i].data("source");
        var target = edges[i].data("target");
        var edgeName = edges[i].data("name");
        var pubmedIDs = edges[i].data("pubmedIDs");
        var pubmedString = "";

        if (pubmedIDs != undefined) {
            for (var j = 0; j < pubmedIDs.length; j++)
            {
              pubmedString += pubmedIDs[j];
              if (j != pubmedIDs.length - 1)
                  pubmedString += ";"
            }
        }

        returnString += nodeMap[source].data("name") + '\t' +
                        nodeMap[target].data("name")  + '\t' +
                        edgeType + '\t' +
                        pubmedString + '\t' +
                        edgeName + '\n';
      }
    }

    //Finally return a string that includes whole graph lovely and peacefully :)
    return returnString;
  }
  static exportNode(node)
  {
      //Node specific data fields
      var nodeName = node.data("name");
      var parentID = node.data("parent");
      var nodeID = node.data("id");
      var pos = node.position();
      var nodeType = node.data("type");
      var nodeW = node.data("w");
      var nodeH = node.data("h");

      //Check if node has a parent, if not set parent id -1
      if (node.data("parent"))
      {
          parentID = node.data("parent");
      }
      else
      {
          parentID = -1;
      }

      // Write a line for a node
      return nodeName + '\t' +
          nodeID + '\t' +
          nodeType + '\t' +
          parentID + '\t' +
          parseInt(pos.x) + '\t' +
          parseInt(pos.y) + '\t' +
          nodeW + '\t' +
          nodeH + '\n';
  }
  static parseGraph(graph, isArray) {

    const allEles = [];
    const nodes = [];
    const edges = [];

    // By lines
    // Match all new line character representations
    var seperator = /\r?\n|\r/;
    var lines = (isArray) ? graph : graph.split(seperator);
    var edgesStartIndex = -1;
    var title = lines[0];
    var description = lines[2];

    // In old version description used to expand in multiple lines
    // graphDataIndex holds the line index where the first --NODE_NAME occurs and is used later to load nodes
    let graphDataIndex = 3;
    let isFound = false;
    while (graphDataIndex < lines.length) {
      if (lines[graphDataIndex].includes("--NODE_NAME")) {
        isFound = true;
        break;
      }
      description += "\n" + lines[graphDataIndex];
      graphDataIndex++;
    }
    graphDataIndex++;
    // TODO AMENDMENT
    if(!isFound){
      graphDataIndex = 2;
    }
    //TODO Legacy pathways workaround
    if (lines[0].includes("--NODE_NAME")) {
      graphDataIndex = 1;
      title = "New Pathway";
      description = "";
    }

    // start from first line skip node meta data
    for (var i = graphDataIndex; i < lines.length; i++) {
      // If we encounter a blank line, that means we need to parse edges from now on !
      // so skip blank line and edge meta line
      if (lines[i].length == 0 || lines[i] === "") {
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
      var nodeW = (lineData.length > 7) ? lineData[6] : (nodeType === 'PROCESS') ? (nodeName.length * 6 + 24) : "150";
      var nodeH = (lineData.length > 7) ? lineData[7] : (nodeType === 'PROCESS') ? "24" : "52";

      if(nodeName === " " || nodeName === ""){
        //nodeName = "No Name " + (i + 1);
      }


      var newNode = {
        group: 'nodes',
        data:
          {
            id: nodeID,
            name: nodeName,
            type: nodeType,
            w: nodeW,
            h: nodeH,
            parent: -1
          },
        position:
          {
            x: parseInt(posX),
            y: parseInt(posY)
          }
      };

      if (parentID != '-1') {
        newNode.data.parent = parentID;
      }
      nodes.push(newNode);
    }
    //Read edges
    for (let i = edgesStartIndex; i < lines.length; i++) {
      //If we reach EOF we break loop
      if (lines[i].length == 0) {
        break;
      }

      var lineData = lines[i].split('\t');
      var edgeID = lineData[0];
      var edgeSource = lineData[1];
      var edgeTarget = lineData[2];
      var edgeType = lineData[3];
      var pubmedIDs = (lineData.length > 4) ? lineData[4].split(';') : [];
      var label = (lineData.length > 5) ? lineData[5] : '';
      var anchorPoints = (lineData.length > 6) ? lineData[6] : '';
      var edgeCurveStyle = (lineData.length > 7) ? lineData[7] : '';

      var anchorPointPositions = [];
      if (anchorPoints) {
        var anchorPair = anchorPoints.split(')'); //The last element of anchorPair array is ""
        for (var j = 0; j < anchorPair.length - 1; j++) {
          var separatorIndex = anchorPair[j].indexOf(";");
          var x = anchorPair[j].substring(1, separatorIndex);
          var y = anchorPair[j].substring(separatorIndex + 1, anchorPair[j].length);
          anchorPointPositions.push({x: parseFloat(x), y: parseFloat(y)});
        }
      }

      var edgeData = {
        id: edgeID,//((isFound) ? edgeID : i - edgesStartIndex),
        type: edgeType,//((isFound) ? edgeType : edgeTarget),
        source: edgeSource,//((isFound) ? edgeSource : edgeID),
        target: edgeTarget,//((isFound) ? edgeTarget : edgeSource),
        pubmedIDs: pubmedIDs,
        name: label,
      }

      if (edgeCurveStyle === "unbundled-bezier") {
        edgeData['controlPointPositions'] = anchorPointPositions;
      }
      else {
        edgeData['bendPointPositions'] = anchorPointPositions;
      }

      const newEdge = {
        group: 'edges', 
        data: edgeData
      };
      edges.push(newEdge);
    }
    return {title: title, description: description, nodes: nodes, edges: edges};
  }
}
