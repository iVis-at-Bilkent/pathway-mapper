/**
 *
 */
import SaveLoadUtility from '../utils/SaveLoadUtility'
import EditorActionsManager from '../managers/EditorActionsManager'
import GraphUtilities from '../utils/GraphUtilities'

export default class SVGExporter {
  SVGNameSpace = 'http://www.w3.org/2000/svg'
  svg = document.createElementNS(this.SVGNameSpace, 'svg')
  NODE_FILL_COLOR = 'rgb(255,255,255)'
  FAMILY_FILL_COLOR = 'rgb(255,255,255)'
  FAMILY_STROKE_COLOR = 'rgb(204,204,204)'
  NODE_STROKE_COLOR = 'rgb(0,0,0)'
  COMPARTMENT_STROKE_WIDTH = 2
  NODE_STROKE_WIDTH = 1
  NODE_OPACITY = 0.5
  ROUNDING_FACTOR = 6
  GENOMICDATA_LABEL_Y_OFFSET = -15
  EDGE_WIDTH = 1
  T_WIDTH = 2
  T_HEIGHT = 8
  T_ARROW_HEAD_OFFSET = 2
  TRIANGLE_ARROW_HEAD_HEIGHT = 8
  TRIANGLE_ARROW_HEAD_WIDTH = 8
  DASH_PARAMETERS = '5, 3'
  COMPOUND_MARGIN = 8
  NODE_FONT_SIZE = 14

  edgeEditing: any
  editor: EditorActionsManager
  constructor(edgeEditing: any, editor: EditorActionsManager) {
    this.edgeEditing = edgeEditing
    this.editor = editor
  }

  resetSVG() {
    this.svg = document.createElementNS(this.SVGNameSpace, 'svg')
  }

  exportGraph(nodes, edges) {
    //Reset SVG
    this.resetSVG()
    this.svg.setAttribute('version', '1.1')
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    //Set viewport of output SVG
    var cyBounds = this.editor.cy.extent()
    this.svg.setAttribute(
      'viewBox',
      cyBounds.x1 + ' ' + cyBounds.y1 + ' ' + cyBounds.w + ' ' + cyBounds.h
    )

    var that = this
    var nodeMap = {}

    var nodeTree = new GraphUtilities().createGraphHierarchy(nodes)
    var traverseFunction = function(node) {
      //Create SVG for current node
      nodeMap[node.id()] = node
      var genomicDataSVG = that.editor.getGenomicDataSVG(node).children
      var oncoprintDataSVG = that.editor.getOncoprintDataSVG(node)
      that.svg.appendChild(that.createRect(node))
      var labelOffset =
        (genomicDataSVG && genomicDataSVG.length > 0)
        || (oncoprintDataSVG.outerHTML !== '')
          ? that.GENOMICDATA_LABEL_Y_OFFSET
          : 0
      that.svg.appendChild(that.createText(node, labelOffset))

      //Append Genomic Data SVG here
      if (genomicDataSVG) {
        while (genomicDataSVG.length > 0) {
          var elemSVG = genomicDataSVG[0]
          var nodePosition = node.position()
          var svgX = elemSVG.getAttribute('x')
          var svgY = elemSVG.getAttribute('y')
          elemSVG.setAttribute(
            'x',
            nodePosition.x - node.width() / 2 + parseFloat(svgX)
          )
          elemSVG.setAttribute(
            'y',
            nodePosition.y - node.height() / 2 + parseFloat(svgY)
          )
          that.svg.appendChild(elemSVG)
        }
      } else if (oncoprintDataSVG.outerHTML !== '') {
        var nodePosition = node.position()
        
        const width = parseInt(oncoprintDataSVG.getAttribute('width'));
        const height = parseInt(oncoprintDataSVG.getAttribute('height'));
        const verticalPadding = 8

        const y = nodePosition.y + (node.height() / 2) - (height + verticalPadding)
        oncoprintDataSVG.setAttribute(
          'x',
          nodePosition.x - (width / 2)
        )
        oncoprintDataSVG.setAttribute(
          'y', y
        )
        that.svg.appendChild(oncoprintDataSVG);
      }

      //Traverse children
      if (node.childNodes) {
        for (var i in node.childNodes) {
          traverseFunction(node.childNodes[i])
        }
      }
    }

    //Traverse node hierarchy
    for (var i in nodeTree) {
      var rootLevelNode = nodeTree[i]
      traverseFunction(rootLevelNode)
    }

    edges.forEach(function(edge) {
      var source = nodeMap[edge.source().id()]
      var target = nodeMap[edge.target().id()]
      that.drawEdge(edge, source, target)
    })

    return this.svg.outerHTML
  }

