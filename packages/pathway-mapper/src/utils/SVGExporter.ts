import EditorActionsManager from "../managers/EditorActionsManager";
import GraphUtilities from "../utils/GraphUtilities";

export default class SVGExporter {
  SVGNameSpace = "http://www.w3.org/2000/svg";
  svg = document.createElementNS(this.SVGNameSpace, "svg");
  NODE_FILL_COLOR = "rgb(255,255,255)";
  FAMILY_FILL_COLOR = "rgb(255,255,255)";
  FAMILY_STROKE_COLOR = "rgb(204,204,204)";
  NODE_STROKE_COLOR = "rgb(0,0,0)";
  COMPARTMENT_STROKE_WIDTH = 2;
  NODE_STROKE_WIDTH = 1;
  NODE_OPACITY = 0.5;
  ROUNDING_FACTOR = 6;
  GENOMICDATA_LABEL_Y_OFFSET = -15;
  EDGE_ARROW_SCALE = 1.7;
  EDGE_WIDTH = 1;
  T_ARROW_HEAD_WIDTH = 2 * this.EDGE_ARROW_SCALE;
  T_ARROW_HEAD_HEIGHT = 8 * this.EDGE_ARROW_SCALE;
  TRIANGLE_ARROW_HEAD_HEIGHT = 8 * this.EDGE_ARROW_SCALE;
  TRIANGLE_ARROW_HEAD_WIDTH = 8 * this.EDGE_ARROW_SCALE;
  DASH_PARAMETERS = "5, 3";
  COMPOUND_MARGIN = 8;
  NODE_FONT_SIZE = 14;

  edgeEditing: any;
  editor: EditorActionsManager;
  constructor(edgeEditing: any, editor: EditorActionsManager) {
    this.edgeEditing = edgeEditing;
    this.editor = editor;
  }

  resetSVG() {
    this.svg = document.createElementNS(this.SVGNameSpace, "svg");
  }

  exportGraph(nodes, edges) {
    //Reset SVG
    this.resetSVG();
    this.svg.setAttribute("version", "1.1");
    this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //Set viewport of output SVG
    var cyBounds = this.editor.cy.extent();
    this.svg.setAttribute(
      "viewBox",
      cyBounds.x1 + " " + cyBounds.y1 + " " + cyBounds.w + " " + cyBounds.h
    );

    var self = this;
    var nodeMap = {};

    var nodeTree = GraphUtilities.createGraphHierarchy(nodes);
    var traverseFunction = function(node) {
      //Create SVG for current node
      nodeMap[node.id()] = node;
      var genomicDataSVG = self.editor.getGenomicDataSVG(node).children;
      var oncoprintDataSVG = self.editor.getOncoprintDataSVG(node);
      self.svg.appendChild(self.createRect(node));
      var labelOffset =
        (genomicDataSVG && genomicDataSVG.length > 0) ||
        oncoprintDataSVG.outerHTML !== ""
          ? self.GENOMICDATA_LABEL_Y_OFFSET
          : 0;
      self.svg.appendChild(self.createNodeLabel(node, labelOffset));

      //Append Genomic Data SVG
      if (genomicDataSVG) {
        while (genomicDataSVG.length > 0) {
          var elemSVG = genomicDataSVG[0];
          var nodePosition = node.position();
          var svgX = elemSVG.getAttribute("x");
          var svgY = elemSVG.getAttribute("y");
          elemSVG.setAttribute(
            "x",
            nodePosition.x - node.width() / 2 + parseFloat(svgX)
          );
          elemSVG.setAttribute(
            "y",
            nodePosition.y - node.height() / 2 + parseFloat(svgY)
          );
          self.svg.appendChild(elemSVG);
        }
      }
      //Append Oncoprint Data SVG
      else if (oncoprintDataSVG.outerHTML !== "") {
        var nodePosition = node.position();

        const width = parseInt(oncoprintDataSVG.getAttribute("width"));
        const height = parseInt(oncoprintDataSVG.getAttribute("height"));
        const verticalPadding = 8;

        const y =
          nodePosition.y + node.height() / 2 - (height + verticalPadding);
        oncoprintDataSVG.setAttribute("x", nodePosition.x - width / 2);
        oncoprintDataSVG.setAttribute("y", y);
        self.svg.appendChild(oncoprintDataSVG);
      }

      //Traverse children
      if (node.childNodes) {
        for (var i in node.childNodes) {
          traverseFunction(node.childNodes[i]);
        }
      }
    };

    //Traverse node hierarchy
    for (var i in nodeTree) {
      var rootLevelNode = nodeTree[i];
      traverseFunction(rootLevelNode);
    }

    edges.forEach(function(edge) {
      self.drawEdge(edge);
    });

    return this.svg.outerHTML;
  }

