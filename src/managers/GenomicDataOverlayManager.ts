import { Console } from 'console'

export default class GenomicDataOverlayManager {
  public genomicDataMap: {}
  public visibleGenomicDataMapByType: {}
  public groupedGenomicDataCount: number
  public groupedGenomicDataMap: {}
  private DEFAULT_VISIBLE_GENOMIC_DATA_COUNT: number
  private MAX_VISIBLE_GENOMIC_DATA_COUNT: number
  private observers: any[]
  private cy: any
  constructor(cy: any) {
    this.cy = cy
    this.genomicDataMap = {}
    this.visibleGenomicDataMapByType = {}
    this.groupedGenomicDataMap = {}
    this.groupedGenomicDataCount = 0
    this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT = 3
    this.MAX_VISIBLE_GENOMIC_DATA_COUNT = 6

    // Observer-observable pattern related stuff
    this.observers = []
  }

  getEmptyGroupID() {
    const oldCount = this.groupedGenomicDataCount
    this.groupedGenomicDataCount++
    return oldCount
  }

  addGenomicDataLocally(genomicData, groupID) {
    this.parseGenomicData(genomicData, groupID)
    this.showGenomicData()
    this.notifyObservers()
  }

  preparePortalGenomicDataShareDB(genomicData) {
    const geneMap = {}
    const visMap = {}

    for (const cancerKey in genomicData) {
      for (const geneSymbol in genomicData[cancerKey]) {
        geneMap[geneSymbol] = {}
        geneMap[geneSymbol][cancerKey] = genomicData[cancerKey][geneSymbol]
      }

      visMap[cancerKey] = true
    }

    return {
      genomicDataMap: geneMap,
      visibilityMap: visMap
    }
  }

  addGenomicData(data) {
    this.genomicDataMap = data
  }

  removeGenomicVisData() {
    this.visibleGenomicDataMapByType = {}
  }

  addGenomicDataWithGeneSymbol(geneSymbol, data) {
    this.genomicDataMap[geneSymbol] = data
  }

  addGenomicGroupData(groupID, data) {
    this.groupedGenomicDataMap[groupID] = data
  }

  addPortalGenomicData(data, groupID) {
    for (const cancerStudy of Object.keys(data)) {
      this.visibleGenomicDataMapByType[cancerStudy] = true
      // Group current cancer study according to the groupID
      if (this.groupedGenomicDataMap[groupID] === undefined) {
        this.groupedGenomicDataMap[groupID] = []
      }

      this.groupedGenomicDataMap[groupID].push(cancerStudy)

      var cancerData = data[cancerStudy]

      for (const geneSymbol of Object.keys(cancerData)) {
        if (this.genomicDataMap[geneSymbol] === undefined)
          this.genomicDataMap[geneSymbol] = {}

        this.genomicDataMap[geneSymbol][cancerStudy] = data[cancerStudy][
          geneSymbol
        ].toFixed(2)
      }
    }
    //This parameter is used as flag for PatientView PathwayMapper Functions
    if (data['PatientView'] == 1) {
      console.log('patient data', this.genomicDataMap)
      this.showPatientData(data)
    } else {
      this.showGenomicData()
    }
    this.notifyObservers()
  }

  clearAllGenomicData = function() {
    this.genomicDataMap = {}
    this.visibleGenomicDataMapByType = {}
    this.groupedGenomicDataMap = {}
    this.groupedGenomicDataCount = 0
  }

  removeGenomicData() {
    this.genomicDataMap = {}
  }

  removeGenomicDataWithGeneSymbol(geneSymbol) {
    this.genomicDataMap[geneSymbol] = {}
  }

  addGenomicVisData(key, data) {
    this.visibleGenomicDataMapByType[key] = data
  }