  drawEdge(edge, source, target) {
    var edgeType = edge.data().type

    var sourceRectangle = {
      x: source.position().x,
      y: source.position().y,
      width: source.width(),
      height: source.height()
    }

    var targetRectangle = {
      x: target.position().x,
      y: target.position().y,
      width: target.width(),
      height: target.height()
    }

    //If source or target node is compound node adjust their width and height according to compound margins
    if (source.isParent()) {
      sourceRectangle.width += this.COMPOUND_MARGIN
      sourceRectangle.height += this.COMPOUND_MARGIN
    }

    if (target.isParent()) {
      targetRectangle.width += this.COMPOUND_MARGIN
      targetRectangle.height += this.COMPOUND_MARGIN
    }

    var numberOfBendPoints = 0
    if (this.edgeEditing.getSegmentPoints(edge) !== undefined)
      numberOfBendPoints = this.edgeEditing.getSegmentPoints(edge).length / 2

    var clipPoints
    if (numberOfBendPoints > 0) {
      var lastBendPoint = {
        x: this.edgeEditing.getSegmentPoints(edge)[2 * numberOfBendPoints - 2],
        y: this.edgeEditing.getSegmentPoints(edge)[2 * numberOfBendPoints - 1],
        height: 0,
        width: 0
      }
      //Calculate clipping point of target node with the segment from last bend point by Cohen Sutherland algorithm
      clipPoints = this.findClippingPoints(lastBendPoint, targetRectangle)
    } else {
      //Calculate clipping points of both source and target nodes by Cohen Sutherland algorithm
      clipPoints = this.findClippingPoints(sourceRectangle, targetRectangle)
    }

    //Calculate unit vector pointing from source clipping coordinates to target clipping coordinates
    var unitV = this.unitVector({
      x: clipPoints.targetClipPoints.x - clipPoints.sourceClipPoints.x,
      y: clipPoints.targetClipPoints.y - clipPoints.sourceClipPoints.y
    })
    var inverseUnitV = this.scale(unitV, -1)

    var targetX = clipPoints.targetClipPoints.x
    var targetY = clipPoints.targetClipPoints.y

    //Draw Triangle arrow head
    if (edgeType == 'ACTIVATES' || edgeType == 'INDUCES') {
      targetX =
        clipPoints.targetClipPoints.x +
        this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.x
      targetY =
        clipPoints.targetClipPoints.y +
        this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.y

      var point1Vector = this.rotateVector(unitV, Math.PI / 2)
      var point2Vector = this.rotateVector(unitV, -Math.PI / 2)

      point1Vector = this.scale(
        point1Vector,
        this.TRIANGLE_ARROW_HEAD_WIDTH / 2
      )
      point2Vector = this.scale(
        point2Vector,
        this.TRIANGLE_ARROW_HEAD_WIDTH / 2
      )

      var point1X = targetX + point1Vector.x
      var point1Y = targetY + point1Vector.y

      var point2X = targetX + point2Vector.x
      var point2Y = targetY + point2Vector.y

      var polySVG = document.createElementNS(this.SVGNameSpace, 'polygon')
      polySVG.setAttribute(
        'points',
        point1X +
          ',' +
          point1Y +
          ',' +
          point2X +
          ',' +
          point2Y +
          ',' +
          clipPoints.targetClipPoints.x +
          ',' +
          clipPoints.targetClipPoints.y
      )

      this.svg.appendChild(polySVG)
    }
    //Draw T type arrow head
    else if (edgeType === 'INHIBITS' || edgeType === 'REPRESSES') {
      targetX =
        clipPoints.targetClipPoints.x +
        this.T_ARROW_HEAD_OFFSET * inverseUnitV.x
      targetY =
        clipPoints.targetClipPoints.y +
        this.T_ARROW_HEAD_OFFSET * inverseUnitV.y

      //Calculate T shape points
      var point1Vector = this.rotateVector(unitV, Math.PI / 2)
      var point2Vector = this.rotateVector(unitV, -Math.PI / 2)
      point1Vector = this.scale(point1Vector, this.T_HEIGHT / 2)
      point2Vector = this.scale(point2Vector, this.T_HEIGHT / 2)

      var point1X = targetX + point1Vector.x
      var point1Y = targetY + point1Vector.y
      var point2X = targetX + point2Vector.x
      var point2Y = targetY + point2Vector.y

      //Draw edge arrow line here !
      var lineSVG = document.createElementNS(this.SVGNameSpace, 'line')
      lineSVG.setAttribute('x1', point1X)
      lineSVG.setAttribute('y1', point1Y)
      lineSVG.setAttribute('x2', point2X)
      lineSVG.setAttribute('y2', point2Y)
      lineSVG.setAttribute('stroke-width', this.T_WIDTH + '')
      lineSVG.setAttribute('stroke', 'black')
      this.svg.appendChild(lineSVG)
    }

    //Draw edge lines here !
    if (numberOfBendPoints > 0) {
      //Calculate initial clipping point of source node with the segment from first bend point
      var firstBendPoint = {
        x: this.edgeEditing.getSegmentPoints(edge)[0],
        y: this.edgeEditing.getSegmentPoints(edge)[1],
        height: 0,
        width: 0
      }
      var initialClipPoint = this.findClippingPoints(
        sourceRectangle,
        firstBendPoint
      )

      //Create a copy array of edgeEditing.getSegmentPoints(edge) which contain all the bending points
      // including source and target clipping point. The first elements of the array are source's x and y positions
      // and the last ones are target's x and y positions
      var points = [
        initialClipPoint.sourceClipPoints.x,
        initialClipPoint.sourceClipPoints.y
      ]
      for (var i = 0; i < numberOfBendPoints * 2; i++) {
        points.push(this.edgeEditing.getSegmentPoints(edge)[i])
      }
      points.push(clipPoints.targetClipPoints.x)
      points.push(clipPoints.targetClipPoints.y)

      for (var i = 0; i < points.length - 2; i += 2) {
        var lineSVG = document.createElementNS(this.SVGNameSpace, 'line')
        lineSVG.setAttribute('x1', points[i])
        lineSVG.setAttribute('y1', points[i + 1])
        lineSVG.setAttribute('x2', points[i + 2])
        lineSVG.setAttribute('y2', points[i + 3])
        lineSVG.setAttribute('stroke-width', this.EDGE_WIDTH + '')
        lineSVG.setAttribute('stroke', 'black')

        //Draw dashed if induces or represses interaction
        if (edgeType == 'INDUCES' || edgeType == 'REPRESSES') {
          lineSVG.setAttribute('stroke-dasharray', this.DASH_PARAMETERS)
        }

        this.svg.appendChild(lineSVG)
      }
    } else {
      var lineSVG = document.createElementNS(this.SVGNameSpace, 'line')
      lineSVG.setAttribute('x1', clipPoints.sourceClipPoints.x)
      lineSVG.setAttribute('y1', clipPoints.sourceClipPoints.y)
      lineSVG.setAttribute('x2', targetX)
      lineSVG.setAttribute('y2', targetY)
      lineSVG.setAttribute('stroke-width', this.EDGE_WIDTH + '')
      lineSVG.setAttribute('stroke', 'black')

      //Draw dashed if induces or represses interaction
      if (edgeType == 'INDUCES' || edgeType == 'REPRESSES') {
        lineSVG.setAttribute('stroke-dasharray', this.DASH_PARAMETERS)
      }

      this.svg.appendChild(lineSVG)
    }
  }