  drawEdge(edge) {
    const sourceEndpoint = edge.sourceEndpoint();
    const targetEndpoint = edge.targetEndpoint();
    const targetArrowShape = edge.style("target-arrow-shape");
    const lineStyle = edge.style("line-style");
    const curveStyle = edge.style("curve-style");
    const anchorPoints = curveStyle === "segments" ? 
                        edge.segmentPoints() : 
                        edge.controlPoints();

    const labelElement = this.createEdgeLabel(edge);
    if (labelElement) {
      this.svg.appendChild(labelElement);
    }

    let lastAnchor = {
      x: sourceEndpoint.x,
      y: sourceEndpoint.y
    }
    let edgeEndpoint = {
      x: targetEndpoint.x,
      y: targetEndpoint.y
    };

    if (anchorPoints && anchorPoints.length > 0) {
      lastAnchor = {
        x: anchorPoints[anchorPoints.length - 1].x,
        y: anchorPoints[anchorPoints.length - 1].y
      }
    }

    var unitV = this.unitVector({
      x: targetEndpoint.x - lastAnchor.x,
      y: targetEndpoint.y - lastAnchor.y,
    });
    var inverseUnitV = this.scale(unitV, -1);

    var targetX = targetEndpoint.x;
    var targetY = targetEndpoint.y;

    //Draw Triangle arrow head
    if (targetArrowShape === "triangle") {
      targetX =
        targetEndpoint.x +
        this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.x;
      targetY =
        targetEndpoint.y +
        this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.y;

      var point1Vector = this.rotateVector(unitV, Math.PI / 2);
      var point2Vector = this.rotateVector(unitV, -Math.PI / 2);

      point1Vector = this.scale(
        point1Vector,
        this.TRIANGLE_ARROW_HEAD_WIDTH / 2
      );
      point2Vector = this.scale(
        point2Vector,
        this.TRIANGLE_ARROW_HEAD_WIDTH / 2
      );

      var point1X = targetX + point1Vector.x;
      var point1Y = targetY + point1Vector.y;

      var point2X = targetX + point2Vector.x;
      var point2Y = targetY + point2Vector.y;

      edgeEndpoint = {
        x: (point1X + point2X) / 2,
        y: (point1Y + point2Y) / 2
      }

      var polySVG = document.createElementNS(this.SVGNameSpace, "polygon");
      polySVG.setAttribute(
        "points",
        point1X +
          "," +
          point1Y +
          "," +
          point2X +
          "," +
          point2Y +
          "," +
          targetEndpoint.x +
          "," +
          targetEndpoint.y
      );

      this.svg.appendChild(polySVG);
    }
    //Draw T type arrow head
    else if (targetArrowShape === "tee") {
      targetX =
        targetEndpoint.x 
      targetY =
        targetEndpoint.y 

      //Calculate T shape points
      var point1Vector = this.rotateVector(unitV, Math.PI / 2);
      var point2Vector = this.rotateVector(unitV, -Math.PI / 2);
      point1Vector = this.scale(point1Vector, this.T_ARROW_HEAD_HEIGHT / 2);
      point2Vector = this.scale(point2Vector, this.T_ARROW_HEAD_HEIGHT / 2);

      var point1X = targetX + point1Vector.x;
      var point1Y = targetY + point1Vector.y;
      var point2X = targetX + point2Vector.x;
      var point2Y = targetY + point2Vector.y;

      edgeEndpoint = {
        x: (point1X + point2X) / 2,
        y: (point1Y + point2Y) / 2
      }

      //Draw edge arrow line here !
      var lineSVG = document.createElementNS(this.SVGNameSpace, "line");
      lineSVG.setAttribute("x1", point1X);
      lineSVG.setAttribute("y1", point1Y);
      lineSVG.setAttribute("x2", point2X);
      lineSVG.setAttribute("y2", point2Y);
      lineSVG.setAttribute("stroke-width", this.T_ARROW_HEAD_WIDTH.toString());
      lineSVG.setAttribute("stroke", "black");
      this.svg.appendChild(lineSVG);
    }
    
    // no anchors means a single line connecting source and target end points
    if (!anchorPoints || anchorPoints.length < 1) {
      const lineSVG = document.createElementNS(this.SVGNameSpace, "line");
      lineSVG.setAttribute("x1", sourceEndpoint.x);
      lineSVG.setAttribute("y1", sourceEndpoint.y);
      lineSVG.setAttribute("x2", edgeEndpoint.x);
      lineSVG.setAttribute("y2", edgeEndpoint.y);
      lineSVG.setAttribute("stroke-width", this.EDGE_WIDTH.toString());
      lineSVG.setAttribute("stroke", "black");
      if (lineStyle === "dashed") {
        lineSVG.setAttribute("stroke-dasharray", this.DASH_PARAMETERS);
      }
      this.svg.appendChild(lineSVG);
    }
    else if (curveStyle === "unbundled-bezier" || curveStyle === "bezier") {
      const pathSVG = document.createElementNS(this.SVGNameSpace, "path");
      let pathPoints: string[] = [];

      for (let i = 0; i < anchorPoints.length; i++) {
        if (i === 0) {
          pathPoints.push("M" + sourceEndpoint.x + "," + sourceEndpoint.y);
          pathPoints.push("Q" + anchorPoints[i].x + "," + anchorPoints[i].y);
          if (anchorPoints.length === 1) {
            pathPoints.push(edgeEndpoint.x + "," + edgeEndpoint.y);
          }
          else {
            const furtherEndPoint = {
              x: (anchorPoints[i].x + anchorPoints[i+1].x) / 2,
              y: (anchorPoints[i].y + anchorPoints[i+1].y) / 2 
            }
            pathPoints.push(furtherEndPoint.x + "," + furtherEndPoint.y);
          }
        }
        else {
          if (i < anchorPoints.length - 1) {
            const furtherEndPoint = {
              x: (anchorPoints[i].x + anchorPoints[i+1].x) / 2,
              y: (anchorPoints[i].y + anchorPoints[i+1].y) / 2 
            }
            pathPoints.push("T" + furtherEndPoint.x + "," + furtherEndPoint.y);
          }
          else {
            pathPoints.push("T" + edgeEndpoint.x + "," + edgeEndpoint.y);
          }
        }
      }
      pathSVG.setAttribute(
        'd',
        pathPoints.join(" ")
      );
      pathSVG.setAttribute('stroke-width', this.EDGE_WIDTH.toString());
      pathSVG.setAttribute('stroke', 'black');
      if (lineStyle === "dashed") {
        pathSVG.setAttribute("stroke-dasharray", this.DASH_PARAMETERS);
      }
      pathSVG.setAttribute('fill', 'none');
      this.svg.appendChild(pathSVG);
    }
    // anchors means polyline
    else {
      const polylineSVG = document.createElementNS(this.SVGNameSpace, "polyline");
      let polylinePoints: string[] = [];

      for (let i = 0; i < anchorPoints.length; i++) {
        if (i === 0) {
          polylinePoints.push(sourceEndpoint.x + "," + sourceEndpoint.y);
          polylinePoints.push(anchorPoints[i].x + "," + anchorPoints[i].y);
          if (anchorPoints.length === 1) {
            polylinePoints.push(edgeEndpoint.x + "," + edgeEndpoint.y);
          }
        }
        else if (i === anchorPoints.length - 1) {
          polylinePoints.push(anchorPoints[i].x + "," + anchorPoints[i].y);
          polylinePoints.push(edgeEndpoint.x + "," + edgeEndpoint.y);
        }
        else {
          polylinePoints.push(anchorPoints[i].x + "," + anchorPoints[i].y);
        }
      }
      polylineSVG.setAttribute(
        'points',
        polylinePoints.join(" ")
      );
      polylineSVG.setAttribute('stroke-width', this.EDGE_WIDTH.toString());
      polylineSVG.setAttribute('stroke', 'black');
      if (lineStyle === "dashed") {
        lineSVG.setAttribute("stroke-dasharray", this.DASH_PARAMETERS);
      }
      polylineSVG.setAttribute('fill', 'none');
      this.svg.appendChild(polylineSVG);
    }
    
  }