  prepareGenomicDataShareDB = function(genomicData) {
    const genomicDataMap = {}
    const cancerTypes = []
    const visibleGenomicDataMapByType = {}

    // By lines
    const lines = genomicData.split('\n')
    // First line is meta data !
    const metaLineColumns = lines[0].split('\t')

    // Parse cancer types
    for (let i = 1; i < metaLineColumns.length; i++) {
      cancerTypes.push(metaLineColumns[i])
      // Update initially visible genomic data boxes !
      if (i - 1 < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT) {
        visibleGenomicDataMapByType[cancerTypes[i - 1]] = true
      } else {
        visibleGenomicDataMapByType[cancerTypes[i - 1]] = false
      }
    }

    // parse genomic data
    for (let i = 1; i < lines.length; i++) {
      // EOF check
      if (lines[i].length === 0) {
        break
      }

      // Split each line by tab and parse genomic data content
      const lineContent = lines[i].split('\t')
      const geneSymbol = lineContent[0]

      // If current gene entry is not  in genomic data map create new hashmap entry
      if (!(geneSymbol in genomicDataMap)) {
        genomicDataMap[geneSymbol] = {}
      }

      // Add each entry of genomic data
      for (let j = 1; j < lineContent.length; j++) {
        genomicDataMap[geneSymbol][cancerTypes[j - 1]] = lineContent[j]
      }
    }

    const returnObj = {
      genomicDataMap: genomicDataMap,
      visibilityMap: visibleGenomicDataMapByType
    }

    return returnObj
  }

  updateGenomicDataVisibility = function(_key, isVisible) {
    if (_key in this.visibleGenomicDataMapByType) {
      this.visibleGenomicDataMapByType[_key] = isVisible
    }
  }

  hideGenomicData = function() {
    this.cy
      .style()
      .selector('node[type="GENE"]')
      .style('text-margin-y', 0)
      .style('width', function(ele) {
        return 150
      })
      .style('background-image', function(ele) {
        const dataURI = 'data:image/svg+xml;utf8,'
        return dataURI
      })
      .update()
  }

  countVisibleGenomicDataByType() {
    // Count the genomic data that will be displayed on nodes' body
    let genomicDataBoxCount = 0
    for (let cancerType in this.visibleGenomicDataMapByType) {
      if (this.visibleGenomicDataMapByType[cancerType]) {
        genomicDataBoxCount++
      }
    }

    return genomicDataBoxCount
  }