  /**
   *
   * **/
  findClippingPoints(sourceRectangle, targetRectangle) {
    var sourceAABB = {
      xMin: sourceRectangle.x - sourceRectangle.width / 2,
      xMax: sourceRectangle.x + sourceRectangle.width / 2,
      yMin: sourceRectangle.y - sourceRectangle.height / 2,
      yMax: sourceRectangle.y + sourceRectangle.height / 2
    }

    var targetAABB = {
      xMin: targetRectangle.x - targetRectangle.width / 2,
      xMax: targetRectangle.x + targetRectangle.width / 2,
      yMin: targetRectangle.y - targetRectangle.height / 2,
      yMax: targetRectangle.y + targetRectangle.height / 2
    }

    var line1 = {
      x1: sourceRectangle.x,
      y1: sourceRectangle.y,
      x2: targetRectangle.x,
      y2: targetRectangle.y
    }

    var line2 = {
      x1: targetRectangle.x,
      y1: targetRectangle.y,
      x2: sourceRectangle.x,
      y2: sourceRectangle.y
    }

    var returnObj = {
      sourceClipPoints: this.clipLine(line1, sourceAABB),
      targetClipPoints: this.clipLine(line2, targetAABB)
    }

    return returnObj
  }

  createRect(node) {
    var nodeRectangle = document.createElementNS(this.SVGNameSpace, 'rect')
    var nodePosition = node.position()
    if (node.isParent()) {
      nodeRectangle.setAttribute(
        'x',
        nodePosition.x - node.width() / 2 - this.COMPOUND_MARGIN / 2 + ''
      )
      nodeRectangle.setAttribute(
        'y',
        nodePosition.y - node.height() / 2 - this.COMPOUND_MARGIN / 2 + ''
      )
      nodeRectangle.setAttribute('width', node.width() + this.COMPOUND_MARGIN)
      nodeRectangle.setAttribute('height', node.height() + this.COMPOUND_MARGIN)
    } else {
      nodeRectangle.setAttribute('x', nodePosition.x - node.width() / 2 + '')
      nodeRectangle.setAttribute('y', nodePosition.y - node.height() / 2 + '')
      nodeRectangle.setAttribute('width', node.width())
      nodeRectangle.setAttribute('height', node.height())
    }

    nodeRectangle = this.createStyleForNodes(node, nodeRectangle)

    return nodeRectangle
  }

