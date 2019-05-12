



export default class EditorActionsManager{

    public cy: any;
    public defaultLayoutProperties: any;
    private FIT_CONSTANT: number;
    private layoutProperties: any;
    private observers: any[];
    private svgExporter: SVGExporter;
    private genomicDataOverlayManager: GenomicDataOverlayManager;
    private selectedNodeStack: {};
    private undoRedoManager: any;

    constructor(cyInst:any)
    {
        //Set cy instance and set real time manager reference if collaborative mode
        this.cy = cyInst;
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

        this.undoRedoManager = this.cy.undoRedo();
        this.undoRedoManager.action("changePositions", this.doChangePosition, this.undoChangePosition);
        this.undoRedoManager.action("changeNodeSize", this.doChangeNodeSize, this.undoChangeNodeSize);
        this.undoRedoManager.action("changeCompoundSize", this.doChangeCompoundSize, this.undoChangeCompoundSize);
        this.undoRedoManager.action("changeName", this.doChangename, this.undoChangeName);
        this.undoRedoManager.action("hideNode", this.doHide, this.undoHide);
        this.undoRedoManager.action("showAllNodes", this.doShow, this.undoShow);*/

    };

    handleChangePositionByAlignment(movedNodeArr: any[])
    {
        this.undoRedoManager.do("changePositions", movedNodeArr)
    };

    /*
     * Undo redo for changing positions of nodes via programatically (node.position)
     * **/
    doChangePosition(movedNodes: any[])
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

    undoChangePosition(movedNodes: any[])
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
    /*
     * Undo redo for changing size of nodes
     * **/
    doChangeNodeSize(args: any)
    {
        args.ele.data('w', args.newWidth);
        args.ele.data('h', args.newHeight);
        args.ele.style('width', args.newWidth);
        args.ele.style('height', args.newHeight);

        return args;
    };

    undoChangeNodeSize(args: any)
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
    doChangeCompoundSize(args: any)
    {
        args.ele.style('min-width', args.newMinWidth);
        args.ele.style('min-width-bias-left', args.newMinWidthBiasLeft);
        args.ele.style('min-width-bias-right', args.newMinWidthBiasRight);
        args.ele.style('min-height', args.newMinHeight);
        args.ele.style('min-height-bias-top', args.newMinHeightBiasTop);
        args.ele.style('min-height-bias-bottom', args.newMinHeightBiasBottom);

        return args;
    };

    undoChangeCompoundSize(args: any)
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

    changeName(ele: any, newName: string)
    {

        this.changeNameCy(ele, newName);
    };

    changeNameCy(ele: any, newName: string)
    {
        var currentName = ele.data('name');
        var args = {ele: ele, oldName: currentName, newName: newName};
        this.undoRedoManager.do('changeName', args);
    };

    /*
     * Undo redo for changing name of nodes
     * **/
    doChangename(args: any)
    {

        var currentName = args.ele.data('name');
        var newArgs = {ele: args.ele, newName: args.newName, oldName: currentName};
        args.ele.data('name', args.newName);
        args.ele.css('content', args.newName);

        return newArgs;
    };

    undoChangeName(args: any)
    {

        var currentName = args.ele.data('name');
        var newArgs = {ele: args.ele, newName: args.newName, oldName: currentName};
        args.ele.data('name', args.oldName);
        args.ele.css('content', args.oldName);

        return newArgs;
    };

    hideSelectedNodes()
    {
        //Hides the selected elements
        var sel = this.cy.nodes(":selected");
        var nodesToHide = sel;
        var b = true;
        //Hides the parents if they have no children
        sel.parent().each( function(parent: any, i: number)
        {
            b=true;
            parent.children().each(function(ch: any,j: number)
                {
                    if (!ch.selected())
                    {
                        if (ch.visible()) b=false;
                    }
                }
            );
            if (b==true) nodesToHide = nodesToHide.add(parent);
        });
        this.cy.elements(":selected").unselect();
        this.undoRedoManager.do('hideNode', nodesToHide);
    };

    /*
     * Undo redo for hiding nodes
     * **/
    doHide = function(args)
    {
        args.hide();
        return args;
    };