  generateSVGForNode(ele) {
    const genomicDataBoxCount = this.countVisibleGenomicDataByType()

    // Experimental data overlay part !
    const dataURI = 'data:image/svg+xml;utf8,'
    const svgNameSpace = 'http://www.w3.org/2000/svg'

    const nodeLabel = ele.data('name')
    // If there is no genomic data for this node return !
    if (!(nodeLabel in this.genomicDataMap)) {
      return dataURI
    }

    const eleBBox = ele.boundingBox()
    const reqWidth = this.getRequiredWidthForGenomicData(genomicDataBoxCount)
    const overlayRecBoxW = reqWidth - 10
    const overlayRecBoxH = 25
    const svg: any = document.createElementNS(svgNameSpace, 'svg')
    // It seems this should be set according to the node size !
    svg.setAttribute('width', reqWidth)
    svg.setAttribute('height', eleBBox.h)
    // This is important you need to include this to succesfully render in cytoscape.js!
    svg.setAttribute('xmlns', svgNameSpace)

    // Overlay Data Rect
    const overLayRectBBox = {
      w: overlayRecBoxW,
      h: overlayRecBoxH,
      x: reqWidth / 2 - overlayRecBoxW / 2,
      y: eleBBox.h / 2 + overlayRecBoxH / 2 - 18
    }

    const genomicFrequencyData = this.genomicDataMap[nodeLabel]

    let maxGenomicDataBoxCount = /*(genomicDataBoxCount > 3) ? 3:*/ genomicDataBoxCount
    let genomicBoxCounter = 0

    for (let i in this.groupedGenomicDataMap) {
      for (let j in this.groupedGenomicDataMap[i]) {
        const cancerType = this.groupedGenomicDataMap[i][j]
        if (!this.visibleGenomicDataMapByType[cancerType]) {
          continue
        }

        if (genomicFrequencyData[cancerType] !== undefined) {
          genomicDataRectangleGenerator(
            overLayRectBBox.x +
              (genomicBoxCounter * overLayRectBBox.w) / maxGenomicDataBoxCount,
            overLayRectBBox.y,
            overLayRectBBox.w / maxGenomicDataBoxCount,
            overLayRectBBox.h,
            genomicFrequencyData[cancerType],
            svg
          )
        } else {
          genomicDataRectangleGenerator(
            overLayRectBBox.x +
              (genomicBoxCounter * overLayRectBBox.w) / maxGenomicDataBoxCount,
            overLayRectBBox.y,
            overLayRectBBox.w / maxGenomicDataBoxCount,
            overLayRectBBox.h,
            null,
            svg
          )
        }

        genomicBoxCounter++
      }
    }

    function genomicDataRectangleGenerator(x, y, w, h, percent, parentSVG) {
      let colorString = ''
      if (percent) {
        const isNegativePercent = percent < 0
        let _percent = Math.abs(percent)
        // Handle special cases here !

        _percent = _percent > 0 && _percent < 0.5 ? 0.5 : _percent
        // _percent = _percent === 1 ? 2 : _percent
        // Here we are using non linear regression
        // Fitting points of (0,0), (25,140), (50,220), (100, 255)
        const percentColor = 255 - (-7.118 + 53.9765 * Math.log(_percent + 0.8))

        if (_percent === 0 || percent == -101) {
          colorString = 'rgb(255,255,255)'
        } else if (isNegativePercent) {
          colorString =
            'rgb(' +
            Math.round(percentColor) +
            ',' +
            Math.round(percentColor) +
            ',255)'
          percent = percent.substring(1)
        } else {
          colorString =
            'rgb(255,' +
            Math.round(percentColor) +
            ',' +
            Math.round(percentColor) +
            ')'
        }
        // Rectangle Part
        const overlayRect = document.createElementNS(svgNameSpace, 'rect')
        overlayRect.setAttribute('x', x)
        overlayRect.setAttribute('y', y)
        overlayRect.setAttribute('width', w)
        overlayRect.setAttribute('height', h)
        overlayRect.setAttribute(
          'style',
          'stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:' + colorString + ';'
        )

        // Text Part
        const textPercent =
          percent < 0.5 && percent > 0 ? '<0.5' : Number(percent).toFixed(1)
        const text = percent == -101 ? 'N/P' : textPercent + '%'
        const fontSize = 14
        const textLength = text.length
        const xOffset = w / 2 - textLength * 4
        const yOffset = fontSize / 3

        const svgText = document.createElementNS(svgNameSpace, 'text')
        svgText.setAttribute('x', x + xOffset)
        svgText.setAttribute('y', y + h / 2 + yOffset)
        svgText.setAttribute('font-family', 'Arial')
        svgText.setAttribute('font-size', fontSize + '')
        svgText.innerHTML = text

        parentSVG.appendChild(overlayRect)
        parentSVG.appendChild(svgText)
      } else {
        colorString = 'rgb(210,210,210)'

        // Rectangle Part
        const overlayRect = document.createElementNS(svgNameSpace, 'rect')
        overlayRect.setAttribute('x', x)
        overlayRect.setAttribute('y', y)
        overlayRect.setAttribute('width', w)
        overlayRect.setAttribute('height', h)
        overlayRect.setAttribute(
          'style',
          'stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:' + colorString + ';'
        )

        parentSVG.appendChild(overlayRect)
      }
    }

    return svg
  }

  // Just an utility function to calculate required width for genes for genomic data !
  getRequiredWidthForGenomicData(genomicDataBoxCount) {
    const term = genomicDataBoxCount > 3 ? genomicDataBoxCount - 3 : 0
    return 150 + term * 35
  }

  showGenomicData() {
    const self = this

    const genomicDataBoxCount = this.countVisibleGenomicDataByType()

    if (genomicDataBoxCount < 1) {
      // Hide all genomic data and return
      this.hideGenomicData()
      return
    }

    console.log('Inside showGenomicData')
    console.log(this.cy)

    this.cy
      .style()
      .selector('node[type="GENE"]')
      // It used to change the width of nodes only locally
      .style('width', ele => {
        return this.getRequiredWidthForGenomicData(genomicDataBoxCount)
      })
      .style('text-margin-y', function(ele) {
        const nodeLabel = ele.data('name')
        // If there is no genomic data for this node return !
        if (!(nodeLabel in self.genomicDataMap)) {
          return 0
        }

        // Else shift label in Y axis
        return -15
      })
      .style('background-image', function(ele) {
        const x = encodeURIComponent(self.generateSVGForNode(ele).outerHTML)
        if (x === 'undefined') {
          return 'none'
        }
        const dataURI = 'data:image/svg+xml;utf8,' + x
        return dataURI
      })
      .update()
  }