  createText(node, genomicDataOffset) {
    var verticalTextOffset = 5
    var nodePosition = node.position()
    var svgText = document.createElementNS(this.SVGNameSpace, 'text')

    if (node.isParent()) {
      verticalTextOffset = 20
      svgText.setAttribute('x', nodePosition.x)
      svgText.setAttribute(
        'y',
        nodePosition.y + node.height() / 2 + verticalTextOffset
      )
    } else {
      svgText.setAttribute('x', nodePosition.x)
      svgText.setAttribute(
        'y',
        nodePosition.y + verticalTextOffset + genomicDataOffset
      )
    }

    svgText.setAttribute('font-family', 'Arial')
    svgText.setAttribute('text-anchor', 'middle')
    svgText.setAttribute('font-size', this.NODE_FONT_SIZE + '')
    svgText.innerHTML = node.data().name
    return svgText
  }

  createStyleForNodes(node, nodeRectangle) {
    var nodeType = node.data().type
    var strokeWidth = node.css('border-width') || this.NODE_STROKE_WIDTH;
    var strokeColor = this.NODE_STROKE_COLOR
    var fillColor = this.NODE_FILL_COLOR
    var opacity = this.NODE_OPACITY
    var strokeOpacity = 1

    if (nodeType == 'GENE' || nodeType == 'COMPARTMENT') {
      nodeRectangle.setAttribute('rx', this.ROUNDING_FACTOR)
      nodeRectangle.setAttribute('ry', this.ROUNDING_FACTOR)

      if (nodeType == 'COMPARTMENT') strokeWidth = this.COMPARTMENT_STROKE_WIDTH
    }

    if (nodeType == 'PROCESS') {
      opacity = 0
      strokeOpacity = 0
    }

    if (nodeType == 'FAMILY') {
      fillColor = this.FAMILY_FILL_COLOR
      strokeColor = this.FAMILY_STROKE_COLOR
    }

    var styleString =
      'stroke-width:' +
      strokeWidth +
      ';' +
      'stroke:' +
      strokeColor +
      ';' +
      'fill-opacity:' +
      opacity +
      ';' +
      'fill:' +
      fillColor +
      ';' +
      'stroke-opacity:' +
      strokeOpacity +
      ';'

    nodeRectangle.setAttribute('style', styleString)

    return nodeRectangle
  }

