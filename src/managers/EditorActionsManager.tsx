import ShareDBManager from "./ShareDBManager";
import CBioPortalAccessor from "../utils/CBioPortalAccessor";
import SVGExporter from "../utils/SVGExporter";
import GenomicDataOverlayManager from "./GenomicDataOverlayManager";
import { IProfileMetaData, IPathwayData } from "../ui/react-pathway-mapper";
import { observable } from "mobx";
import LayoutProperties, { ILayoutProperties } from "../modals/LayoutProperties";

const _ = require('underscore');

export default class EditorActionsManager{

    public static defaultLayoutProperties: ILayoutProperties =
    {
        name: 'cose-bilkent',
        nodeRepulsion: 4500,
        idealEdgeLength: 50,
        edgeElasticity: 0.45,
        nestingFactor: 0.1,
        gravity: 0.25,
        numIter: 2500,
        tile: true,
        animate: true,
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
    };
    
    public cy: any;
    public genomicDataOverlayManager: GenomicDataOverlayManager;
    public edgeEditing: any;
    public selectedNodeStack: any;
    public layoutProperties: ILayoutProperties;
    
    private FIT_CONSTANT: number;
    private observers: any[];
    private svgExporter: SVGExporter;
    private undoRedoManager: any;
    private isCbioPortal: boolean;
    private isCollaborative: boolean;
    private shareDBManager: ShareDBManager;
    private portalAccessor: CBioPortalAccessor;

    @observable
    private profiles: IProfileMetaData[];
    private modifyPathwayGeneMap: (pathwayData: IPathwayData, isRemove: boolean) => void;


    constructor(isCollaborative: boolean, shareDBManager: any, cyInst: any, isCBioPortal: boolean,
                undoRedoManager: any, portalAccessor: CBioPortalAccessor, profiles: IProfileMetaData[])
    {
        // Set cy instance and set real time manager reference if collaborative mode
        this.cy = cyInst;
        this.isCollaborative = isCollaborative;
        this.isCbioPortal = isCBioPortal;
        this.profiles = profiles;
        const edgeEditingOptions = {
        // this function specifies the positions of bend points
        bendPositionsFunction: function (ele: any) {
            return ele.data('bendPointPositions');
        },
        // whether to initilize bend points on creation of this extension automatically
        initBendPointsAutomatically: true,
        // whether the bend editing operations are undoable (requires cytoscape-undo-redo.js)
        undoable: true,
        // the size of bend shape is obtained by multipling width of edge with this parameter
        bendShapeSizeFactor: 6,
        // whether to start the plugin in the enabled state
        enabled: !this.isCbioPortal,
        // title of add bend point menu item (User may need to adjust width of menu items according to length of this option)
        addBendMenuItemTitle: "Add Bend Point",
        // title of remove bend point menu item (User may need to adjust width of menu items according to length of this option)
        removeBendMenuItemTitle: "Remove Bend Point",
    
        handleReconnectEdge: this.reconnectEdge.bind(this),
        };
        
        this.edgeEditing = this.cy.edgeEditing(edgeEditingOptions);
        this.portalAccessor = portalAccessor;
        if(this.isCollaborative) {
          this.shareDBManager = shareDBManager;
        }

        this.FIT_CONSTANT = 50;

        this.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties);
        this.observers = [];
        this.genomicDataOverlayManager = new GenomicDataOverlayManager(this.cy);
        this.svgExporter = new SVGExporter(this.edgeEditing, this);

