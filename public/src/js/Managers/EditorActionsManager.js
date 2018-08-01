var GenomicDataOverlayManager = require('./GenomicDataOverlayManager.js');
var SVGExporter = require('./../Utils/SVGExporter.js');


module.exports = (function()
{
    "use strict";
    var EditorActionsManager = function(isCollaborative, realtimeManager, cyInst)
    {
        //Set cy instance and set real time manager reference if collaborative mode
        this.cy = cyInst;
        this.isCollaborative = isCollaborative;
        if(this.isCollaborative && realtimeManager)
            this.realTimeManager = realtimeManager;

        this.defaultLayoutProperties =
        {
            name: 'cose-bilkent',
            nodeRepulsion: 4500,
            idealEdgeLength: 50,
            edgeElasticity: 0.45,
            nestingFactor: 0.1,
            gravity: 0.25,
            numIter: 2500,
            tile: true,
            animate: "end",
            randomize: false,
            gravityRangeCompound: 1.5,
            // Gravity force (constant) for compounds
            gravityCompound: 1.0,
            // Gravity range (constant)
            gravityRange: 3.8,

            // Amount of vertical space to put between degree zero nodes during tiling (can also be a function)
            tilingPaddingVertical: 10,
            // Amount of horizontal space to put between degree zero nodes during tiling (can also be a function)
            tilingPaddingHorizontal: 10,
            // Initial cooling factor for incremental layout
            initialEnergyOnIncremental: 0.5,
            animationDuration: 2000,
            animationEasing: 'cubic-bezier(0.17,0.72,0.41,0.98)',
            // Called on `layoutready`
            ready: function () {
            },
            // Called on `layoutstop`
            stop: function () {
            }
        };
        this.FIT_CONSTANT = 50;

        this.layoutProperties = _.clone(this.defaultLayoutProperties);
        this.observers = [];
        this.genomicDataOverlayManager = new GenomicDataOverlayManager();
        this.svgExporter = new SVGExporter();

        this.selectedNodeStack = {};
        window.undoRedoManager = cy.undoRedo();
        window.undoRedoManager.action("changePositions", this.doChangePosition, this.undoChangePosition);
        window.undoRedoManager.action("changeNodeSize", this.doChangeNodeSize, this.undoChangeNodeSize);
        window.undoRedoManager.action("changeCompoundSize", this.doChangeCompoundSize, this.undoChangeCompoundSize);
        window.undoRedoManager.action("changeName", this.doChangename, this.undoChangeName);
        window.undoRedoManager.action("hideNode", this.doHide, this.undoHide);
        window.undoRedoManager.action("showAllNodes", this.doShow, this.undoShow);
        // HighlightOthers is the type of highlight from the menu and by searching, while highlightInvalidGenes is for only invalid genes
        window.undoRedoManager.action("highlightInvalidGenes", this.doHighlightInvalidGenes, this.undoHighlightInvalidGenes);
        window.undoRedoManager.action("removeHighlightInvalidGenes", this.undoHighlightInvalidGenes, this.doHighlightInvalidGenes);
        window.undoRedoManager.action("highlightOthers", this.doHighlight, this.undoHighlight);
        window.undoRedoManager.action("removeOtherHighlight", this.undoHighlight, this.doHighlight);

    };

    EditorActionsManager.prototype.handleChangePositionByAlignment = function(movedNodeArr)
    {
        if (this.isCollaborative)
            this.realTimeManager.changeElementsPositionByAlignment(movedNodeArr);
        else
            window.undoRedoManager.do("changePositions", movedNodeArr)
    };

    /*
     * Undo redo for changing positions of nodes via programatically (node.position)
     * **/
    EditorActionsManager.prototype.doChangePosition = function(movedNodes)
    {
        var newMovedNodes = [];

        for(var i = 0; i < movedNodes.length; i++)
        {
            var currentNodePosition =
                {
                    x: movedNodes[i].node.position().x,
                    y: movedNodes[i].node.position().y
                };
            newMovedNodes.push({node: movedNodes[i].node, oldPosition: currentNodePosition, nextPosition: movedNodes[i].nextPosition});
            movedNodes[i].node.position(movedNodes[i].nextPosition);
        }

        return newMovedNodes;
    };

    EditorActionsManager.prototype.undoChangePosition = function(movedNodes)
    {
        var newMovedNodes = [];

        for(var i = 0; i < movedNodes.length; i++)
        {
            var currentNodePosition =
                {
                    x: movedNodes[i].node.position().x,
                    y: movedNodes[i].node.position().y
                };
            newMovedNodes.push({node: movedNodes[i].node, oldPosition: movedNodes[i].oldPosition, nextPosition: currentNodePosition});
            movedNodes[i].node.position(movedNodes[i].oldPosition);
        }

        return newMovedNodes;
    };

    EditorActionsManager.prototype.changeNodePositionsByArrows = function(selectedNodes)
    {
        if (this.isCollaborative)
            this.realTimeManager.changeNodePositionsRealTime(selectedNodes);
        //resize-node extension already deals for the movement in local mode
    };

    /*
     * Undo redo for changing size of nodes
     * **/
    EditorActionsManager.prototype.doChangeNodeSize = function(args)
    {
        args.ele.data('w', args.newWidth);
        args.ele.data('h', args.newHeight);
        args.ele.style('width', args.newWidth);
        args.ele.style('height', args.newHeight);

        return args;
    };

    EditorActionsManager.prototype.undoChangeNodeSize = function(args)
    {
        args.ele.data('w', args.oldWidth);
        args.ele.data('h', args.oldHeight);
        args.ele.style('width', args.oldWidth);
        args.ele.style('height', args.oldHeight);

        return args;
    };

    /*
     * Undo redo for changing size of compounds
     * **/
    EditorActionsManager.prototype.doChangeCompoundSize = function(args)
    {
        args.ele.style('min-width', args.newMinWidth);
        args.ele.style('min-width-bias-left', args.newMinWidthBiasLeft);
        args.ele.style('min-width-bias-right', args.newMinWidthBiasRight);
        args.ele.style('min-height', args.newMinHeight);
        args.ele.style('min-height-bias-top', args.newMinHeightBiasTop);
        args.ele.style('min-height-bias-bottom', args.newMinHeightBiasBottom);

        return args;
    };

    EditorActionsManager.prototype.undoChangeCompoundSize = function(args)
    {
        if (args.oldMinWidth == undefined)
        {
            args.ele.style('min-width', 0);
            args.ele.style('min-width-bias-left', 0);
            args.ele.style('min-width-bias-right', 0);

        }
        else {
            args.ele.style('min-width', args.oldMinWidth);
            args.ele.style('min-width-bias-left', args.oldMinWidthBiasLeft);
            args.ele.style('min-width-bias-right', args.oldMinWidthBiasRight);
        }
        if (args.oldMinHeight == undefined)
        {
            args.ele.style('min-height', 0);
            args.ele.style('min-height-bias-top', 0);
            args.ele.style('min-height-bias-bottom', 0);
        }
        else {
            args.ele.style('min-height', args.oldMinHeight);
            args.ele.style('min-height-bias-top', args.oldMinHeightBiasTop);
            args.ele.style('min-height-bias-bottom', args.oldMinHeightBiasBottom);
        }

        return args;
    };

    EditorActionsManager.prototype.changeName = function(ele, newName)
    {
        if (this.isCollaborative)
        {
            this.realTimeManager.changeName(ele, newName);
        }
        else
        {
            this.changeNameCy(ele, newName);
        }
    };

    EditorActionsManager.prototype.changeNameCy = function(ele, newName)
    {
        var currentName = ele.data('name');
        var args = {ele: ele, oldName: currentName, newName: newName};
        window.undoRedoManager.do('changeName', args);
    };

    /*
     * Undo redo for changing name of nodes
     * **/
    EditorActionsManager.prototype.doChangename = function(args)
    {

        var currentName = args.ele.data('name');
        var newArgs = {ele: args.ele, newName: args.newName, oldName: currentName};
        args.ele.data('name', args.newName);
        args.ele.css('content', args.newName);

        return newArgs;
    };

    EditorActionsManager.prototype.undoChangeName = function(args)
    {

        var currentName = args.ele.data('name');
        var newArgs = {ele: args.ele, newName: args.newName, oldName: currentName};
        args.ele.data('name', args.oldName);
        args.ele.css('content', args.oldName);

        return newArgs;
    };

    EditorActionsManager.prototype.hideSelectedNodes = function()
    {
        //Hides the selected elements
        var sel = cy.nodes(":selected");
        var nodesToHide = sel;
        var b = true;
        //Hides the parents if they have no children
        sel.parent().each( function(parent, i)
        {
            b=true;
            parent.children().each(function(ch,j)
                {
                    if (!ch.selected())
                    {
                        if (ch.visible()) b=false;
                    }
                }
            );
            if (b==true) nodesToHide = nodesToHide.add(parent);
        });
        cy.elements(":selected").unselect();
        if (this.isCollaborative)
            this.realTimeManager.changeVisibility(nodesToHide, true);
        else
            window.undoRedoManager.do('hideNode', nodesToHide);
    };

    /*
     * Undo redo for hiding nodes
     * **/
    EditorActionsManager.prototype.doHide = function(args)
    {
        args.hide();
        return args;
    };

    EditorActionsManager.prototype.undoHide = function(args)
    {
        args.show();
        return args;
    };

    EditorActionsManager.prototype.showAllNodes = function()
    {
        var hid = cy.nodes(":hidden");
        if (this.isCollaborative)
            this.realTimeManager.changeVisibility(hid, false);
        else
            window.undoRedoManager.do('showAllNodes', hid);
    };

    /*
     * Undo redo for showing all nodes
     * **/
    EditorActionsManager.prototype.doShow = function(args)
    {
        args.show();
        return args;
    };

    EditorActionsManager.prototype.undoShow = function(args)
    {
        args.hide();
        return args;
    };

    EditorActionsManager.prototype.highlightElementsInitially = function(invalidHighlightedGenesIDs, invalidGenesIDs, highlightedGenesIDs, highlightedEdgesIDs, hiddenGenesIDs)
    {
        for (var i in invalidHighlightedGenesIDs)
        {
            cy.$('#'+invalidHighlightedGenesIDs[i]).addClass('invalidGeneHighlight');
        }
        for (var i in invalidGenesIDs)
        {
            cy.$('#'+invalidGenesIDs[i]).addClass('invalidGene');
        }
        for (var i in highlightedGenesIDs)
        {
            cy.$('#'+highlightedGenesIDs[i]).addClass('highlightedNode');
        }
        for (var i in highlightedEdgesIDs)
        {
            cy.$('#'+highlightedEdgesIDs[i]).addClass('highlightedEdge');
        }
        for (var i in hiddenGenesIDs)
        {
            cy.$('#'+hiddenGenesIDs[i]).hide();
        }
    };

    EditorActionsManager.prototype.validateGenes = function()
    {
        var geneSymbols = this.getGeneSymbols();
        window.portalAccessor.validateGenes(geneSymbols);
    }

    //Get all gene symbols
    EditorActionsManager.prototype.getGeneSymbols = function()
    {
        var geneSymbols = [];
        this.cy.nodes().forEach( function (gene)
        {
            if(gene.data().type === "GENE")
                geneSymbols.push(gene.data().name);
        });
        return geneSymbols;
    }


    EditorActionsManager.prototype.highlightInvalidGenes = function(validGeneSymbols)
    {
        if (this.isCollaborative)
        {
            var invalidGenes = [];
            this.cy.nodes().forEach( function (gene)
            {
                if(gene.data().type === "GENE")
                {
                    var geneName = gene.data().name;
                    if(validGeneSymbols.indexOf(geneName) < 0)
                        invalidGenes.push(gene.id());
                }
            });
            this.realTimeManager.changeHighlightInvalidGenes(invalidGenes, true);

            if (invalidGenes.length > 0)
                window.notificationManager.createNotification("Invalid genes are highlighted","fail");
            else
                window.notificationManager.createNotification("All gene symbols are valid","success");
        }
        else
        {
            var highlightedGenes = cy.collection();
            this.cy.nodes().forEach( function (gene)
            {
                if(gene.data().type === "GENE")
                {
                    var geneName = gene.data().name;
                    if(validGeneSymbols.indexOf(geneName) < 0)
                        highlightedGenes = highlightedGenes.add(gene);
                }
            });

            if (highlightedGenes.size() > 0)
                window.notificationManager.createNotification("Invalid genes are highlighted","fail");
            else
                window.notificationManager.createNotification("All gene symbols are valid","success");

            var nodesToAddInvalidHighlight = cy.collection();
            highlightedGenes.forEach(function(ele, index){
                if (!ele.hasClass('invalidGeneHighlight') &&  !ele.hasClass('invalidGene'))
                    nodesToAddInvalidHighlight = nodesToAddInvalidHighlight.union(ele);
            });
            window.undoRedoManager.do('highlightInvalidGenes', nodesToAddInvalidHighlight);
        }
    }

    EditorActionsManager.prototype.removeInvalidGeneHighlights = function(actions)
    {
        if (this.isCollaborative)
        {
            var geneIDs = [];
            this.cy.nodes().forEach( function (gene)
            {
                if(gene.data().type === "GENE")
                {
                    if(gene.hasClass('invalidGeneHighlight') || gene.hasClass('invalidGene'))
                        geneIDs.push(gene.id());
                }
            });
            this.realTimeManager.changeHighlightInvalidGenes(geneIDs, false);
        }
        else
        {
            var nodesToRemoveInvalidHighlight = cy.collection();
            cy.nodes().forEach(function(ele, index){
                if (ele.hasClass('invalidGeneHighlight') ||  ele.hasClass('invalidGene'))
                    nodesToRemoveInvalidHighlight = nodesToRemoveInvalidHighlight.union(ele);
            });
            actions.push({name: "removeHighlightInvalidGenes", param: nodesToRemoveInvalidHighlight});
            // window.undoRedoManager.do('removeHighlightInvalidGenes', nodesToRemoveInvalidHighlight);
        }
    }

    EditorActionsManager.prototype.doHighlightInvalidGenes = function(args)
    {
        args.each(function(n, i)
        {
            if(n.hasClass('highlightedNode'))
            {
                n.removeClass('highlightedNode');
                n.addClass("invalidGeneHighlight");
            }
            else
                n.addClass("invalidGene");
        });
        return args;
    };

    EditorActionsManager.prototype.undoHighlightInvalidGenes = function(args)
    {
        args.each(function(n, i)
        {
            if(n.hasClass('invalidGeneHighlight'))
            {
                n.removeClass('invalidGeneHighlight');
                n.addClass("highlightedNode");
            }
            else
                n.removeClass("invalidGene");
        });
        return args;
    }

    EditorActionsManager.prototype.highlightSelected = function()
    {
        var sel = cy.elements(":selected");
        sel.unselect();
        var elementsToHighlight = cy.collection();
        sel.forEach(function(ele, index){
            if (!ele.hasClass('invalidGeneHighlight') &&  !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge'))
                elementsToHighlight = elementsToHighlight.union(ele);
        });
        if (this.isCollaborative)
            this.realTimeManager.changeHighlight(elementsToHighlight, true);
        else
            window.undoRedoManager.do('highlightOthers', elementsToHighlight);
    };

    EditorActionsManager.prototype.highlightNeighbors = function()
    {
        var sel = cy.elements(":selected");
        var neighbors = sel.neighborhood();
        neighbors = neighbors.union(sel);
        neighbors.unselect();
        var elementsToHighlight = cy.collection();
        neighbors.forEach(function(ele, index){
            if (!ele.hasClass('invalidGeneHighlight') &&  !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge'))
                elementsToHighlight = elementsToHighlight.union(ele);
        });
        if (this.isCollaborative)
            this.realTimeManager.changeHighlight(elementsToHighlight, true);
        else
            window.undoRedoManager.do('highlightOthers', elementsToHighlight);
    };

    EditorActionsManager.prototype.highlightBySearch = function(args)
    {
        if (this.isCollaborative)
            this.realTimeManager.changeHighlight(args, true);
        else
            window.undoRedoManager.do('highlightOthers', args);
    };

    EditorActionsManager.prototype.removeOtherHighlight = function(actions)
    {
        var nodesToRemoveHighlight = cy.collection();
        //TODO cytoscape selectors may provide more handy functionality instead of iterating over !
        cy.elements().forEach(function(ele, index){
            if (ele.hasClass('highlightedNode') || ele.hasClass('highlightedEdge') || ele.hasClass('invalidGeneHighlight'))
                nodesToRemoveHighlight = nodesToRemoveHighlight.add(ele);
        });

        if (this.isCollaborative)
            this.realTimeManager.changeHighlight(nodesToRemoveHighlight, false);
        else
            actions.push({name: "removeOtherHighlight", param: nodesToRemoveHighlight});
            // window.undoRedoManager.do('removeOtherHighlight', nodesToRemoveHighlight);
    };

    /*
     * Undo redo for highlighting of nodes
     * **/
    EditorActionsManager.prototype.doHighlight = function(args)
    {
        args.each(function(n, i)
        {
            if (n.isEdge())
                n.addClass("highlightedEdge");
            else
            {
                if(n.hasClass('invalidGene'))
                {
                    n.removeClass("invalidGene");
                    n.addClass("invalidGeneHighlight");
                }
                else
                    n.addClass("highlightedNode");
            }
        });
        return args;
    };

    EditorActionsManager.prototype.undoHighlight = function(args)
    {
        args.each(function(n, i)
        {
            if (n.isEdge())
                n.removeClass("highlightedEdge");
            else
            {
                if(n.hasClass('invalidGeneHighlight'))
                {
                    n.removeClass("invalidGeneHighlight");
                    n.addClass("invalidGene");
                }
                else
                    n.removeClass("highlightedNode");
            }
        });
        return args;
    };

    EditorActionsManager.prototype.removeAllHighlight = function()
    {
        var actions = [];
        window.editorActionsManager.removeInvalidGeneHighlights(actions);
        window.editorActionsManager.removeOtherHighlight(actions);
        cy.undoRedo().do("batch", actions);
    };

    EditorActionsManager.prototype.postLayout = function()
    {
        if (this.isCollaborative)
        {
            //Previously cy.nodes() was sent as an argument in moveElements function but it caused a problem when
            // the compound node was moved before the child nodes
            var movedNodes = cy.collection();
            var parentNodes = cy.collection();
            cy.nodes().forEach(function(node,i)
            {
                if (!node.isParent())
                    movedNodes = movedNodes.add(node);
                else
                    parentNodes = parentNodes.add(node);
            });
            this.moveElements(movedNodes);
            this.moveElements(parentNodes);

            var newState = {
                zoomLevel: cy.zoom(),
                panLevel: cy.pan()
            };
            this.updateGlobalOptions(newState);
        }
    };

    /*
    * Gets the first empty index from the list in cloud model
    * **/
    EditorActionsManager.prototype.getEmptyGroupID = function()
    {
        if(this.isCollaborative)
            return this.realTimeManager.getEmptyGroupID();
        else
            return this.genomicDataOverlayManager.getEmptyGroupID();
    };

    /*
     * Gets the first empty index from the list in cloud model
     * **/
    EditorActionsManager.prototype.groupGenomicData = function(cancerNames, groupID)
    {
        return this.realTimeManager.groupGenomicData(cancerNames, groupID);
    };

    EditorActionsManager.prototype.addPubmedIDs = function(edge, pubmedIDs)
    {
      if (this.isCollaborative)
      {
        this.realTimeManager.addPubmedIDs(edge.id(), pubmedIDs);
      }
      else
      {
        var pubmedArray = edge.data('pubmedIDs');
        var validPubmedIDs = _.filter(pubmedIDs, function(id){
          return !isNaN(id);
        });
        pubmedArray.push.apply(pubmedArray,validPubmedIDs);
        edge.data('pubmedIDs', _.uniq(pubmedArray));
      }
    }

    EditorActionsManager.prototype.removePubmedID = function(edge, pubmedIDs)
    {
      if (this.isCollaborative)
      {
        this.realTimeManager.removePubmedID(edge.id(), pubmedIDs);
      }
      else
      {
        var pubmedArray = edge.data('pubmedIDs');
        edge.data('pubmedIDs', _.difference(pubmedArray, pubmedIDs));
      }
    }

    EditorActionsManager.prototype.updateEdgeBendPoints = function(edge)
    {
        if (this.isCollaborative)
        {
            var numberOfBendPoints = 0;
            if (edgeBendEditing.getSegmentPoints(edge) !== undefined)
                numberOfBendPoints = edgeBendEditing.getSegmentPoints(edge).length/2;
            var bendPointsArray = [];
            for (var j = 0; j < numberOfBendPoints; j++)
            {
                bendPointsArray.push(
                    {
                        x: edgeBendEditing.getSegmentPoints(edge)[2*j],
                        y: edgeBendEditing.getSegmentPoints(edge)[2*j+1]
                    }
                );
            }
            // edge.data("bendPointPositions", bendPointsArray);
            // edgeBendEditing.initBendPoints(edge);

            this.realTimeManager.updateEdgeBendPoints(edge.id(), bendPointsArray);
        }
    }

    //Related to order the nodes according to the selection of user
    EditorActionsManager.prototype.pushSelectedNodeStack = function(ele)
    {
        this.selectedNodeStack[ele.id()] = ele;
    }

    EditorActionsManager.prototype.removeElementFromSelectedNodeStack = function(ele)
    {
        var nodeID = ele.id();
        if (nodeID in this.selectedNodeStack)
            delete this.selectedNodeStack[ele.id()];
    }

    EditorActionsManager.prototype.clearSelectedNodeStack = function()
    {
        this.selectedNodeStack = {};
    }

    EditorActionsManager.prototype.exportSVG = function()
    {
        return this.svgExporter.exportGraph(this.cy.nodes(), this.cy.edges());
    }

    //Simple observer-observable pattern for views!!!!!
    EditorActionsManager.prototype.registerObserver = function(observer)
    {
        this.observers.push(observer);
    };

    EditorActionsManager.prototype.notifyObservers = function()
    {
        for (var i in this.observers)
        {
            var observer = this.observers[i];
            observer.notify();
        }
    };

    EditorActionsManager.prototype.registerGenomicDataObserver = function(observer)
    {
        this.genomicDataOverlayManager.registerObserver(observer);
    }

    EditorActionsManager.prototype.updateGenomicDataVisibility = function(dataMap)
    {
        if(this.isCollaborative)
        {
            //TODO compound OP
            // this.realTimeManager.clearGenomicVisData();
            this.realTimeManager.addGenomicVisibilityData(dataMap);
        }
        else
        {
            for (var _key in dataMap)
            {
                this.genomicDataOverlayManager.updateGenomicDataVisibility(_key, dataMap[_key]);
            }
            this.genomicDataOverlayManager.showGenomicData();
        }
    }

    //Global options related functions, zoom etc..
    EditorActionsManager.prototype.getGlobalOptions = function()
    {
        return {
            zoomLevel: cy.zoom(),
            panLevel: cy.pan()
        };
    }

    EditorActionsManager.prototype.changeGlobalOptions = function(op)
    {
        var globalOptions = op.li;
        cy.zoom(globalOptions.zoomLevel);
        cy.pan(globalOptions.panLevel);
    }

    EditorActionsManager.prototype.updateGlobalOptions = function(newOptions)
    {
        if(this.isCollaborative)
            this.realTimeManager.updateGlobalOptions(newOptions);
    }

    //Layout properties related functions
    EditorActionsManager.prototype.saveLayoutProperties = function(newLayoutProps)
    {
        if(this.isCollaborative)
        {
            // Call a real time function that updated real time object and
            // its callback (updateLayoutPropertiesCallback) will handle sync of this object
            // across collaborators
            this.realTimeManager.updateLayoutProperties(newLayoutProps);
        }
        else
        {
            this.layoutProperties = _.clone(newLayoutProps);
        }
    };

    EditorActionsManager.prototype.updateLayoutPropertiesCallback = function(op)
    {
        var newLayoutProps = op.li;
        this.layoutProperties = _.clone(newLayoutProps);
        //Notify observers to reflect changes on colalborative object to the views
        this.notifyObservers();
    };

    EditorActionsManager.prototype.performLayout = function()
    {
        window.undoRedoManager.do("layout", {options: this.layoutProperties, eles: null, zoom: cy.zoom(), pan: cy.pan()});
    };

    //Node Related Functions
    EditorActionsManager.prototype.addNode = function(nodeData, posData)
    {
        if (this.isCollaborative)
        {
            this.addNewNodeToRealTime(nodeData, posData);
        }
        else
        {
            this.addNodetoCy(nodeData,posData);
        }
    };

    EditorActionsManager.prototype.addNodes = function(nodes)
    {
        for (var i in nodes)
        {
            this.addNode(nodes[i].data, nodes[i].position);
        }
    };

    EditorActionsManager.prototype.addNodesCy = function(nodes)
    {
        var nodeArr = [];
        for (var i in nodes)
        {
            var nodeData = nodes[i].data;
            var posData = nodes[i].position;

            var newNode =
            {
                group: "nodes",
                data: nodeData
            };

            if (nodeData.parent === undefined )
            {
                delete newNode.data.parent;
            }

            if (posData)
            {
                newNode.position =
                {
                    x: posData.x,
                    y: posData.y
                }
            }
            nodeArr[i] = newNode;
        }

        this.cy.add(nodeArr);
        this.cy.nodes().updateCompoundBounds();

    };

    EditorActionsManager.prototype.addNodetoCy = function(nodeData, posData)
    {
        var newNode =
        {
            group: "nodes",
            data: nodeData
        };

        if (nodeData.parent === undefined )
        {
            delete newNode.data.parent;
        }

        if (posData)
        {
            newNode.position =
            {
                x: posData.x,
                y: posData.y
            }
        }

        //this.cy.add(newNode);
        this.cy.nodes().updateCompoundBounds();
        window.undoRedoManager.do("add", newNode);
        //Width was not properly updated only by changing data property
        var thatEle = cy.getElementById(nodeData.id);
        thatEle.style('width', thatEle.data('w'));
    };

    EditorActionsManager.prototype.realTimeNodeAddRemoveEventCallBack = function(op)
    {
        //Get real time node object and sync it to node addition or removal
        var isRemove = Object.keys(op)[1] === 'od';
        var node = op.oi || op.od;

        //Removal Operation
        if (isRemove)
        {
            var nodeID = op.p[1];
            //Remove element from existing graph
            var cyEle = this.cy.$("#" + nodeID);
            this.removeElementCy(cyEle);
            this.cy.nodes().updateCompoundBounds();
        }
        //Addition Operation
        else
        {
            this.addNewNodeLocally(node);
        }
    };

    EditorActionsManager.prototype.addNewNodeLocally = function(realtimeNode)
    {
        var nodeData =
        {
            id: realtimeNode.id,
            type: realtimeNode.type,
            name: realtimeNode.name,
            parent: realtimeNode.parent,
            w: realtimeNode.w,
            h: realtimeNode.h
        };

        if (realtimeNode.x != "undefined" && realtimeNode.y != "undefined")
        {
            this.addNodetoCy(nodeData, {x: realtimeNode.x, y: realtimeNode.y});
        }
        else
        {
            this.addNodetoCy(nodeData);
        }

        this.cy.nodes().updateCompoundBounds();
    };

    EditorActionsManager.prototype.addNewNodeToRealTime = function(nodeData, posData)
    {
        this.realTimeManager.addNewNode(nodeData,posData);
    };

    //Edge related functions
    EditorActionsManager.prototype.addEdge = function(edgeData)
    {
        if (this.isCollaborative)
        {
            this.addNewEdgeRealTime(edgeData);
        }
        else
        {
            this.addNewEdgetoCy(edgeData);
        }
    };

    EditorActionsManager.prototype.addEdges = function(edges)
    {
        for (var i in edges)
        {
            this.addEdge(edges[i].data);
        }
    };

    EditorActionsManager.prototype.addEdgesCy = function(edges)
    {
        var newEdges = [];


        for (var i in edges)
        {
            var newEdge =
            {
                group: "edges",
                data: edges[i].data
            };
            newEdges.push(newEdge);
        }
        cy.add(newEdges);
    };

    EditorActionsManager.prototype.addNewEdgeRealTime = function(edgeData)
    {
        this.realTimeManager.addNewEdge(edgeData);
    };

    EditorActionsManager.prototype.addNewEdgetoCy = function(edgeData)
    {
        var newEdge =
        {
            group: "edges",
            data: edgeData
        };

        window.undoRedoManager.do("add", newEdge);
    };

    EditorActionsManager.prototype.realTimeEdgeAddRemoveEventCallBack = function(op)
    {

        //Get real time node object and sync it to node addition or removal
        var isRemove = Object.keys(op)[1] === 'od';
        var edge = op.oi || op.od;

        //Removal Operation
        if (isRemove)
        {
            var edgeID = op.p[1];
            //Remove element from existing graph
            var cyEle = this.cy.$("#" + edgeID);
            this.removeElementCy(cyEle);
        }
        //Addition Operation
        else
        {
            this.addNewEdgeLocally(edge);
        }
    };

    EditorActionsManager.prototype.addNewElementsLocally = function(realTimeNodeArray, realTimeEdgeArray)
    {
        var nodeList = [];
        var nodeMap = {};

        for (var i in realTimeNodeArray)
        {
            var realTimeNode= realTimeNodeArray[i];

            var nodeID = this.realTimeManager.getCustomObjId(realTimeNode);

            //Added for backward compatibility when width was not defined
            var nodeWidth = (realTimeNode.w == undefined) ? 150 : realTimeNode.w ;
            var nodeHeight = (realTimeNode.h == undefined) ? 52 : realTimeNode.h ;
            var compoundMinWidth = (realTimeNode.minWidth == undefined) ? 0 : realTimeNode.minWidth ;
            var compoundMinWidthBiasLeft = (realTimeNode.minWidthBiasLeft == undefined) ? 0 : realTimeNode.minWidthBiasLeft ;
            var compoundMinWidthBiasRight = (realTimeNode.minWidthBiasRight == undefined) ? 0 : realTimeNode.minWidthBiasRight ;
            var compoundMinHeight = (realTimeNode.minHeight == undefined) ? 0 : realTimeNode.minHeight ;
            var compoundMinHeightBiasTop = (realTimeNode.minHeightBiasTop == undefined) ? 0 : realTimeNode.minHeightBiasTop ;
            var compoundMinHeightBiasBottom = (realTimeNode.minHeightBiasBottom == undefined) ? 0 : realTimeNode.minHeightBiasBottom;

            var nodeData =
            {
                group: 'nodes',
                data:
                {
                    id: nodeID,
                    type: realTimeNode.type,
                    name: realTimeNode.name,
                    parent: realTimeNode.parent,
                    w: nodeWidth,
                    h: nodeHeight
                },
                style:
                {
                    'width': nodeWidth,
                    'height': nodeHeight,
                    'min-width': compoundMinWidth,
                    'min-width-bias-left': compoundMinWidthBiasLeft,
                    'min-width-bias-right': compoundMinWidthBiasRight,
                    'min-height': compoundMinHeight,
                    'min-height-bias-top': compoundMinHeightBiasTop,
                    'min-height-bias-bottom': compoundMinHeightBiasBottom
                }
            };

            if (nodeData.data.parent === undefined )
            {
                delete nodeData.data.parent;
            }

            if (realTimeNode.x && realTimeNode.y)
            {
                nodeData.position =
                {
                    x: realTimeNode.x,
                    y: realTimeNode.y
                }
            }

            nodeMap[nodeID] = nodeData;
            nodeList.push(nodeData);
        }

        var edgeList = [];
        for (var i in realTimeEdgeArray)
        {
            var edge= realTimeEdgeArray[i];
            var edgeID = this.realTimeManager.getCustomObjId(edge);

            //If source and and target is somehow lost in remote model do not create this edge
            if(!(edge.source in nodeMap && edge.target in nodeMap))
                continue

            var edgeData =
            {
                group: 'edges',
                data:
                {
                    id: edgeID,
                    type: edge.type,
                    source: edge.source,
                    target: edge.target,
                    pubmedIDs: edge.pubmedIDs.asArray(),
                    name: edge.name,
                    bendPointPositions: edge.bendPoint.asArray()
                }
            };

            edgeList.push(edgeData);
        }

        this.cy.add(nodeList);
        this.cy.add(edgeList);

        edgeBendEditing.initBendPoints(cy.edges());

        this.cy.nodes().updateCompoundBounds();
    }

    EditorActionsManager.prototype.addNewEdgeLocally = function(edge)
    {
        console.log(edge);
        var edgeData =
        {
            id: edge.id,
            type: edge.type,
            source: edge.source,
            target: edge.target,
            pubmedIDs: edge.pubmedIDs,
            name: edge.name,
            bendPointPositions: edge.bendPoint
        };
        this.addNewEdgetoCy(edgeData);
        edgeBendEditing.initBendPoints(cy.getElementById( edge.id ));
    };

    //Removal functions
    EditorActionsManager.prototype.removeElement = function(ele)
    {
        if (this.isCollaborative)
        {
            this.removeElementsFromRealTime(ele);
        }
        else
        {
            this.removeElementsCy(ele);
        }
    };

    EditorActionsManager.prototype.removeElementCy = function(ele)
    {
        window.undoRedoManager.do("remove", ele);
    };

    EditorActionsManager.prototype.removeElementsCy = function(ele)
    {
        window.undoRedoManager.do("remove", ele);
    };

    EditorActionsManager.prototype.removeElementsFromRealTime = function(eles)
    {
        var self = this;
        eles.forEach(function (ele, i)
        {
            self.realTimeManager.removeElement(ele.id());
        });
    };

    EditorActionsManager.prototype.removeElementFromRealTime = function(ele)
    {
        this.realTimeManager.removeElement(ele.id());
    };

    EditorActionsManager.prototype.changeParents = function(eles, newParentId)
    {
        if(this.isCollaborative)
        {
            this.changeParentRealTime(eles, newParentId);
        }
        else
        {
            var parentData = newParentId ? newParentId : null;

            // Old manual way to change parents in local mode
            // this.changeParentCy(eles, newParentId);

            //Save element's previous width & height in dim array
            var dim = [];
            var id = [];
            eles.forEach(function (ele, i)
            {
                var parameters =
                {
                    id: ele.id(),
                    width: ele.style("width"),
                    height: ele.style("height")
                };
                dim.push(parameters);
                id.push(ele.id());
            });

            var param = {
                firstTime: true,
                parentData: parentData, // It keeps the newParentId (Just an id for each nodes for the first time)
                nodes: eles,
                posDiffX: 0,
                posDiffY: 0
            };
            window.undoRedoManager.do('changeParent', param);

            //The elements after change parent operation are different so we find them by using the saved ids
            // and add them to the collection
            var collection = cy.collection();
            for (var i in id)
            {
                var elementById = cy.getElementById(id[i]);
                collection = collection.add(elementById);
            }
            //Set their previous size to the new elements in the collection
            collection.forEach(function (ele, i)
            {
                if (ele.id() == dim[i].id)
                ele.style("width", dim[i].width);
                ele.style("height", dim[i].height);
            });
        }
    };

    EditorActionsManager.prototype.changeParentRealTime = function (eles, newParentId)
    {

        var classRef = this;
        function getTopLevelParents(eles)
        {
            var tpMostNodes = classRef.cy.collection();
            var parentMap = {};

            //Get all parents
            eles.forEach(function (node, index)
            {
                if(node.isParent())
                    parentMap[node.id()] = node;
            });

            //Get all parents
            eles.forEach(function (node, index)
            {
                var nodeParent = node.parent();

                if(parentMap[nodeParent.id()] === undefined)
                    tpMostNodes = tpMostNodes.union(node);
            });

            return tpMostNodes;
        }

        var NodeObj = function(nodeObj){
            this.nodeRef  = nodeObj;
            this.children = [];
        };

        var connectedEdges = eles.connectedEdges();
        // Traverses given elements and constructs subgraph relations
        // creates a nested structure into rootnodeObj
        function traverseNodes(eles, rootNodeObj)
        {
            eles.forEach(function (ele, index)
            {
                connectedEdges = connectedEdges.union(ele.connectedEdges());

                if(ele.isParent())
                {
                    rootNodeObj.children.push(new NodeObj(ele));
                    var lengthOfChildrenArray = rootNodeObj.children.length;
                    traverseNodes(ele.children(), rootNodeObj.children[lengthOfChildrenArray-1]);
                }
                else
                {
                    rootNodeObj.children.push(new NodeObj(ele));
                }
            });
        }

        //Create new collection
        var topMostNodes = getTopLevelParents(eles);

        var rootNodeR = new NodeObj(null);

        traverseNodes(topMostNodes, rootNodeR);
        this.realTimeManager.changeParent(rootNodeR, newParentId, connectedEdges);
    };

    EditorActionsManager.prototype.changeParentCy = function(eles, newParentId)
    {
        var lockedNodes = {};
        var self = this;

        function removeNodes(nodes)
        {
            //Get removed edges first
            var removedEles = nodes.connectedEdges().remove();
            var children = nodes.children();

            if (children != null && children.length > 0)
            {
                children.forEach(function(childNode, i)
                {
                    lockedNodes[childNode.id()] = true;
                });

                removedEles = removedEles.union(removeNodes(children));
            }

            removedEles = removedEles.union(nodes.remove());
            self.cy.nodes().updateCompoundBounds();
            return removedEles;
        }


        var removedEles = removeNodes(eles);
        window.undoRedoManager.do("remove", removedEles);

        for (var i = 0; i < removedEles.length; i++)
        {
            var removedNode = removedEles[i];

            //Just alter the parent id of corresponding nodes !
            if (removedNode.isEdge() || lockedNodes[removedNode.id()])
            {
                continue;
            }

            removedNode._private.data.parent = newParentId;
            if(removedNode._private.parent){
                delete removedNode._private.parent;
            }
        }

        self.cy.add(removedEles);
        window.undoRedoManager.do("add", removedEles);
        self.cy.nodes().updateCompoundBounds();
    };

    EditorActionsManager.prototype.moveElements = function(eles)
    {
        var classRef = this;
        //Sync movement to real time api
        if(this.isCollaborative)
        {
            eles.forEach(function (ele,index)
            {
                classRef.realTimeManager.moveElement(ele);
            });
        }
    };

    EditorActionsManager.prototype.resizeElements = function(ele)
    {
        if(this.isCollaborative) {
            if (!ele.isParent()) {
                var previousWidth = ele.width();
                var previousHeight = ele.height();
                //Sync movement to real time api
                this.realTimeManager.resizeElement(ele, previousWidth, previousHeight);
            }
            else {
                var minWidth = ele.style('min-width');
                var minWidthBiasLeft = ele.style('min-width-bias-left');
                var minWidthBiasRight = ele.style('min-width-bias-right');
                var minHeight = ele.style('min-height');
                var minHeightBiasTop = ele.style('min-height-bias-top');
                var minHeightBiasBottom = ele.style('min-height-bias-bottom');

                //Sync movement to real time api
                this.realTimeManager.resizeCompound(ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom);
            }
        }
    };

    EditorActionsManager.prototype.mergeGraph = function(nodes, edges)
    {
        if (this.isCollaborative)
        {
            //Collaborative usage
            this.realTimeManager.mergeGraph(nodes,edges);
        }
        else
        {
            //Local usage file load
            this.mergeGraphCy(nodes,edges);
        }
        this.fitGraph();
    };

    EditorActionsManager.prototype.mergeGraphCy = function(nodes, edges)
    {
        //Define arrays and maps
        var nodesToBeAdded = [];
        var edgesToBeAdded = [];
        var nodeMap = {};

        //Iterate over nodes and find nodes that does not exist in current graph by looking their name
        for (var index in nodes)
        {
            var ele = nodes[index];
            nodeMap[ele.data.id] = ele;

            if (cy.filter('node[name = "'+ele.data.name+'"]').length <= 0)
            {
                delete ele.data.id;
                //TODO need to update parent ?
                nodesToBeAdded.push(ele);
            }
        }

        cy.add(nodesToBeAdded);

        //Iterate over all edges
        for (var index in edges)
        {
            //Get corresponding source and target node in merge file
            var ele = edges[index];
            var sourceNode = nodeMap[ele.data.source];
            var targetNode = nodeMap[ele.data.target];

            //Check if there are nodes with same name in current graph
            var cySourceNode = cy.nodes('[name="'+sourceNode.data.name+'"]');
            var targetNode = cy.nodes('[name="'+targetNode.data.name+'"]');

            if (cySourceNode.length > 0)
            {
                ele.data.source = cySourceNode.id();
            }

            if (targetNode.length > 0)
            {
                ele.data.target = targetNode.id();
            }

            if (targetNode.length < 0 && cySourceNode.length < 0 ) {
                continue;
            }

            var edgesBtw = cy.filter('edge[source = "'+cySourceNode.id()+'"][target = "'+targetNode.id()+'"]');

            //We assume there could be one edge between source and target node with same type
            var isFound = false;
            edgesBtw.forEach(function(edge,i)
            {
                if (edge.data().type == ele.data.type)
                {
                    isFound = true;
                    return false;
                }
            });

            if (!isFound)
            {
                delete ele.data.id;
                edgesToBeAdded.push(ele);
            }
        }

        cy.add(edgesToBeAdded);
    };

    EditorActionsManager.prototype.fitGraph = function()
    {
        if(this.isCollaborative)
        {
            cy.fit(this.FIT_CONSTANT);
            var newState =
            {
                zoomLevel: cy.zoom(),
                panLevel: cy.pan()
            };
            this.updateGlobalOptions(newState);
        }
        else
        {
            cy.fit(this.FIT_CONSTANT);
        }
    }

    EditorActionsManager.prototype.loadFile = function(nodes, edges)
    {
        if (this.isCollaborative)
        {
            //Real time load graph
            this.loadfileRealTime(nodes,edges);
        }
        else
        {
            //Local usage file load
            this.loadFileCy(nodes,edges);
        }
        cy.edgeBendEditing('get').initBendPoints(cy.edges());
        this.fitGraph();
    };

    EditorActionsManager.prototype.loadFileCy = function(nodes, edges)
    {
        //Remove all elements
        this.removeElementCy(cy.elements());
        this.addNodesCy(nodes);
        this.addEdgesCy(edges);
    };

    EditorActionsManager.prototype.loadfileRealTime = function(nodes, edges)
    {
        this.realTimeManager.loadGraph(nodes,edges);
    };

    EditorActionsManager.prototype.removeAllElements = function()
    {
        if (this.isCollaborative)
        {
            this.realTimeManager.removeAllElements();
        }
        else
        {
            cy.remove(cy.elements());
        }
    };

    EditorActionsManager.prototype.updateHighlight = function(ele, isHighlighted)
    {
        if (isHighlighted)
            window.undoRedoManager.do('highlightOthers', ele);
        else
            window.undoRedoManager.do('removeOtherHighlight', ele);
    };


    EditorActionsManager.prototype.updateVisibility = function(ele, isHidden)
    {
        if (isHidden)
            ele.hide();
        else
            ele.show();
    };

    EditorActionsManager.prototype.updateElementCallback = function(op)
    {
        var ele = op.oi;
        var eleID = ele.id;
        var cyEle = this.cy.$("#" + eleID);
        this.changeNameCy(cyEle, ele.name);

        if (cyEle.isNode())
        {
            //Width and height of simple nodes and compounds is changed differently
            if (cyEle.isParent())
            {
                cyEle.style("min-width", ele.minWidth);
                cyEle.style("min-width-bias-left", ele.minWidthBiasLeft);
                cyEle.style("min-width-bias-right", ele.minWidthBiasRight);
                cyEle.style("min-height", ele.minHeight);
                cyEle.style("min-height-bias-top", ele.minHeightBiasTop);
                cyEle.style("min-height-bias-bottom", ele.minHeightBiasBottom);
            }
            else
            {
                cyEle.data.w = ele.w;
                cyEle.data.h = ele.h;
                cyEle.style("width", ele.w);
                cyEle.style("height", ele.h);
                //Position is changed only for simple nodes because the
                //position of compounds is defined by simple nodes' position
                cyEle.position({x: ele.x, y: ele.y});
            }

            this.updateVisibility(cyEle, ele.isHidden);
            this.updateHighlight(cyEle, ele.isHighlighted);

            if(ele.isInvalidGene)
            {
                window.editorActionsManager.doHighlightInvalidGenes(cyEle);
            }
            else
            {
                window.editorActionsManager.undoHighlightInvalidGenes(cyEle);
            }
            //Refresh grapples when the node being changed from another collaborator is selected in current window
            // cy.nodeResize('get').refreshGrapples();
        }
        else if(cyEle.isEdge())
        {
              var pubmedArray = ele.pubmedIDs;
              cyEle.data('pubmedIDs', pubmedArray);
              this.updateHighlight(cyEle, ele.isHighlighted);

              var bendPoint = ele.bendPoint;
              var numberOfBendPositions = cyEle.data('bendPointPositions').length; // Holds the number of bend positions in data before being updated
              cyEle.data('bendPointPositions', bendPoint);
              if (bendPoint.length == 0 && numberOfBendPositions > 0) //Checks if the number of bendpoints changed from before
                  edgeBendEditing.deleteSelectedBendPoint(cyEle,0);
              edgeBendEditing.initBendPoints(cyEle);
        }
    };

    EditorActionsManager.prototype.getGenomicDataSVG = function(node)
    {
        return this.genomicDataOverlayManager.generateSVGForNode(node);
    }

    EditorActionsManager.prototype.removeGenomicData = function()
    {
        if(this.isCollaborative)
        {
            this.realTimeManager.clearGenomicData();
        }
        else
        {
            //TODO wrap this in afunction in genomic data overlay manager
            this.genomicDataOverlayManager.clearAllGenomicData();
            this.genomicDataOverlayManager.hideGenomicData();
            this.genomicDataOverlayManager.notifyObservers();
        }

    }

    EditorActionsManager.prototype.addGenomicData = function(genomicData)
    {
        var groupID = this.getEmptyGroupID();

        if(this.isCollaborative)
        {

            var parsedGenomicData = this.genomicDataOverlayManager.prepareGenomicDataRealTime(genomicData);
            this.realTimeManager.addGenomicData(parsedGenomicData.genomicDataMap);
            this.realTimeManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap),
                groupID);
            this.realTimeManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);

        }
        else
        {
            this.genomicDataOverlayManager.addGenomicDataLocally(genomicData, groupID);
        }
    }

    EditorActionsManager.prototype.addPortalGenomicData = function(genomicData, groupID)
    {
        if(this.isCollaborative)
        {
            var parsedGenomicData = this.genomicDataOverlayManager.preparePortalGenomicDataRealTime(genomicData);
            this.realTimeManager.addGenomicData(parsedGenomicData.genomicDataMap);
            this.realTimeManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap),
                groupID);
            this.realTimeManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);
        }
        else
        {
            this.genomicDataOverlayManager.addPortalGenomicData(genomicData, groupID);
        }
    }

    EditorActionsManager.prototype.realTimeGenomicDataHandler = function(op)
    {
        var isRemove = Object.keys(op)[1] === 'od';
        var newData = op[1];
        var geneSymbol = op.p[1];

        if(!isRemove)
        {
            this.genomicDataOverlayManager.addGenomicData(geneSymbol, newData);
        }
        //Removal
        else
        {
            this.genomicDataOverlayManager.removeGenomicData(geneSymbol);
        }
    }


    EditorActionsManager.prototype.realTimeGenomicDataGroupChangeHandler = function(op)
    {

        var isRemove = Object.keys(op)[1] === 'od';
        var data = op[1];
        var key = op.p[1];

        //Addition
        if(!isRemove)
        {
            this.genomicDataOverlayManager.addGenomicGroupData(key, data);
        }
        // //Removal
        // else
        // {
        //
        // }
        this.genomicDataOverlayManager.showGenomicData();
        this.genomicDataOverlayManager.notifyObservers();
    }

    EditorActionsManager.prototype.realTimeGenomicDataVsibilityHandler = function(op)
    {
        var data = op[1];
        var key = op.p[1];
        var isRemove = Object.keys(op)[1] === 'od';
        //Addition
        if(!isRemove)
        {
            this.genomicDataOverlayManager.addGenomicVisData(key, data);
        }
        //Removal
        else
        {
            this.genomicDataOverlayManager.removeGenomicVisData(data);
        }

        this.genomicDataOverlayManager.showGenomicData();
        this.genomicDataOverlayManager.notifyObservers();
    }

    EditorActionsManager.prototype.resizeNodesToContent = function(nodes)
    {
        if(this.isCollaborative)
        {
            var visibleNumberOfData = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
            var labelWithData = 148 + (visibleNumberOfData-3) * 36;
            var rt = this.realTimeManager;
            nodes.forEach(function( ele ){
                if (!ele.isParent())
                {
                    var newWidth = 150;
                    var newHeight = 52;
                    if (ele.data('name') != "")
                    {
                        var labelLength = ele.style('label').length*10 + 6;
                        newWidth = labelLength;
                        newHeight = 24;
                    }
                    if (visibleNumberOfData > 0)
                    {
                        newHeight = 52;
                        if (visibleNumberOfData < 4)
                        {
                            if (150 > newWidth)
                                newWidth = 150;
                        }
                        else
                        {
                            if (labelWithData > newWidth)
                                newWidth = labelWithData;
                        }
                    }
                    rt.setSizeOfElement(ele, newWidth, newHeight);
                }
                else
                {
                    //Set the minWidth, minHeight and other properties of compound to 0
                    rt.resizeCompound(ele, 0, 0, 0, 0, 0, 0);
                }
            });
        }
        else
        {
            var ur = cy.undoRedo();
            var actions = [];

            var visibleNumberOfData = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
            var labelWithData = 150 + (visibleNumberOfData-3) * 36;
            nodes.forEach(function( ele ){
                if (!ele.isParent())
                {
                    var newWidth = 150;
                    var newHeight = 52;
                    if (ele.data('name') != "") {
                        var labelLength = ele.style('label').length * 10 + 6;
                        newWidth = labelLength;
                        newHeight = 24;
                    }
                    if (visibleNumberOfData > 0) {
                        newHeight = 52;
                        if (visibleNumberOfData < 4) {
                            if (150 > newWidth)
                                newWidth = 150;
                        }
                        else {
                            if (labelWithData > newWidth)
                                newWidth = labelWithData;
                        }
                    }
                    var args = {
                        ele: ele,
                        oldWidth: ele.width(),
                        newWidth: newWidth,
                        oldHeight: ele.height(),
                        newHeight: newHeight
                    };
                    actions.push({name: "changeNodeSize", param: args});
                }
                else
                {
                    var args = {
                        ele: ele,
                        oldMinWidth: ele.style("min-width"),
                        newMinWidth: 0,
                        oldMinWidthBiasLeft: ele.style("min-width-bias-left"),
                        newMinWidthBiasLeft: 0,
                        oldMinWidthBiasRight: ele.style("min-width-bias-right"),
                        newMinWidthBiasRight: 0,
                        oldMinHeight: ele.style("min-height"),
                        newMinHeight: 0,
                        oldMinHeightBiasTop: ele.style("min-height-bias-top"),
                        newMinHeightBiasTop: 0,
                        oldMinHeightBiasBottom: ele.style("min-height-bias-bottom"),
                        newMinHeightBiasBottom: 0
                    };
                    actions.push({name: "changeCompoundSize", param: args});
                }
            });

            ur.do("batch", actions);
        }
        cy.nodeResize('get').refreshGrapples();
    };

    //Utility Functions
    //TODO move functions thar are inside class functions here

    return EditorActionsManager;

})();