  createRect(node) {
    var nodeRectangle = document.createElementNS(this.SVGNameSpace, "rect");
    var nodePosition = node.position();
    if (node.isParent()) {
      nodeRectangle.setAttribute(
        "x",
        nodePosition.x - node.width() / 2 - this.COMPOUND_MARGIN / 2 + ""
      );
      nodeRectangle.setAttribute(
        "y",
        nodePosition.y - node.height() / 2 - this.COMPOUND_MARGIN / 2 + ""
      );
      nodeRectangle.setAttribute("width", node.width() + this.COMPOUND_MARGIN);
      nodeRectangle.setAttribute(
        "height",
        node.height() + this.COMPOUND_MARGIN
      );
    } else {
      nodeRectangle.setAttribute("x", nodePosition.x - node.width() / 2 + "");
      nodeRectangle.setAttribute("y", nodePosition.y - node.height() / 2 + "");
      nodeRectangle.setAttribute("width", node.width());
      nodeRectangle.setAttribute("height", node.height());
    }

    nodeRectangle = this.createStyleForNodes(node, nodeRectangle);

    return nodeRectangle;
  }

  createNodeLabel(node, genomicDataOffset) {
    var verticalTextOffset = 5;
    var nodePosition = node.position();
    var svgText = document.createElementNS(this.SVGNameSpace, "text");

    if (node.isParent()) {
      verticalTextOffset = 20;
      svgText.setAttribute("x", nodePosition.x);
      svgText.setAttribute(
        "y",
        nodePosition.y + node.height() / 2 + verticalTextOffset
      );
    } else {
      svgText.setAttribute("x", nodePosition.x);
      svgText.setAttribute(
        "y",
        nodePosition.y + verticalTextOffset + genomicDataOffset
      );
    }

    svgText.setAttribute("font-family", "Arial");
    svgText.setAttribute("text-anchor", "middle");
    svgText.setAttribute("font-size", this.NODE_FONT_SIZE.toString());
    svgText.innerHTML = node.data("name");
    return svgText;
  }