        this.selectedNodeStack = {};
        this.undoRedoManager = undoRedoManager;
        this.undoRedoManager.action("changePositions", this.doChangePosition, this.undoChangePosition);
        this.undoRedoManager.action("changeNodeSize", this.doChangeNodeSize, this.undoChangeNodeSize);
        this.undoRedoManager.action("changeCompoundSize", this.doChangeCompoundSize, this.undoChangeCompoundSize);
        this.undoRedoManager.action("changeName", this.doChangename, this.undoChangeName);
        this.undoRedoManager.action("hideNode", this.doHide, this.undoHide);
        this.undoRedoManager.action("showAllNodes", this.doShow, this.undoShow);
        // HighlightOthers is the type of highlight from the menu and by searching, while highlightInvalidGenes is for only invalid genes
        this.undoRedoManager.action("highlightInvalidGenes", this.doHighlightInvalidGenes, this.undoHighlightInvalidGenes);
        this.undoRedoManager.action("removeHighlightInvalidGenes", this.undoHighlightInvalidGenes, this.doHighlightInvalidGenes);
        this.undoRedoManager.action("highlightOthers", this.doHighlight, this.undoHighlight);
        this.undoRedoManager.action("removeOtherHighlight", this.undoHighlight, this.doHighlight);

    };

    handleChangePositionByAlignment(movedNodeArr: any)
    {
        if (this.isCollaborative)
            this.shareDBManager.changeElementsPositionByAlignment(movedNodeArr);
        else
            this.undoRedoManager.do("changePositions", movedNodeArr)
    };

    /*
     * Undo redo for changing positions of nodes via programatically (node.position)
     * **/
    doChangePosition(movedNodes: any)
    {
        const newMovedNodes = [];

        for(let i = 0; i < movedNodes.length; i++)
        {
            const currentNodePosition =
                {
                    x: movedNodes[i].node.position().x,
                    y: movedNodes[i].node.position().y
                };
            newMovedNodes.push({node: movedNodes[i].node, oldPosition: currentNodePosition, nextPosition: movedNodes[i].nextPosition});
            movedNodes[i].node.position(movedNodes[i].nextPosition);
        }

        return newMovedNodes;
    };

    undoChangePosition(movedNodes: any)
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

    changeNodePositionsByArrows(selectedNodes: any)
    {
        if (this.isCollaborative)
            this.shareDBManager.changeNodePositionsShareDB(selectedNodes);
        //resize-node extension already deals for the movement in local mode
    };

    /*
     * Undo redo for changing size of nodes
     * **/
    doChangeNodeSize (args: any)
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

    changeName(ele: any, newName: any)
    {
        if (this.isCollaborative)
        {
            this.shareDBManager.changeName(ele, newName);
        }
        else
        {
            this.changeNameCy(ele, newName);
        }
    };

    changeNameCy(ele: any, newName: any)
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
        sel.parent().each((parent: any) =>
        {
            b=true;
            parent.children().each(function(ch: any)
                {
                    if (!ch.selected())
                    {
                        if (ch.visible()) b=false;
                    }
                }
            );
            if (b) nodesToHide = nodesToHide.add(parent);
        });
        this.cy.elements(":selected").unselect();
        if (this.isCollaborative)
            this.shareDBManager.changeVisibility(nodesToHide, true);
        else
            this.undoRedoManager.do('hideNode', nodesToHide);
    };

    /*
     * Undo redo for hiding nodes
     * **/
    doHide(args: any)
    {
        args.hide();
        return args;
    };

    undoHide(args: any)
    {
        args.show();
        return args;
    };

    showAllNodes()
    {
        var hid = this.cy.nodes(":hidden");
        if (this.isCollaborative)
            this.shareDBManager.changeVisibility(hid, false);
        else
            this.undoRedoManager.do('showAllNodes', hid);
    };

    /*
     * Undo redo for showing all nodes
     * **/
    doShow(args: any)
    {
        args.show();
        return args;
    };

    undoShow(args: any)
    {
        args.hide();
        return args;
    };

    highlightElementsInitially(invalidHighlightedGenesIDs: string[], invalidGenesIDs: string[],
                               highlightedGenesIDs: string[], highlightedEdgesIDs: string[], hiddenGenesIDs: string[])
    {
        for (var i in invalidHighlightedGenesIDs)
        {
            this.cy.$('#'+invalidHighlightedGenesIDs[i]).addClass('invalidGeneHighlight');
        }
        for (var i in invalidGenesIDs)
        {
            this.cy.$('#'+invalidGenesIDs[i]).addClass('invalidGene');
        }
        for (var i in highlightedGenesIDs)
        {
            this.cy.$('#'+highlightedGenesIDs[i]).addClass('highlightedNode');
        }
        for (var i in highlightedEdgesIDs)
        {
            this.cy.$('#'+highlightedEdgesIDs[i]).addClass('highlightedEdge');
        }
        for (var i in hiddenGenesIDs)
        {
            this.cy.$('#'+hiddenGenesIDs[i]).hide();
        }
    };

    validateGenes()
    {
        var geneSymbols = this.getGeneSymbols();
        this.portalAccessor.validateGenes(geneSymbols, this);
    }

    //Get all gene symbols
    getGeneSymbols()
    {
        var geneSymbols: any[] = [];
        this.cy.nodes().forEach( function (gene: any)
        {
            if(gene.data().type === "GENE")
                geneSymbols.push(gene.data().name);
        });
        return geneSymbols;
    }


    highlightInvalidGenes(validGeneSymbols: any)
    {
        if (this.isCollaborative)
        {
            var invalidGenes: any[] = [];
            this.cy.nodes().forEach( function (gene: any)
            {
                if(gene.data().type === "GENE")
                {
                    var geneName = gene.data().name;
                    if(validGeneSymbols.indexOf(geneName) < 0)
                        invalidGenes.push(gene.id());
                }
            });
            this.shareDBManager.changeHighlightInvalidGenes(invalidGenes, true);
            // TODO: Amendment by Ziya
            /*
            if (invalidGenes.length > 0)
                this.notificationManager.createNotification("Invalid genes are highlighted","fail");
            else
                this.notificationManager.createNotification("All gene symbols are valid","success");*/
        }
        else
        {
            var highlightedGenes = this.cy.collection();
            this.cy.nodes().forEach( function (gene: any)
            {
                if(gene.data().type === "GENE")
                {
                    var geneName = gene.data().name;
                    if(validGeneSymbols.indexOf(geneName) < 0)
                        highlightedGenes = highlightedGenes.add(gene);
                }
            });
            // TODO: Amendment by Ziya
            /*
                        if (highlightedGenes.size() > 0)
                            this.notificationManager.createNotification("Invalid genes are highlighted","fail");
                        else
                            this.notificationManager.createNotification("All gene symbols are valid","success");*/

            var nodesToAddInvalidHighlight = this.cy.collection();
            highlightedGenes.forEach(function(ele: any){
                if (!ele.hasClass('invalidGeneHighlight') &&  !ele.hasClass('invalidGene'))
                    nodesToAddInvalidHighlight = nodesToAddInvalidHighlight.union(ele);
            });
            this.undoRedoManager.do('highlightInvalidGenes', nodesToAddInvalidHighlight);
        }
    }

    removeInvalidGeneHighlights(actions: any[])
    {
        if (this.isCollaborative)
        {
            var geneIDs: any[] = [];
            this.cy.nodes().forEach( function (gene: any)
            {
                if(gene.data().type === "GENE")
                {
                    if(gene.hasClass('invalidGeneHighlight') || gene.hasClass('invalidGene'))
                        geneIDs.push(gene.id());
                }
            });
            this.shareDBManager.changeHighlightInvalidGenes(geneIDs, false);
        }
        else
        {
            var nodesToRemoveInvalidHighlight = this.cy.collection();
            this.cy.nodes().forEach(function(ele: any){
                if (ele.hasClass('invalidGeneHighlight') ||  ele.hasClass('invalidGene'))
                    nodesToRemoveInvalidHighlight = nodesToRemoveInvalidHighlight.union(ele);
            });
            actions.push({name: "removeHighlightInvalidGenes", param: nodesToRemoveInvalidHighlight});
            // this.undoRedoManager.do('removeHighlightInvalidGenes', nodesToRemoveInvalidHighlight);
        }
    }

    doHighlightInvalidGenes(args: any)
    {
        args.each(function(n: any)
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

    undoHighlightInvalidGenes(args: any)
    {
        args.each(function(n: any)
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

    highlightSelected()
    {
        var sel = this.cy.elements(":selected");
        sel.unselect();
        var elementsToHighlight = this.cy.collection();
        sel.forEach(function(ele: any){
            if (!ele.hasClass('invalidGeneHighlight') &&  !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge'))
                elementsToHighlight = elementsToHighlight.union(ele);
        });
        if (this.isCollaborative)
            this.shareDBManager.changeHighlight(elementsToHighlight, true);
        else
            this.undoRedoManager.do('highlightOthers', elementsToHighlight);
    };

    highlightNeighbors()
    {
        var sel = this.cy.elements(":selected");
        var neighbors = sel.neighborhood();
        neighbors = neighbors.union(sel);
        neighbors.unselect();
        var elementsToHighlight = this.cy.collection();
        neighbors.forEach(function(ele: any){
            if (!ele.hasClass('invalidGeneHighlight') &&  !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge'))
                elementsToHighlight = elementsToHighlight.union(ele);
        });
        if (this.isCollaborative)
            this.shareDBManager.changeHighlight(elementsToHighlight, true);
        else
            this.undoRedoManager.do('highlightOthers', elementsToHighlight);
    };

    highlightBySearch(args: any[])
    {
        if (this.isCollaborative)
            this.shareDBManager.changeHighlight(args, true);
        else
            this.undoRedoManager.do('highlightOthers', args);
    };

    removeOtherHighlight(actions: any[])
    {
        var nodesToRemoveHighlight = this.cy.collection();
        //TODO cytoscape selectors may provide more handy functionality instead of iterating over !
        this.cy.elements().forEach(function(ele: any){
            if (ele.hasClass('highlightedNode') || ele.hasClass('highlightedEdge') || ele.hasClass('invalidGeneHighlight'))
                nodesToRemoveHighlight = nodesToRemoveHighlight.add(ele);
        });

        if (this.isCollaborative)
            this.shareDBManager.changeHighlight(nodesToRemoveHighlight, false);
        else
            actions.push({name: "removeOtherHighlight", param: nodesToRemoveHighlight});
        // this.undoRedoManager.do('removeOtherHighlight', nodesToRemoveHighlight);
    };

    /*
     * Undo redo for highlighting of nodes
     * **/
    doHighlight(args: any)
    {
        args.each(function(n: any)
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

    undoHighlight(args: any)
    {
        args.each(function(n: any)
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

    removeAllHighlight()
    {
        let actions: any[] = [];
        this.removeInvalidGeneHighlights(actions);
        this.removeOtherHighlight(actions);
        this.cy.undoRedo().do("batch", actions);
    };

    postLayout()
    {
        if (this.isCollaborative)
        {
            //Previously this.cy.nodes() was sent as an argument in moveElements function but it caused a problem when
            // the compound node was moved before the child nodes
            var movedNodes = this.cy.collection();
            var parentNodes = this.cy.collection();
            this.cy.nodes().forEach(function(node: any)
            {
                if (!node.isParent())
                    movedNodes = movedNodes.add(node);
                else
                    parentNodes = parentNodes.add(node);
            });
            this.moveElements(movedNodes);
            this.moveElements(parentNodes);

            var newState = {
                zoomLevel: this.cy.zoom(),
                panLevel: this.cy.pan()
            };
            this.updateGlobalOptions(newState);
        }
    };

    /*
    * Gets the first empty index from the list in cloud model
    * **/
    getEmptyGroupID()
    {
        if(this.isCollaborative)
            return this.shareDBManager.getEmptyGroupID();
        else
            return this.genomicDataOverlayManager.getEmptyGroupID();
    };

    /*
     * Gets the first empty index from the list in cloud model
     * **/
    groupGenomicData(cancerNames: any[], groupID: string)
    {
        return this.shareDBManager.groupGenomicData(cancerNames, groupID);
    };

    addPubmedIDs(edge: any, pubmedIDs: number[])
    {
        if (this.isCollaborative)
        {
            console.log(edge, pubmedIDs);
            this.shareDBManager.addPubmedIDs(edge.id(), pubmedIDs);
        }
        else
        {
            var pubmedArray = edge.data('pubmedIDs');
            var validPubmedIDs = _.filter(pubmedIDs, function(id: number){
                return !isNaN(id);
            });
            pubmedArray.push.apply(pubmedArray,validPubmedIDs);
            edge.data('pubmedIDs', _.uniq(pubmedArray));
        }
    }

    removePubmedID(edge: any, pubmedIDs: number[])
    {
        if (this.isCollaborative)
        {
            this.shareDBManager.removePubmedID(edge.id(), pubmedIDs);
        }
        else
        {
            var pubmedArray = edge.data('pubmedIDs');
            edge.data('pubmedIDs', _.difference(pubmedArray, pubmedIDs));
        }
    }

    updateEdgeBendPoints(edge: any)
    {
        if (this.isCollaborative)
        {
            var numberOfBendPoints = 0;
            if (this.edgeEditing.getSegmentPoints(edge) !== undefined)
                numberOfBendPoints = this.edgeEditing.getSegmentPoints(edge).length/2;
            var bendPointsArray = [];
            for (var j = 0; j < numberOfBendPoints; j++)
            {
                bendPointsArray.push(
                    {
                        x: this.edgeEditing.getSegmentPoints(edge)[2*j],
                        y: this.edgeEditing.getSegmentPoints(edge)[2*j+1]
                    }
                );
            }
            // edge.data("bendPointPositions", bendPointsArray);
            // edgeEditing.initBendPoints(edge);
            
            this.shareDBManager.updateEdgeBendPoints(edge.id(), bendPointsArray);
        }
    }

    //Related to order the nodes according to the selection of user
    pushSelectedNodeStack(ele: any)
    {
        this.selectedNodeStack[ele.id()] = ele;
    }

    removeElementFromSelectedNodeStack(ele: any)
    {
        var nodeID = ele.id();
        if (nodeID in this.selectedNodeStack)
            delete this.selectedNodeStack[ele.id()];
    }

    clearSelectedNodeStack()
    {
        this.selectedNodeStack = {};
    }

    exportSVG()
    {
        return this.svgExporter.exportGraph(this.cy.nodes(), this.cy.edges());
    }

    //Simple observer-observable pattern for views!!!!!
    registerObserver(observer: any)
    {
        this.observers.push(observer);
    };

    notifyObservers()
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
        if(this.isCollaborative)
        {
            //TODO compound OP
            // this.shareDBManager.clearGenomicVisData();
            this.shareDBManager.addGenomicVisibilityData(dataMap);
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

    updateGlobalOptions(newOptions: any)
    {
        if(this.isCollaborative)
            this.shareDBManager.updateGlobalOptions(newOptions);
    }

    //Layout properties related functions
    saveLayoutProperties(newLayoutProps: any)
    {
        if(this.isCollaborative)
        {
            // Call a real time function that updated real time object and
            // its callback (updateLayoutPropertiesCallback) will handle sync of this object
            // across collaborators
            this.shareDBManager.updateLayoutProperties(newLayoutProps);
        }
        else
        {
            this.layoutProperties = _.clone(newLayoutProps);
        }
    };

    updateLayoutPropertiesCallback(op: any)
    {
        var newLayoutProps = op.li;
        this.layoutProperties = _.clone(newLayoutProps);
        LayoutProperties.layoutProperties = _.clone(this.layoutProperties);
        //Notify observers to reflect changes on colalborative object to the views
        this.notifyObservers();
    };

    performLayout()
    {
        this.undoRedoManager.do("layout", {options: this.layoutProperties, eles: null, zoom: this.cy.zoom(), pan: this.cy.pan()});
    };

    //Node Related Functions
    addNode(nodeData: any, posData: any)
    {
        if (this.isCollaborative)
        {
            console.log("Add node to DB");
            this.addNewNodeToShareDB(nodeData, posData);
        }
        else
        {
            this.addNodetoCy(nodeData,posData);
        }
    };

    addNodes(nodes: any[])
    {
        for (var i in nodes)
        {
            this.addNode(nodes[i].data, nodes[i].position);
        }
    };

    addNodesCy(nodes: any[])
    {
      console.log("From EAM/addNodesCy");
      console.log(nodes);
        var nodeArr: any[] = [];
        for (var i in nodes)
        {
            var nodeData = nodes[i].data;
            var posData = nodes[i].position;

            var newNode =
                {
                    group: "nodes",
                    data: nodeData,
                    position: {}
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

    addNodetoCy(nodeData: any, posData: any)
    {
        var newNode =
            {
                group: "nodes",
                data: nodeData,
                position: {}
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

        //his.cy.add(newNode);
        this.cy.nodes().updateCompoundBounds();
        this.undoRedoManager.do("add", newNode);
        //Width was not properly updated only by changing data property
        var thatEle = this.cy.getElementById(nodeData.id);
        thatEle.style('width', thatEle.data('w'));
    };

    shareDBNodeAddRemoveEventCallBack(op: any)
    {
        console.log("shareDBNodeAddRemoveEventCallBack");
        console.log(op);
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
            // TODO: Amendment by Ziya
            this.addNodetoCy(nodeData, null);
        }

        this.cy.nodes().updateCompoundBounds();
    };

    addNewNodeToShareDB(nodeData: any, posData: any)
    {
        this.shareDBManager.addNewNode(nodeData,posData);
    };

    //Edge related functions
    addEdge(edgeData: any)
    {
        if (this.isCollaborative)
        {
            this.addNewEdgeShareDB(edgeData);
        }
        else
        {
            this.addNewEdgetoCy(edgeData);
        }
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
        const newEdges = [];


        for (var i in edges)
        {
            const newEdge =
                {
                    group: "edges",
                    data: edges[i].data
                };
            newEdges.push(newEdge);
        }
        console.log("From addEdgesCy");
        this.cy.add(newEdges);
    };

    addNewEdgeShareDB(edgeData: any)
    {
        this.shareDBManager.addNewEdge(edgeData);
    };

    addNewEdgetoCy(edgeData: any)
    {
        var newEdge =
            {
                group: "edges",
                data: edgeData
            };
        this.undoRedoManager.do("add", newEdge);
    };

    shareDBEdgeAddRemoveEventCallBack(op: any)
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

    addNewElementsLocally(realTimeNodeArray: any[], realTimeEdgeArray: any[])
    {
        const nodeList: any[] = [];
        const nodeMap: any = {};

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

            const nodeData =
                {
                    group: 'nodes',
                    // TODO: Amendment by Ziya
                    position: {},
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

        this.edgeEditing.initBendPoints(this.cy.edges());

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
        this.edgeEditing.initBendPoints(this.cy.getElementById( edge.id ));
    };

    reconnectEdge(sourceID: string, targetID: string, edgeData: any) {

        if(this.isCollaborative){
            var edge = this.cy.getElementById(edgeData.id);
            this.reconnectEdgeInShareDB(sourceID, targetID, edgeData);
        }
        else{
            var location = {
                source: sourceID,
                target: targetID
            };

            var edge = this.cy.getElementById(edgeData.id);
            edge.move(location);
        }

        return this.cy.getElementById(edgeData.id);
    };

    reconnectEdgeInShareDB(sourceID: string, targetID: string, edgeData: any) {
        this.shareDBManager.reconnectEdge(sourceID, targetID, edgeData);
    };

    //Removal functions
    removeElement(ele: any)
    {
        if (this.isCollaborative)
        {
            this.removeElementsFromShareDB(ele);
        }
        else
        {
            this.removeElementsCy(ele);
        }
    };

    removeElementCy(ele: any)
    {
        this.undoRedoManager.do("remove", ele);
    };

    removeElementsCy(ele: any)
    {
        this.undoRedoManager.do("remove", ele);
    };

    removeElementsFromShareDB(eles: any[])
    {
        var self = this;
        eles.forEach(function (ele)
        {
            self.shareDBManager.removeElement(ele.id());
        });
    };

    removeElementFromShareDB(ele: any)
    {
        this.shareDBManager.removeElement(ele.id());
    };

    changeParents(eles: any[], newParentId: string)
    {
        if(this.isCollaborative)
        {
            this.changeParentShareDB(eles, newParentId);
        }
        else
        {
            var parentData = newParentId ? newParentId : null;

            // Old manual way to change parents in local mode
            //this.changeParentCy(eles, newParentId);

            //Save element's previous width & height in dim array
            const dim : any[]= [];
            const id : any[]= [];
            eles.forEach(function (ele: any)
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

            console.log(parentData);
            const parentElem = this.cy.getElementById(parentData);
            var param = {
                firstTime: true,
                parentData: parentData, // It keeps the newParentId (Just an id for each nodes for the first time)
                nodes: eles,
                posDiffX: (!parentData) ? 0 : parentElem.position('x') - eles[0].position('x'),
                posDiffY: (!parentData) ? 0 : parentElem.position('y') - eles[0].position('y')
            };
            this.undoRedoManager.do('changeParent', param);
            console.log(this.undoRedoManager.getUndoStack());

            //The elements after change parent operation are different so we find them by using the saved ids
            // and add them to the collection
            var collection = this.cy.collection();
            for (var i in id)
            {
                var elementById = this.cy.getElementById(id[i]);
                collection = collection.add(elementById);
            }
            console.log(collection);
            //Set their previous size to the new elements in the collection
            collection.forEach(function (ele: any, i: number)
            {
                if (ele.id() == dim[i].id)
                    ele.style("width", dim[i].width);
                ele.style("height", dim[i].height);
            });
        }
    };

    changeParentShareDB (eles: any, newParentId: string)
    {

        var classRef = this;
        function getTopLevelParents(eles: any[])
        {
            var tpMostNodes = classRef.cy.collection();
            const parentMap : any = {};

            //Get all parents
            eles.forEach(function (node)
            {
                if(node.isParent())
                    parentMap[node.id()] = node;
            });

            //Get all parents
            eles.forEach(function (node)
            {
                var nodeParent = node.parent();

                if(parentMap[nodeParent.id()] === undefined)
                    tpMostNodes = tpMostNodes.union(node);
            });

            return tpMostNodes;
        }


        class NodeObj{
          public nodeRef: any;
          public children: any;
          constructor(nodeObj: any){
            this.nodeRef = nodeObj;
            this.children = [];
          }
        }
        var connectedEdges = eles.connectedEdges();
        // Traverses given elements and constructs subgraph relations
        // creates a nested structure into rootnodeObj
        function traverseNodes(eles: any[], rootNodeObj: any)
        {
            eles.forEach(function (ele)
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
        this.shareDBManager.changeParent(rootNodeR, newParentId, connectedEdges);
    };

    changeParentCy(eles: any[], newParentId: string)
    {
        let lockedNodes: any = {};
        const self = this;

        function removeNodes(nodes: any)
        {
            //Get removed edges first
            let removedEles = nodes.connectedEdges().remove();
            const children = nodes.children();

            if (children != null && children.length > 0)
            {
                children.forEach(function(childNode: any)
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
        this.undoRedoManager.do("add", removedEles);
        self.cy.nodes().updateCompoundBounds();
    };

    moveElements(eles: any[])
    {
        var classRef = this;
        //Sync movement to real time api
        if(this.isCollaborative)
        {
            eles.forEach(function (ele: any)
            {
                classRef.shareDBManager.moveElement(ele);
            });
        }
    };

    resizeElements(ele: any)
    {
        if(this.isCollaborative) {
            if (!ele.isParent()) {
                var previousWidth = ele.width();
                var previousHeight = ele.height();
                //Sync movement to real time api
                this.shareDBManager.resizeElement(ele, previousWidth, previousHeight);
            }
            else {
                var minWidth = ele.style('min-width');
                var minWidthBiasLeft = ele.style('min-width-bias-left');
                var minWidthBiasRight = ele.style('min-width-bias-right');
                var minHeight = ele.style('min-height');
                var minHeightBiasTop = ele.style('min-height-bias-top');
                var minHeightBiasBottom = ele.style('min-height-bias-bottom');

                //Sync movement to real time api
                this.shareDBManager.resizeCompound(ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom);
            }
        }
    };

    mergeGraph(nodes: any[], edges: any[])
    {
        if (this.isCollaborative)
        {
            //Collaborative usage
            this.shareDBManager.mergeGraph(nodes,edges);
        }
        else
        {
            //Local usage file load
            this.mergeGraphCy(nodes,edges);
        }
        this.fitGraph();
    };

    mergeGraphCy(nodes: any[], edges: any[])
    {
        //Define arrays and maps
        const nodesToBeAdded = [];
        const edgesToBeAdded = [];
        const nodeMap : any= {};

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

            var edgesBtw = this.cy.filter('edge[source = "'+cySourceNode.id()+'"][target = "'+targetNode.id()+'"]');

            //We assume there could be one edge between source and target node with same type
            var isFound = false;
            edgesBtw.forEach(function(edge: any)
            {
                if (edge.data().type == ele.data.type)
                {
                    isFound = true;
                    return false;
                }
                //TODO: AMENDMENT by Ziya
                return true;
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
        if(this.isCollaborative)
        {
            this.cy.fit(this.FIT_CONSTANT);
            var newState =
                {
                    zoomLevel: this.cy.zoom(),
                    panLevel: this.cy.pan()
                };
            this.updateGlobalOptions(newState);
        }
        else
        {
            this.cy.fit(this.FIT_CONSTANT);
        }
    }

    loadFile(nodes: any[], edges: any[])
    {
        if (this.isCollaborative)
        {
            //Real time load graph
            console.log("Real time load graph");
            this.loadfileShareDB(nodes, edges);
        }
        else
        {
            //Local usage file load
            this.loadFileCy(nodes,edges);
        }
        this.cy.edgeEditing('get').initBendPoints(this.cy.edges());
        this.fitGraph();
    };

    loadFileCy(nodes: any[], edges: any[])
    {
        //Remove all elements
        this.removeElementCy(this.cy.elements());

        this.addNodesCy(nodes);
        this.addEdgesCy(edges);
    };

    loadfileShareDB(nodes: any[], edges: any[])
    {
        this.shareDBManager.loadGraph(nodes,edges);
    };

    removeAllElements()
    {
        if (this.isCollaborative)
        {
            this.shareDBManager.removeAllElements();
        }
        else
        {
            this.cy.remove(this.cy.elements());
        }
    };

    updateHighlight(ele: any, isHighlighted: boolean)
    {
        if (isHighlighted)
            this.undoRedoManager.do('highlightOthers', ele);
        else
            this.undoRedoManager.do('removeOtherHighlight', ele);
    };


    updateVisibility(ele: any, isHidden: boolean)
    {
        if (isHidden)
            ele.hide();
        else
            ele.show();
    };

    updateElementCallback(op: any)
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
                this.doHighlightInvalidGenes(cyEle);
            }
            else
            {
                this.undoHighlightInvalidGenes(cyEle);
            }
            //Refresh grapples when the node being changed from another collaborator is selected in current window
            // this.cy.nodeResize('get').refreshGrapples();
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
                    this.edgeEditing.deleteSelectedBendPoint(cyEle,0);
                this.edgeEditing.initBendPoints(cyEle);
            }
        }
    };

    getGenomicDataSVG(node: any)
    {
      // @ts-ignore
        return this.genomicDataOverlayManager.generateSVGForNode(node);
    }

    removeGenomicData()
    {
        if(this.isCollaborative)
        {
            this.shareDBManager.clearGenomicData();
        }
        else
        {
            // TODO wrap this in afunction in genomic data overlay manager
            this.genomicDataOverlayManager.clearAllGenomicData();
            this.genomicDataOverlayManager.hideGenomicData();
            this.genomicDataOverlayManager.notifyObservers();
        }

    }

    addGenomicData(genomicData: any)
    {
        const groupID = this.getEmptyGroupID();
        
        console.log("genomicData");
        console.log(genomicData);


        if(this.isCollaborative)
        {
            var parsedGenomicData = this.genomicDataOverlayManager.prepareGenomicDataShareDB(genomicData);
            this.shareDBManager.addGenomicData(parsedGenomicData.genomicDataMap);
            this.shareDBManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap),
                groupID);
            this.shareDBManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);
        }
        else
        {
            this.genomicDataOverlayManager.addGenomicDataLocally(genomicData, groupID);
        }
    }

    adjustVisibilityShareDB(profileId: string, isEnabled: boolean){
        const targetProfileIndex = this.profiles.map(profile => profile.profileId).indexOf(profileId);
        this.profiles[targetProfileIndex].enabled = isEnabled;   
    }

    addToProfiles(profileId: string){
        // Check if this profile already exists
        if(this.profiles.map(profile => profile.profileId).includes(profileId)){
            return;
        }

        this.profiles.push({profileId: profileId, enabled: true});
    }

    addPortalGenomicData(genomicData: any, groupID: any)
    {
        
        if(this.isCollaborative)
        {
            var parsedGenomicData = this.genomicDataOverlayManager.preparePortalGenomicDataShareDB(genomicData);
            this.shareDBManager.addGenomicData(parsedGenomicData.genomicDataMap);
            this.shareDBManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap),
                groupID);
            this.shareDBManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);
        }
        else
        {
            this.genomicDataOverlayManager.addPortalGenomicData(genomicData, groupID);
        }
    }

    shareDBGenomicDataHandler(op: any)
    {
        var isRemove = Object.keys(op)[1] === 'od';
        var newData = op.oi;
        var geneSymbol = op.p[1];


        if(!isRemove)
        {
            this.genomicDataOverlayManager.addGenomicDataWithGeneSymbol(geneSymbol, newData);

        }
        // Removal
        else
        {
            this.genomicDataOverlayManager.removeGenomicDataWithGeneSymbol(geneSymbol);
        }
    }


    shareDBGenomicDataGroupChangeHandler(op: any)
    {

        var isRemove = Object.keys(op)[1] === 'od';
        var data = op.oi;
        var key = op.p[1];

        // Addition
        if(!isRemove)
        {
            this.genomicDataOverlayManager.addGenomicGroupData(key, data);
            console.log("key");
            console.log(key);
            console.log(data);
            if(data.length !== 1){
                console.log("Grouped genomic data expected to be of length 1");
            }
            data.forEach((profileId: any) => {this.addToProfiles(profileId)});
        }
        // //Removal
        // else
        // {
        //
        // }
        this.genomicDataOverlayManager.showGenomicData();
        this.genomicDataOverlayManager.notifyObservers();
    }

    shareDBGenomicDataVisibilityHandler(op: any)
    {
        var data = op.oi;
        var key = op.p[1];
        var isRemove = Object.keys(op)[1] === 'od';
        // Addition
        if(!isRemove)
        {
            this.genomicDataOverlayManager.addGenomicVisData(key, data);

            this.adjustVisibilityShareDB(key, data);
        }
        // Removal
        else
        {
            console.log("Removal from vis handler");
            this.genomicDataOverlayManager.removeGenomicVisData();
            this.profiles.length = 0;
        }

        this.genomicDataOverlayManager.showGenomicData();
        this.genomicDataOverlayManager.notifyObservers();
    }

    resizeNodesToContent(nodes: any[])
    {
        if(this.isCollaborative)
        {
            const visibleNumberOfData = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
            const labelWithData = 148 + (visibleNumberOfData-3) * 36;
            const rt = this.shareDBManager;
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
            const ur = this.cy.undoRedo();
            const actions: any[] = [];

            const visibleNumberOfData = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
            const labelWithData = 150 + (visibleNumberOfData-3) * 36;
            nodes.forEach(function( ele: any){
                if (!ele.isParent())
                {
                    let newWidth = 150;
                    let newHeight = 52;
                    if (ele.data('name') != "") {
                        var labelLength = ele.style('label').length * 6 + 24;
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
                    const args = {
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
                    const args = {
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
        this.cy.nodeResize('get').refreshGrapples();
    };



}