    undoHide = function(args)
    {
        args.show();
        return args;
    };

    showAllNodes = function()
    {
        var hid = cy.nodes(":hidden");
        window.undoRedoManager.do('showAllNodes', hid);
    };

    /*
     * Undo redo for showing all nodes
     * **/
    doShow = function(args)
    {
        args.show();
        return args;
    };

    undoShow = function(args)
    {
        args.hide();
        return args;
    };

    validateGenes = function()
    {
        var geneSymbols = this.getGeneSymbols();
        window.portalAccessor.validateGenes(geneSymbols);
    }

    //Get all gene symbols
    getGeneSymbols = function()
    {
        var geneSymbols = [];
        this.cy.nodes().forEach( function (gene)
        {
            if(gene.data().type === "GENE")
                geneSymbols.push(gene.data().name);
        });
        return geneSymbols;
    }
    /*
    * Gets the first empty index from the list in cloud model
    * **/
    getEmptyGroupID = function()
    {
        return this.genomicDataOverlayManager.getEmptyGroupID();
    };

    /*
     * Gets the first empty index from the list in cloud model
     * **/
    groupGenomicData = function(cancerNames, groupID)
    {
        return this.shareDBManager.groupGenomicData(cancerNames, groupID);
    };

    addPubmedIDs = function(edge, pubmedIDs)
    {
        var pubmedArray = edge.data('pubmedIDs');
        var validPubmedIDs = _.filter(pubmedIDs, function(id){
            return !isNaN(id);
        });
        pubmedArray.push.apply(pubmedArray,validPubmedIDs);
        edge.data('pubmedIDs', _.uniq(pubmedArray));
    }

    removePubmedID = function(edge, pubmedIDs)
    {
        var pubmedArray = edge.data('pubmedIDs');
        edge.data('pubmedIDs', _.difference(pubmedArray, pubmedIDs));

    }


    //Related to order the nodes according to the selection of user
    pushSelectedNodeStack = function(ele)
    {
        this.selectedNodeStack[ele.id()] = ele;
    }

    removeElementFromSelectedNodeStack = function(ele)
    {
        var nodeID = ele.id();
        if (nodeID in this.selectedNodeStack)
            delete this.selectedNodeStack[ele.id()];
    }

    clearSelectedNodeStack = function()
    {
        this.selectedNodeStack = {};
    }

    exportSVG = function()
    {
        return this.svgExporter.exportGraph(this.cy.nodes(), this.cy.edges());
    }

    //Simple observer-observable pattern for views!!!!!
    registerObserver = function(observer)
    {
        this.observers.push(observer);
    };

    notifyObservers = function()
    {
        for (var i in this.observers)
        {
            var observer = this.observers[i];
            observer.notify();
        }
    };

    registerGenomicDataObserver(observer: any)
    {
        this.genomicDataOverlayManager.registerObserver(observer);
    }

    updateGenomicDataVisibility(dataMap: any)
    {
        for (var _key in dataMap)
        {
            this.genomicDataOverlayManager.updateGenomicDataVisibility(_key, dataMap[_key]);
        }
        this.genomicDataOverlayManager.showGenomicData();
    }

    //Global options related functions, zoom etc..
    getGlobalOptions()
    {
        return {
            zoomLevel: this.cy.zoom(),
            panLevel: this.cy.pan()
        };
    }

    changeGlobalOptions(op: any)
    {
        var globalOptions = op.li;
        this.cy.zoom(globalOptions.zoomLevel);
        this.cy.pan(globalOptions.panLevel);
    }

    performLayout = function()
    {
        window.undoRedoManager.do("layout", {options: this.layoutProperties, eles: null, zoom: cy.zoom(), pan: cy.pan()});
    };

    //Node Related Functions
    addNode = function(nodeData, posData)
    {
        this.addNodetoCy(nodeData,posData);
    };

    addNodes = function(nodes)
    {
        for (var i in nodes)
        {
            this.addNode(nodes[i].data, nodes[i].position);
        }
    };

    addNodesCy = function(nodes)
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

    addNodetoCy = function(nodeData, posData)
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