  /**
   * Cohen Sutherland Line Clipping algorithm implementation
   * **/
  clipLine(line, rectangle) {
    //Clipping regions encoded with different integers !
    var INSIDE = 0
    var LEFT = 1
    var RIGHT = 2
    var BOTTOM = 4
    var TOP = 8

    /*
     *  Get outcode of given point compared to the rectangle
     * */
    function getOutCode(point, rectangle) {
      var outcode = INSIDE

      if (point.x < rectangle.xMin) outcode = outcode | LEFT
      else if (point.x > rectangle.xMax) outcode = outcode | RIGHT

      if (point.y < rectangle.yMin) outcode = outcode | TOP
      else if (point.y > rectangle.yMax) outcode = outcode | BOTTOM

      return outcode
    }

    var outcode0 = getOutCode({ x: line.x1, y: line.y1 }, rectangle)
    var outcode1 = getOutCode({ x: line.x2, y: line.y2 }, rectangle)

    var slope = (line.y2 - line.y1) / (line.x2 - line.x1)
    var returnCoords = { x: line.x1, y: line.y1, slope: slope }

    //Main clipping loop
    var accept = false
    while (true) {
      // Bitwise OR is 0. Trivially accept and get out of loop
      if (!(outcode0 | outcode1)) {
        accept = true
        break
      }
      // Bitwise AND is not 0. Trivially reject and get out of loop
      else if (outcode0 & outcode1) {
        break
      } else {
        var outCode = outcode0 ? outcode0 : outcode1

        if (outCode & TOP) {
          returnCoords.x = line.x1 + (rectangle.yMin - line.y1) / slope
          returnCoords.y = rectangle.yMin
        } else if (outCode & BOTTOM) {
          returnCoords.x = line.x1 + (rectangle.yMax - line.y1) / slope
          returnCoords.y = rectangle.yMax
        } else if (outCode & RIGHT) {
          returnCoords.x = rectangle.xMax
          returnCoords.y = line.y1 + slope * (rectangle.xMax - line.x1)
        } else if (outCode & LEFT) {
          returnCoords.x = rectangle.xMin
          returnCoords.y = line.y1 + slope * (rectangle.xMin - line.x1)
        }

        // Now we move outside point to intersection point to clip
        // and get ready for next pass.
        if (outCode == outcode0) {
          outcode0 = getOutCode(
            { x: returnCoords.x, y: returnCoords.y },
            rectangle
          )
        } else {
          outcode1 = getOutCode(
            { x: returnCoords.x, y: returnCoords.y },
            rectangle
          )
        }
      }
    }

    return returnCoords
  }

  /**
   * Utility vector functions
   * */
  dotProduct(v1, v2) {
    var newX = v1.x * v2.x
    var newY = v1.y * v2.y

    return { x: newX, y: newY }
  }

  unitVector(v) {
    var inverseLength = 1 / Math.sqrt(v.x * v.x + v.y * v.y)

    return {
      x: v.x * inverseLength,
      y: v.y * inverseLength
    }
  }

  rotateVector(v, radians) {
    var newX = v.x * Math.cos(radians) - v.y * Math.sin(radians)
    var newY = v.x * Math.sin(radians) + v.y * Math.cos(radians)

    return { x: newX, y: newY }
  }

  scale(v, scalar) {
    var newX = v.x * scalar
    var newY = v.y * scalar

    return { x: newX, y: newY }
  }
}