  createStyleForNodes(node, nodeRectangle) {
    var nodeType = node.data().type;
    var strokeWidth = node.css("border-width") || this.NODE_STROKE_WIDTH;
    var strokeColor = this.NODE_STROKE_COLOR;
    var fillColor = this.NODE_FILL_COLOR;
    var opacity = this.NODE_OPACITY;
    var strokeOpacity = 1;

    if (nodeType == "GENE" || nodeType == "COMPARTMENT") {
      nodeRectangle.setAttribute("rx", this.ROUNDING_FACTOR);
      nodeRectangle.setAttribute("ry", this.ROUNDING_FACTOR);

      if (nodeType == "COMPARTMENT")
        strokeWidth = this.COMPARTMENT_STROKE_WIDTH;
    }

    if (nodeType == "PROCESS") {
      opacity = 0;
      strokeOpacity = 0;
    }

    if (nodeType == "FAMILY") {
      fillColor = this.FAMILY_FILL_COLOR;
      strokeColor = this.FAMILY_STROKE_COLOR;
    }

    var styleString =
      "stroke-width:" +
      strokeWidth +
      ";" +
      "stroke:" +
      strokeColor +
      ";" +
      "fill-opacity:" +
      opacity +
      ";" +
      "fill:" +
      fillColor +
      ";" +
      "stroke-opacity:" +
      strokeOpacity +
      ";";

    nodeRectangle.setAttribute("style", styleString);

    return nodeRectangle;
  }

  createEdgeLabel(edge) {
    const labelText = edge.data("name");
    
    if (labelText === "") {
      return undefined;
    }
    const svgTextElement = document.createElementNS(this.SVGNameSpace, "text");

    const fontSize = edge.style("font-size");
    const fontFamily = edge.style("font-family");

    // get rotation angle in degrees for transform: rotate()
    const labelRotationAngle = this.getEdgeLabelRotationAngle(edge);
    const lineHeight = edge._private.rscratch.labelLineHeight;

    // adjust margins to compensate for the label hack (see stylesheet)
    const dx = (lineHeight / 4) * Math.sin(edge._private.rscratch.labelAngle);
    const dy = (lineHeight / 4) * Math.cos(edge._private.rscratch.labelAngle);

    const labelPos = {
      x: edge._private.rscratch.labelX + dx,
      y: edge._private.rscratch.labelY - dy
    }

    svgTextElement.setAttribute('x', labelPos.x.toString());
    svgTextElement.setAttribute('y', labelPos.y.toString());
    svgTextElement.setAttribute("font-family", fontFamily);
    svgTextElement.setAttribute("text-anchor", "middle");
    svgTextElement.setAttribute("font-size", fontSize);

    svgTextElement.innerHTML = labelText;

    // adjusting for autorotate option
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#rotate    
    svgTextElement.setAttribute(
      "transform", 
      "rotate(" + 
      labelRotationAngle +
      " " +
      labelPos.x.toString() +
      " " +
      labelPos.y.toString()+
      ")");

    return svgTextElement;
  }

  getEdgeLabelRotationAngle(edge) {
    const labelAngle = edge._private.rscratch.labelAngle;

    if (!labelAngle) {
      return 0;
    }

    return this.toDegrees(labelAngle);
  }

  toDegrees(radians) {
    const pi = Math.PI;
    return radians * (180/pi);
  }

  unitVector(v) {
    var inverseLength = 1 / Math.sqrt(v.x * v.x + v.y * v.y);

    return {
      x: v.x * inverseLength,
      y: v.y * inverseLength,
    };
  }

  rotateVector(v, radians) {
    var newX = v.x * Math.cos(radians) - v.y * Math.sin(radians);
    var newY = v.x * Math.sin(radians) + v.y * Math.cos(radians);

    return { x: newX, y: newY };
  }

  scale(v, scalar) {
    var newX = v.x * scalar;
    var newY = v.y * scalar;

    return { x: newX, y: newY };
  }
}
