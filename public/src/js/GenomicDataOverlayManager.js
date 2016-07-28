/**
 *
 */

module.exports = (function()
{
    var GenomicDataOverlayManager = function ()
    {
        this.cancerTypes = [];
        this.genomicDataMap = {};
        this.visibleGenomicDataMapByType = {};
        this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT = 3;

        //Observer-observable pattern related stuff
        this.observers = [];

    };

    GenomicDataOverlayManager.prototype.addGenomicDataLocally = function(genomicData)
    {
        this.parseGenomicData(genomicData);
        this.showGenomicData();
        this.notifyObservers();
    };

    GenomicDataOverlayManager.prototype.removeGenomicData = function()
    {
        this.genomicDataMap = {};
    }
    
    GenomicDataOverlayManager.prototype.addGenomicData = function(data)
    {
        this.genomicDataMap = data;
    }

    GenomicDataOverlayManager.prototype.removeGenomicVisData = function()
    {
        this.visibleGenomicDataMapByType = {};
    }

    GenomicDataOverlayManager.prototype.addGenomicVisData = function(data)
    {
        this.visibleGenomicDataMapByType = data;
    }

    GenomicDataOverlayManager.prototype.prepareGenomicDataRealTime = function(genomicData)
    {
        var genomicDataMap = {};
        var cancerTypes = [];
        var visibleGenomicDataMapByType = {};

        // By lines
        var lines = genomicData.split('\n');
        //First line is meta data !
        var metaLineColumns = lines[0].split('\t');

        //Parse cancer types
        for (var i = 1;  i < metaLineColumns.length; i++)
        {
            cancerTypes.push(metaLineColumns[i]);
            //Update initially visible genomic data boxes !
            if(i-1 < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT)
                visibleGenomicDataMapByType[cancerTypes[i-1]] = true;
            else
                visibleGenomicDataMapByType[cancerTypes[i-1]] = false;
        }

        // parse genomic data
        for(var i =1; i < lines.length; i++)
        {
            //EOF check
            if (lines[i].length == 0)
                break;

            //Split each line by tab and parse genomic data content
            var lineContent = lines[i].split('\t');
            var geneSymbol = lineContent[0];

            //If current gene entry is not  in genomic data map create new map
            if(!(geneSymbol in genomicDataMap))
                genomicDataMap[geneSymbol] = {};

            //Add each entry of genomic data
            for (var j = 1; j < lineContent.length; j++)
            {
                genomicDataMap[geneSymbol][cancerTypes[j-1]] = lineContent[j];
            }
        }

        var returnObj =         
        {
            'genomicDataMap': genomicDataMap,
            'visibilityMap': visibleGenomicDataMapByType
        };

        return returnObj;

    };

    GenomicDataOverlayManager.prototype.updateGenomicDataVisibility = function(_key, isVisible)
    {
        if(_key in this.visibleGenomicDataMapByType)
            this.visibleGenomicDataMapByType[_key] = isVisible;
    };

    GenomicDataOverlayManager.prototype.hideGenomicData = function()
    {
        cy.style()
            .selector('node[type="GENE"]')
            .style('text-margin-y', 0)
            .style('width', function (ele)
            {
                return 130;
            })
            .style('background-image', function(ele)
            {
                var dataURI = "data:image/svg+xml,";
                return dataURI;
            })
            .update();
    }

    GenomicDataOverlayManager.prototype.showGenomicData = function()
    {
        var self = this;

        //Count the genomic data that will be displayed on nodes' body
        var genomicDataBoxCount = 0;
        for (var cancerType in self.visibleGenomicDataMapByType)
        {
            if(self.visibleGenomicDataMapByType[cancerType])
                genomicDataBoxCount++;
        }

        if (genomicDataBoxCount < 1)
        {
            //Hide all genomic data and return
            this.hideGenomicData();
            return;
        }

        //Just an utility function to calculate required width for genes for genomic data !
        function getRequiredWidthForGenomicData()
        {
            var term = (genomicDataBoxCount > 3)? genomicDataBoxCount-3:0;
            return 130 + term * 35;
        }

        cy.style()
            .selector('node[type="GENE"]')
            .style('width', function (ele)
            {
                return getRequiredWidthForGenomicData();
            })
            .style('text-margin-y', function (ele)
            {
                var nodeLabel = ele.data('name');
                //If there is no genomic data for this node return !
                if(!(nodeLabel in self.genomicDataMap))
                    return 0;

                return -15;
            })
            .style('background-image', function(ele)
            {
                //Experimental data overlay part !
                var dataURI = "data:image/svg+xml,";
                var svgNameSpace = 'http://www.w3.org/2000/svg';
                var nodeLabel = ele.data('name');

                //If there is no genomic data for this node return !
                if(!(nodeLabel in self.genomicDataMap))
                    return dataURI;

                var eleBBox = ele.boundingBox();
                var reqWidth = getRequiredWidthForGenomicData();

                var overlayRecBoxW = reqWidth - 10;
                var overlayRecBoxH = 25;
                var svg = document.createElementNS(svgNameSpace,'svg');
                //It seems this should be set according to the node size !
                svg.setAttribute('width', reqWidth);
                svg.setAttribute('height', eleBBox.h);
                //This is important you need to include this to succesfully render in cytoscape.js!
                svg.setAttribute('xmlns', svgNameSpace);

                //Overlay Data Rect
                var overLayRectBBox =
                {
                    w: overlayRecBoxW,
                    h: overlayRecBoxH,
                    x: reqWidth/2 - overlayRecBoxW/2,
                    y: eleBBox.h/2 + overlayRecBoxH/2 - 18
                };

                var genomicFrequencyData = self.genomicDataMap[nodeLabel];

                var maxGenomicDataBoxCount = /*(genomicDataBoxCount > 3) ? 3:*/genomicDataBoxCount;
                var genomicBoxCounter = 0;
                for (var cancerType in genomicFrequencyData)
                {
                    if(!self.visibleGenomicDataMapByType[cancerType])
                        continue;

                    genomicDataRectangleGenerator(
                        overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w/maxGenomicDataBoxCount,
                        overLayRectBBox.y,
                        overLayRectBBox.w/maxGenomicDataBoxCount,
                        overLayRectBBox.h,
                        genomicFrequencyData[cancerType],
                        svg
                    );
                    genomicBoxCounter++;
                }


                function genomicDataRectangleGenerator(x,y,w,h,percent,parentSVG)
                {
                    var isNegativePercent = (percent < 0);
                    var _percent = (Math.abs(percent) < 10) ? 10:Math.abs(percent);
                    var percentColor =  255 -  _percent * (255/100);

                    var colorString = "";
                    if (isNegativePercent)
                    {
                        colorString = "rgb("+Math.round(percentColor)+","+Math.round(percentColor)+",255)";
                        percent = percent.substring(1);
                    }
                    else
                        colorString = "rgb(255,"+Math.round(percentColor)+","+Math.round(percentColor)+")";

                    //Rectangle Part
                    var overlayRect = document.createElementNS(svgNameSpace, 'rect');
                    overlayRect.setAttribute('x', x);
                    overlayRect.setAttribute('y', y );
                    overlayRect.setAttribute('width', w);
                    overlayRect.setAttribute('height', h);
                    overlayRect.setAttribute('style', "stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:"+colorString+";");

                    //Text Part
                    var text = percent+'%';
                    var fontSize = 14;
                    var textLength = text.length;
                    var xOffset = w/2 - textLength * 4;
                    var yOffset = fontSize/3;

                    var svgText = document.createElementNS(svgNameSpace, 'text');
                    svgText.setAttribute('x', x + xOffset );
                    svgText.setAttribute('y', y + h/2 + yOffset );
                    svgText.setAttribute('font-family', 'Arial');
                    svgText.setAttribute('font-size', fontSize);
                    svgText.innerHTML = text;

                    parentSVG.appendChild(overlayRect);
                    parentSVG.appendChild(svgText);
                }

                return dataURI+svg.outerHTML;
            })
            .update();
    }

    GenomicDataOverlayManager.prototype.parseGenomicData = function(genomicData)
    {
        this.genomicDataMap = {};
        this.cancerTypes = [];
        this.visibleGenomicDataMapByType = {};

        // By lines
        var lines = genomicData.split('\n');
        //First line is meta data !
        var metaLineColumns = lines[0].split('\t');

        //Parse cancer types
        for (var i = 1;  i < metaLineColumns.length; i++)
        {
            this.cancerTypes.push(metaLineColumns[i]);
            //Update initially visible genomic data boxes !
            if(i-1 < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT)
                this.visibleGenomicDataMapByType[this.cancerTypes[i-1]] = true;
            else
                this.visibleGenomicDataMapByType[this.cancerTypes[i-1]] = false;
        }

        // parse genomic data
        for(var i =1; i < lines.length; i++)
        {
            //EOF check
            if (lines[i].length == 0)
                break;

            //Split each line by tab and parse genomic data content
            var lineContent = lines[i].split('\t');
            var geneSymbol = lineContent[0];

            //If current gene entry is not  in genomic data map create new map
            if(!(geneSymbol in this.genomicDataMap))
                this.genomicDataMap[geneSymbol] = {};

            //Add each entry of genomic data
            for (var j = 1; j < lineContent.length; j++)
            {
                this.genomicDataMap[geneSymbol][this.cancerTypes[j-1]] = lineContent[j];
            }
        }
    };

    //Simple observer-observable pattern for views!!!!!
    GenomicDataOverlayManager.prototype.registerObserver = function(observer)
    {
        this.observers.push(observer);
    };

    GenomicDataOverlayManager.prototype.notifyObservers = function()
    {
        for (var i in this.observers)
        {
            var observer = this.observers[i];
            observer.notify();
        }
    };
    
    return GenomicDataOverlayManager;

})();