  parseGenomicData(genomicData, groupID) {
    this.genomicDataMap = this.genomicDataMap || {}
    this.visibleGenomicDataMapByType = this.visibleGenomicDataMapByType || {}
    this.groupedGenomicDataMap = this.groupedGenomicDataMap || {}
    const cancerTypes = []

    // By lines
    const lines = genomicData.split('\n')
    // First line is meta data !
    const metaLineColumns = lines[0].split('\t')

    // Parse cancer types
    for (let i = 1; i < metaLineColumns.length; i++) {
      cancerTypes.push(metaLineColumns[i])
      // Update initially visible genomic data boxes !
      if (i - 1 < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT) {
        this.visibleGenomicDataMapByType[cancerTypes[i - 1]] = true
      } else {
        this.visibleGenomicDataMapByType[cancerTypes[i - 1]] = false
      }

      if (this.groupedGenomicDataMap[groupID] === undefined) {
        this.groupedGenomicDataMap[groupID] = []
      }
      this.groupedGenomicDataMap[groupID].push(cancerTypes[i - 1])
    }

    // parse genomic data
    for (let i = 1; i < lines.length; i++) {
      // EOF check
      if (lines[i].length === 0) {
        break
      }

      // Split each line by tab and parse genomic data content
      const lineContent = lines[i].split('\t')
      const geneSymbol = lineContent[0]

      // If current gene entry is not  in genomic data map create new map
      if (!(geneSymbol in this.genomicDataMap)) {
        this.genomicDataMap[geneSymbol] = {}
      }

      // Add each entry of genomic data
      for (let j = 1; j < lineContent.length; j++) {
        this.genomicDataMap[geneSymbol][cancerTypes[j - 1]] = lineContent[j]
      }
    }
  }