    addNewNodeLocally(realtimeNode: any)
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


    //Edge related functions
    addEdge(edgeData: any)
    {
        this.addNewEdgetoCy(edgeData);
    };

    addEdges(edges: any[])
    {
        for (var i in edges)
        {
            this.addEdge(edges[i].data);
        }
    };

    addEdgesCy(edges: any[])
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
        this.cy.add(newEdges);
    };


    addNewEdgetoCy(edgeData: object)
    {
        var newEdge =
            {
                group: "edges",
                data: edgeData
            };

        this.undoRedoManager.do("add", newEdge);
    };


    addNewElementsLocally(realTimeNodeArray: any[], realTimeEdgeArray: any[])
    {
        var nodeList = [];
        var nodeMap : any = {};

        for (var i in realTimeNodeArray)
        {
            var realTimeNode = realTimeNodeArray[i];

            var nodeID = realTimeNode.id;

            //Added for backward compatibility when width was not defined
            var nodeWidth = (realTimeNode.w == undefined) ? 150 : realTimeNode.w ;
            var nodeHeight = (realTimeNode.h == undefined) ? 52 : realTimeNode.h ;
            var compoundMinWidth = (realTimeNode.minWidth == undefined) ? 0 : realTimeNode.minWidth ;
            var compoundMinWidthBiasLeft = (realTimeNode.minWidthBiasLeft == undefined) ? 0 : realTimeNode.minWidthBiasLeft ;
            var compoundMinWidthBiasRight = (realTimeNode.minWidthBiasRight == undefined) ? 0 : realTimeNode.minWidthBiasRight ;
            var compoundMinHeight = (realTimeNode.minHeight == undefined) ? 0 : realTimeNode.minHeight ;
            var compoundMinHeightBiasTop = (realTimeNode.minHeightBiasTop == undefined) ? 0 : realTimeNode.minHeightBiasTop ;
            var compoundMinHeightBiasBottom = (realTimeNode.minHeightBiasBottom == undefined) ? 0 : realTimeNode.minHeightBiasBottom;

            let nodeData : any =
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
            var edge = realTimeEdgeArray[i];
            var edgeID = edge.id;

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
                            pubmedIDs: edge.pubmedIDs,
                            name: edge.name,
                            bendPointPositions: edge.bendPoint
                        }
                };

            edgeList.push(edgeData);
        }

        this.cy.add(nodeList);
        this.cy.add(edgeList);

        edgeEditing.initBendPoints(cy.edges());

        this.cy.nodes().updateCompoundBounds();
    }

    addNewEdgeLocally(edge: any)
    {
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
        edgeEditing.initBendPoints(cy.getElementById( edge.id ));
    };

    reconnectEdge(sourceID:number, targetID:number, edgeData: any) {

        var location = {
            source: sourceID,
            target: targetID
        };

        var edge = this.cy.getElementById(edgeData.id);
        edge.move(location);

        return this.cy.getElementById(edgeData.id);
    };

    //Removal functions
    removeElement(ele: any)
    {
        this.removeElementsCy(ele);
    };

    removeElementCy(ele:any)
    {
        this.undoRedoManager.do("remove", ele);
    };

    removeElementsCy(ele: any)
    {
        this.undoRedoManager.do("remove", ele);
    };

    changeParents(eles: any[], newParentId: number)
    {
        var parentData = newParentId ? newParentId : null;

        // Old manual way to change parents in local mode
        // this.changeParentCy(eles, newParentId);

        //Save element's previous width & height in dim array
        let dim = [];
        let id = [];
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
        this.undoRedoManager.do('changeParent', param);

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
    };
    changeParentCy(eles: any[], newParentId: number)
    {
        let lockedNodes: any = {};
        let self = this;

        function removeNodes(nodes: any)
        {
            //Get removed edges first
            var removedEles = nodes.connectedEdges().remove();
            var children = nodes.children();

            if (children != null && children.length > 0)
            {
                children.forEach(function(childNode: any, i: number)
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
        this.undoRedoManager.do("remove", removedEles);

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
        self.undoRedoManager.do("add", removedEles);
        self.cy.nodes().updateCompoundBounds();
    };



    mergeGraph(nodes: any[], edges: any[])
    {
        //Local usage file load
        this.mergeGraphCy(nodes,edges);
        this.fitGraph();
    };

    mergeGraphCy(nodes: any[], edges: any[])
    {
        //Define arrays and maps
        let nodesToBeAdded = [];
        let edgesToBeAdded = [];
        let nodeMap : any= {};

        //Iterate over nodes and find nodes that does not exist in current graph by looking their name
        for (var index in nodes)
        {
            var ele = nodes[index];
            nodeMap[ele.data.id] = ele;

            if (this.cy.filter('node[name = "'+ele.data.name+'"]').length <= 0)
            {
                delete ele.data.id;
                //TODO need to update parent ?
                nodesToBeAdded.push(ele);
            }
        }

        this.cy.add(nodesToBeAdded);

        //Iterate over all edges
        for (var index in edges)
        {
            //Get corresponding source and target node in merge file
            var ele = edges[index];
            var sourceNode = nodeMap[ele.data.source];
            var targetNode = nodeMap[ele.data.target];

            //Check if there are nodes with same name in current graph
            var cySourceNode = this.cy.nodes('[name="'+sourceNode.data.name+'"]');
            var targetNode = this.cy.nodes('[name="'+targetNode.data.name+'"]');

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

        this.cy.add(edgesToBeAdded);
    };

    fitGraph()
    {
        this.cy.fit(this.FIT_CONSTANT);
    }

    loadFile = function(nodes, edges)
    {
        //Local usage file load
        this.loadFileCy(nodes,edges);
        cy.edgeEditing('get').initBendPoints(cy.edges());
        this.fitGraph();
    };

    loadFileCy = function(nodes, edges)
    {
        //Remove all elements
        this.removeElementCy(cy.elements());
        this.addNodesCy(nodes);
        this.addEdgesCy(edges);
    };

    loadfileShareDB = function(nodes, edges)
    {
        this.shareDBManager.loadGraph(nodes,edges);
    };

    removeAllElements = function()
    {
        cy.remove(cy.elements());
    };

    updateHighlight = function(ele, isHighlighted)
    {
        if (isHighlighted)
            window.undoRedoManager.do('highlightOthers', ele);
        else
            window.undoRedoManager.do('removeOtherHighlight', ele);
    };


    updateVisibility = function(ele, isHidden)
    {
        if (isHidden)
            ele.hide();
        else
            ele.show();
    };

    updateElementCallback = function(op)
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



            //If edge is reconnected
            if ( ele.source !== cyEle.source().id() || ele.target !== cyEle.target().id()){
                var location = {
                    source: ele.source,
                    target: ele.target
                };
                cyEle.move(location);
                //make sure that bend points are same
                this.updateEdgeBendPoints(cyEle);
            }
            else {
                cyEle.data('bendPointPositions', bendPoint);
                if (numberOfBendPositions !== undefined && numberOfBendPositions > 0)
                    edgeEditing.deleteSelectedBendPoint(cyEle,0);
                edgeEditing.initBendPoints(cyEle);
            }
        }
    };

    getGenomicDataSVG(node: any)
    {
        return this.genomicDataOverlayManager.generateSVGForNode(node);
    }

    removeGenomicData()
    {
        //TODO wrap this in afunction in genomic data overlay manager
        this.genomicDataOverlayManager.clearAllGenomicData();
        this.genomicDataOverlayManager.hideGenomicData();
        this.genomicDataOverlayManager.notifyObservers();

    }

    addGenomicData(genomicData: any)
    {
        var groupID = this.getEmptyGroupID();
        this.genomicDataOverlayManager.addGenomicDataLocally(genomicData, groupID);
    }

    addPortalGenomicData(genomicData: any, groupID: number)
    {

        this.genomicDataOverlayManager.addPortalGenomicData(genomicData, groupID);
    }

    resizeNodesToContent(nodes: any[])
    {
        let ur = this.cy.undoRedo();
        let actions: any[]= [];

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
        this.cy.nodeResize('get').refreshGrapples();
    };



}