  // Simple observer-observable pattern for views!!!!!
  registerObserver(observer) {
    this.observers.push(observer)
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.notify()
    }
  }

  //This method is needed to calculate the alteration Types for each gene
  getAlterationCountForPatient(geneData) {
    let count = 0
    for (let altType in geneData) {
      count++
    }
    return count
  }

  //These methods are created to be used in CbioPortal PatientView they are not used
  //in ResultView Page or PathwayMapper Editor

  showPatientData(data) {
    const self = this

    const genomicDataBoxCount = 3 //this.countVisibleGenomicDataByType(); //CHANGE
    if (genomicDataBoxCount < 1) {
      // Hide all genomic data and return
      this.hideGenomicData()
      return
    }

    this.cy
      .style()
      .selector('node[type="GENE"]')
      // It used to change the width of nodes only locally
      .style('width', ele => {
        return this.getRequiredWidthForGenomicData(genomicDataBoxCount)
      })
      .style('text-margin-y', function(ele) {
        const nodeLabel = ele.data('name')

        // If there is no genomic data for this node return !
        if (!(nodeLabel in data)) {
          return 0
        }

        // Else shift label in Y axis
        return -15
      })
      .style('background-image', function(ele) {
        const x = encodeURIComponent(
          self.generateSVGForPatientNode(ele, data).outerHTML
        )
        if (x === 'undefined') {
          return 'none'
        }
        const dataURI = 'data:image/svg+xml;utf8,' + x
        return dataURI
      })
      .update()
  }
  //Every mutation type has a unique color coded. This method is used to retrieve the colors
  getOncoprintColors(selectedGene) {
    const oncoprintColors = {
      Missense_Mutation: 'rgb(0,128,0)',
      inframe: '#993404',
      truncating: '#000000',
      Fusion: 'rgb(139,0,201)',
      AMP: 'rgb(255,0,0)',
      gain: '#ffb6c1',
      heatloss: '#8fd8d8',
      homdel: 'rgb(0,0,255)',
      DeepDel: 'rgb(0,0,255)',
      "5'Flank": 'rgb(207,88,188)',
      in_frame_del: 'rgb(166,128,40)'
    }

    if (oncoprintColors[selectedGene] !== undefined) {
      return oncoprintColors[selectedGene]
    } else {
      //Types are not on the list corresponds to black
      return 'rgb(0,0,0)'
    }
  }
  generateSVGForPatientNode(ele, patientData) {
    //Here we should use the parameter patientData when calculating the expressions
    const genomicDataBoxCount = this.countVisibleGenomicDataByType()
    // Experimental data overlay part !
    const dataURI = 'data:image/svg+xml;utf8,'
    const svgNameSpace = 'http://www.w3.org/2000/svg'
    //nodeLabel refers to the nodeLabels in the overlay data
    const nodeLabel = ele.data('name')
    // If there is no genomic data for this node return !
    if (!(nodeLabel in patientData)) {
      return dataURI
    }
    //this parameter refers to the count of alteration types for each gene
    const alterationBoxCount = this.getAlterationCountForPatient(
      patientData[nodeLabel]
    )

    const eleBBox = ele.boundingBox()
    const svg: any = document.createElementNS(svgNameSpace, 'svg')
    //this parameter is set to 12 since there are 12 different possiblities for types
    const term = alterationBoxCount > 12 ? alterationBoxCount - 12 : 0
    const reqWidth = 150 + term * 35

    const overlayRecBoxW = reqWidth - 10
    const overlayRecBoxH = 25

    // It seems this should be set according to the node size !
    svg.setAttribute('width', reqWidth)
    svg.setAttribute('height', eleBBox.h)
    // This is important you need to include this to succesfully render in cytoscape.js!
    svg.setAttribute('xmlns', svgNameSpace)

    // Overlay Data Rect
    const overLayRectBBox = {
      w: overlayRecBoxW,
      h: overlayRecBoxH,
      x: reqWidth / 2 - overlayRecBoxW / 2,
      y: eleBBox.h / 2 + overlayRecBoxH / 2 - 18
    }
    let genomicBoxCounter = 0
    //required width is calculated for each gene since box count is different for each gene
    for (let j in patientData[nodeLabel]) {
      const genomicAlterationData = patientData[nodeLabel]
      const alterationType = j

      if (!this.visibleGenomicDataMapByType[nodeLabel]) {
        continue
      }
      //get the color string corresponding to the alterationType
      let colorString = this.getOncoprintColors(alterationType)

      if (genomicAlterationData[alterationType] !== undefined) {
        genomicDataRectangleGeneratorPatient(
          overLayRectBBox.x +
            (genomicBoxCounter * overLayRectBBox.w) / alterationBoxCount,
          overLayRectBBox.y,
          overLayRectBBox.w / alterationBoxCount,
          overLayRectBBox.h,
          100,
          svg,
          alterationType,
          colorString
        )
      } else {
        genomicDataRectangleGeneratorPatient(
          overLayRectBBox.x +
            (genomicBoxCounter * overLayRectBBox.w) / alterationBoxCount,
          overLayRectBBox.y,
          overLayRectBBox.w / alterationBoxCount,
          overLayRectBBox.h,
          null,
          svg,
          '',
          null
        )
      }

      genomicBoxCounter++
    }
    //This function differs from genomicRectangleGenerator. genomicDataRectangleGeneratorPatient
    //has an extra parameter text. In patient view alterationTypes of genes are displayed instead of
    //alteration percentage. Hence a text is sent to this method which is alterationType
    function genomicDataRectangleGeneratorPatient(
      x,
      y,
      w,
      h,
      percent,
      parentSVG,
      text,
      colorString
    ) {
      if (percent) {
        const isNegativePercent = percent < 0
        // Rectangle Part
        const overlayRect = document.createElementNS(svgNameSpace, 'rect')
        overlayRect.setAttribute('x', x)
        overlayRect.setAttribute('y', y)
        overlayRect.setAttribute('width', w)
        overlayRect.setAttribute('height', h)
        overlayRect.setAttribute(
          'style',
          'stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:' + colorString + ';'
        )

        // Text Part
        const fontSize = 14
        const textLength = 4
        const xOffset = w / 2 - textLength * 4
        const yOffset = fontSize / 3

        const svgText = document.createElementNS(svgNameSpace, 'text')
        if (colorString === 'rgb(0,0,0)') {
          svgText.setAttribute('fill', 'white')
        }
        svgText.setAttribute('x', x + xOffset)
        svgText.setAttribute('y', y + h / 2 + yOffset)

        svgText.setAttribute('font-family', 'Arial')
        svgText.setAttribute('font-size', fontSize + '')

        //first 4 letters of the alterationTypes are used
        svgText.innerHTML = text.substring(0, 4)
        console.log('Mutation', text)
        parentSVG.appendChild(overlayRect)
        parentSVG.appendChild(svgText)
      } else {
        //Normally
        colorString = 'rgb(210,210,210)'
      }
    }

    return svg
  }
}
