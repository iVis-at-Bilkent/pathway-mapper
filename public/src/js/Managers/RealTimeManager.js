var sharedb = require('sharedb/lib/client');
var socket = new WebSocket('ws://' + window.location.host);
var connection = new sharedb.Connection(socket);

var doc = connection.get('cy', '1');
doc.subscribe();

module.exports = (function () {
    "use strict";

    var RealTimeManager = function (postFileLoadCallback) {
        this.clientId = '122039910543-b7u74aijsqne9iv5rk2tgm3529ped4d0.apps.googleusercontent.com';

        // if (!/^([0-9])$/.test(clientId[0]))
        // {
        //     throw new Error('Invalid Client ID - did you forget to insert your application Client ID?');
        // }

        this.NODEMAP_NAME = 'nodes';
        this.EDGEMAP_NAME = 'edges';
        this.LAYOUT_PROPS_NAME = 'layoutProperties';
        this.GLOBAL_OPTS_NAME = 'globalOptions';
        //For storing genomic data information per gene
        this.GENOMIC_DATA_MAP_NAME = 'genomicDataMap';
        //For storing visibility information of genomic data according to the cancer type
        this.VISIBLE_GENOMIC_DATA_MAP_NAME = 'visibleGenomicDataMapByType';
        this.GENOMIC_DATA_GROUP_NAME = 'genomicDataGroupList';
        this.GENOMIC_DATA_GROUP_COUNT = 'genomicDataGroupCount';

        // Create a new instance of the realtime utility with your client ID.
        this.realtimeUtils = new utils.RealtimeUtils({
            clientId: this.clientId
        });
        this.postFileLoad = postFileLoadCallback;
    };

    RealTimeManager.prototype.authorize = function (callbackFunction, isModal) {
        // Attempt to authorize
        this.realtimeUtils.authorize(function (response) {
            callbackFunction(response);

        }, isModal);
    };

    RealTimeManager.prototype.updateShareDocObject = function (mapName, objectKey, object) {
        doc.submitOp([{p: [mapName, objectKey], od: doc.data[mapName][objectKey], oi: object}], this.realTimeError);
    };

    RealTimeManager.prototype.insertShareDBObject = function (mapName, objectKey, object) {
        doc.submitOp([{p: [mapName, objectKey], oi: object}], this.realTimeError);
    };

    RealTimeManager.prototype.deleteShareDBObject = function (mapName, objectKey) {
        doc.submitOp([{p: [mapName, objectKey], od: doc.data[mapName][objectKey]}], this.realTimeError);
    };

    RealTimeManager.prototype.updateShareDBLayoutProperties = function (object) {
        doc.submitOp([{p: [this.LAYOUT_PROPS_NAME, 0], ld: doc.data[this.LAYOUT_PROPS_NAME][0], li: object}]);
    };

    RealTimeManager.prototype.updateShareDBGlobalOptions = function (object) {
        doc.submitOp([{p: [this.GLOBAL_OPTS_NAME, 0], ld: doc.data[this.GLOBAL_OPTS_NAME][0], li: object}]);
    };

    RealTimeManager.prototype.incrementShareDBGroupCount = function () {
        doc.submitOp([{p: [this.GENOMIC_DATA_GROUP_COUNT], na: 1}]);
    };

    RealTimeManager.prototype.realTimeError = function (err) {
        if (err) {
            console.error(err);
            return;
        }
    };

    RealTimeManager.prototype.initRealTimeAPI = function () {
        // With auth taken care of, load a file, or create one if there
        // is not an id in the URL.
        var id = this.realtimeUtils.getParam('id');

        var self = this;

        var initFileCallback = function () {
            self.onFileInitialize();
        };

        var loadFileCallback = function () {
            self.onFileLoaded();
        };

        //TODO First make the clients sync to each other
        //TODO Add backward MongoDB later

        initFileCallback();
        loadFileCallback();
        /*
        if (id) {
            // Load the document id from the URL
            // this.realtimeUtils.load(id.replace('/', ''), loadFileCallback, initFileCallback);
            // TODO: load from MongoDB

        }
        else {
            // Create a new document, add it to the URL
            this.realtimeUtils.createAppFile('New Graph', function(createResponse)
            {
                var result = createResponse.result;
                window.history.pushState(null, null, '?id=' + result.id);
                self.realtimeUtils.load(result.id, loadFileCallback, initFileCallback);
            });
        }
        */
    };

    // The first time a file is opened, it must be initialized with the
    // document structure.
    RealTimeManager.prototype.onFileInitialize = function () {
        //TODO change the document id to proper id
        if (doc.data.layoutProperties === {}) {
            doc.submitOp([{
                p: ['layoutProperties'],
                oi: window.editorActionsManager.layoutProperties
            }], this.realTimeError);
        }
        if (doc.data.globalOptions === {}) {
            doc.submitOp([{
                p: ['globalOptions'],
                oi: window.editorActionsManager.getGlobalOptions()
            }], this.realTimeError);
        }

        /*var root = model.getRoot();

        var nodeMap = model.createMap();
        var edgeMap = model.createMap();
        //Set initial layout properties here when real time document is created initially
        var layoutProperties = model.create(LayoutPropertiesR, window.editorActionsManager.layoutProperties);
        var globalOptions = model.create(GlobalOptionsR, window.editorActionsManager.getGlobalOptions());
        //Genomic data related maps
        var genomicDataMap = model.createMap();
        var genomicDataVisibilityMap = model.createMap();
        var genomicDataGroupMap = model.createMap();
        var genomicDataGroupCount = model.createString("0");


        root.set(this.NODEMAP_NAME, nodeMap);
        root.set(this.EDGEMAP_NAME, edgeMap);
        root.set(this.LAYOUT_PROPS_NAME, layoutProperties);
        root.set(this.GLOBAL_OPTS_NAME, globalOptions);
        root.set(this.GENOMIC_DATA_MAP_NAME, genomicDataMap);
        root.set(this.VISIBLE_GENOMIC_DATA_MAP_NAME, genomicDataVisibilityMap);
        root.set(this.GENOMIC_DATA_GROUP_NAME, genomicDataGroupMap);
        root.set(this.GENOMIC_DATA_GROUP_COUNT, genomicDataGroupCount);*/

    };

    /*
        After a file has been initialized and loaded, we can access the
        document. We will wire up the data model to the UI.
    */


    RealTimeManager.prototype.onFileLoaded = function () {

        this.syncInitialCloudData();
        this.initCloudEventHandlers();

        this.postFileLoad();
        var self = this;

        $('#undoCollab').on('click', function (e) {
            self.undo();
        });
        $('#redoCollab').on('click', function (e) {
            self.redo();
        });
    };

    RealTimeManager.prototype.undo = function () {
        var model = this.realTimeDoc.getModel();
        model.undo();
    };

    RealTimeManager.prototype.redo = function () {
        var model = this.realTimeDoc.getModel();
        model.redo();
    };

    RealTimeManager.prototype.syncInitialCloudData = function () {
        var nodeMap = doc.data[this.NODEMAP_NAME];
        var edgeMap = doc.data[this.EDGEMAP_NAME];
        var realTimeLayoutProperties = doc.data[this.LAYOUT_PROPS_NAME];
        var globalOptions = doc.data[this.GLOBAL_OPTS_NAME];
        var genomicDataMap = doc.data[this.GENOMIC_DATA_MAP_NAME];
        var visDataMap = doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
        var groupedGenomicDataMap = doc.data[this.GENOMIC_DATA_GROUP_NAME];
        var groupedGenomicDataCount = doc.data[this.GENOMIC_DATA_GROUP_COUNT];

        var nodeMapEntries = nodeMap;
        var edgeMapEntries = edgeMap;

        var invalidGenes = [];
        var highlightedGenes = [];
        var invalidHighlightedGenes = [];
        var hiddenGenes = [];
        for (var i = 0; i < nodeMapEntries.length; i++) {
            var tmpNode = nodeMapEntries[i];
            if (tmpNode.isInvalidGene && tmpNode.isHighlighted) {
                var tmpNodeId = this.getCustomObjId(tmpNode);
                invalidHighlightedGenes.push(tmpNodeId);
            }
            else if (tmpNode.isInvalidGene) {
                var tmpNodeId = this.getCustomObjId(tmpNode);
                invalidGenes.push(tmpNodeId);
            }
            else if (tmpNode.isHighlighted) {
                var tmpNodeId = this.getCustomObjId(tmpNode);
                highlightedGenes.push(tmpNodeId);
            }
            if (tmpNode.isHidden) {
                var tmpNodeId = this.getCustomObjId(tmpNode);
                hiddenGenes.push(tmpNodeId);
            }
        }
        var highlightedEdges = [];
        for (var i = 0; i < edgeMapEntries.length; i++) {
            var tmpEdge = edgeMapEntries[i];
            if (tmpEdge.isHighlighted) {
                var tmpEdgeId = this.getCustomObjId(tmpEdge);
                highlightedEdges.push(tmpEdgeId);
            }
        }

        //TODO Workaround for legacy pathways

        // Workaround for backward compatibility of legacy pathways
        // Addition of pubmed id field on server if legacy collaborative
        // pathways does not have !
        for (var i = 0; i < edgeMapEntries.length; i++) {
            var tmpEdge = edgeMapEntries[i];

            if (tmpEdge.pubmedIDs == undefined || tmpEdge.name == undefined || tmpEdge.bendPoint == undefined) {
                var pubmedIDs = (tmpEdge.pubmedIDs == undefined) ? [] : tmpEdge.pubmedID;
                var edgeLabel = (tmpEdge.name == undefined) ? "" : tmpEdge.name;
                var bendPoint = (tmpEdge.bendPoint == undefined) ? [] : tmpEdge.bendPoint;

                var newEdge =
                    {
                        type: tmpEdge.type,
                        source: tmpEdge.source,
                        target: tmpEdge.target,
                        pubmedID: pubmedIDs,
                        name: edgeLabel,
                        bendPoint: bendPoint
                    };


                var tmpEdgeID = this.getCustomObjId(tmpEdge);
                var newID = this.getCustomObjId(newEdge);

                this.insertShareDBObject(this.EDGEMAP_NAME, tmpEdgeID, edgeMap[tmpEdgeID]);
                this.insertShareDBObject(this.EDGEMAP_NAME, newID, newEdge);

            }

        }

        //TODO replace this part with sharedb counterpart
        /*
        edgeMapEntries = edgeMap.values();

        //Add real time nodes to local graph
        window.editorActionsManager.addNewElementsLocally(nodeMapEntries, edgeMapEntries);
        //Adds different type of highlight to nodes and hides if their property is hidden
        window.editorActionsManager.highlightElementsInitially(invalidHighlightedGenes, invalidGenes, highlightedGenes, highlightedEdges, hiddenGenes);

        //Update layout properties & global options!!
        window.editorActionsManager.updateLayoutPropertiesCallback(realTimeLayoutProperties);
        window.editorActionsManager.changeGlobalOptions(globalOptions);

        //Sync already available genomic data !
        var genomicDataMapKeys = genomicDataMap.keys();
        var visibilityMapKeys = visDataMap.keys();

        if (!groupedGenomicDataMap)
        {
            root.set(this.GENOMIC_DATA_GROUP_NAME, model.createMap());
            groupedGenomicDataMap = root.get(this.GENOMIC_DATA_GROUP_NAME);
            groupedGenomicDataMap.set('0', []);

            for (var key in visibilityMapKeys)
            {
                var currentMap = _.clone(groupedGenomicDataMap.get('0'));
                currentMap.push(visibilityMapKeys[key]);
                groupedGenomicDataMap.set('0', currentMap);
            }
        }

        if (!groupedGenomicDataCount)
        {
            root.set(this.GENOMIC_DATA_GROUP_COUNT, model.createString("0"));
            groupedGenomicDataCount = root.get(this.GENOMIC_DATA_GROUP_COUNT);
        }


        for (var key in genomicDataMapKeys) {
            window.editorActionsManager.genomicDataOverlayManager.genomicDataMap[genomicDataMapKeys[key]] =
                genomicDataMap.get(genomicDataMapKeys[key]);
        }

        for (var key in visibilityMapKeys)
        {
            window.editorActionsManager.genomicDataOverlayManager.visibleGenomicDataMapByType[visibilityMapKeys[key]] =
                visDataMap.get(visibilityMapKeys[key]);
        }

        var groupedGenomicDataKeys = groupedGenomicDataMap.keys();
        for (var key in groupedGenomicDataKeys)
        {
            window.editorActionsManager.genomicDataOverlayManager.groupedGenomicDataMap[groupedGenomicDataKeys[key]] =
                groupedGenomicDataMap.get(groupedGenomicDataKeys[key]);
        }
        //Does not seem necessary for not but just for sake of completeness
        window.editorActionsManager.genomicDataOverlayManager.groupedGenomicDataCount = groupedGenomicDataCount;

        window.editorActionsManager.genomicDataOverlayManager.showGenomicData();
        window.editorActionsManager.genomicDataOverlayManager.notifyObservers();
        cy.fit(50);

        */
    };

    //TODO Add comments
    RealTimeManager.prototype.isRealTimeReplaceEvent = function (op) {
        return op.hasOwnProperty("oi") && op.hasOwnProperty("od");
    };

    RealTimeManager.prototype.initCloudEventHandlers = function () {

        var self = this;

        //Setup event handlers for maps
        var nodeAddRemoveHandler = function (op) {
            window.editorActionsManager.realTimeNodeAddRemoveEventCallBack(op);
        };

        var edgeAddRemoveHandler = function (op) {
            window.editorActionsManager.realTimeEdgeAddRemoveEventCallBack(op);
        };

        var genomicDataAddRemoveHandler = function (op) {
            window.editorActionsManager.realTimeGenomicDataHandler(op);
        };

        var genomicDataVisibilityChangeHandler = function (op) {
            window.editorActionsManager.realTimeGenomicDataVsibilityHandler(op);
        };

        var genomicDataGroupChangeHandler = function (op) {
            window.editorActionsManager.realTimeGenomicDataGroupChangeHandler(op);
        };

        var updateElementHandler = function (op) {
            window.editorActionsManager.updateElementCallback(op);
        }

        var updateLayoutPropsHandler = function (op) {
            window.editorActionsManager.updateLayoutPropertiesCallback(op);
        }

        var updateGlobalOptionsHandler = function (op) {
            window.editorActionsManager.changeGlobalOptions(op);
        }


        //Event listeners for edge and node map
        doc.on('op', function (op, source) {
            console.log(op);
            //TODO Shame
            var path = op[0].p[0];
            var isReplaceEvent = self.isRealTimeReplaceEvent(op[0]);

            if (!isReplaceEvent) {
                if (path === self.NODEMAP_NAME) {
                    nodeAddRemoveHandler(op);
                }
                else if (path === self.EDGEMAP_NAME) {
                    edgeAddRemoveHandler(op);
                }
                else if (path === self.GENOMIC_DATA_MAP_NAME) {
                    genomicDataAddRemoveHandler(op);
                }
                else if (path === self.VISIBLE_GENOMIC_DATA_MAP_NAME) {
                    genomicDataVisibilityChangeHandler(op);
                }
                else if (path === self.GENOMIC_DATA_GROUP_NAME) {
                    genomicDataGroupChangeHandler(op);
                }
            }
            else { //Then it is update event
                if (path === self.NODEMAP_NAME) {
                    updateElementHandler(op);
                }
                else if (path === self.EDGEMAP_NAME) {
                    updateElementHandler(op);
                }
                else if (path === self.LAYOUT_PROPS_NAME) {
                    updateLayoutPropsHandler(op);
                }
                else if (path === self.GLOBAL_OPTS_NAME) {
                    updateGlobalOptionsHandler(op);
                }
            }

        });
    };


    /*
     * Gets the first empty index from the list in cloud model
     * and increments counter by 1
     * **/
    RealTimeManager.prototype.getEmptyGroupID = function () {
        var count = doc.data[this.GENOMIC_DATA_GROUP_COUNT];
        var returnCount = count;
        this.incrementShareDBGroupCount();
        return returnCount;
    };

    /*
     * Gets the first empty index from the list in cloud model
     * **/
    RealTimeManager.prototype.groupGenomicData = function (cancerNames, inGroupId) {
        var genomicGroupMap = doc.data[this.GENOMIC_DATA_GROUP_NAME];
        var genomicVisMap = doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];

        var groupID = "" + inGroupId;


        var currentGroup = [];

        if (genomicGroupMap.hasOwnProperty(groupID))
            currentGroup = _.clone(genomicGroupMap[groupID]);

        for (var i in cancerNames) {
            if (!genomicVisMap.hasOwnProperty(cancerNames[i]))
                currentGroup.push(cancerNames[i]);
        }

        // If group id already exists change existing object
        if (genomicGroupMap.hasOwnProperty(groupID)) {
            this.updateShareDocObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
        }
        else {
            //Insert new group
            this.insertShareDBObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
        }
        genomicGroupMap.set(groupID, currentGroup);

    };

    RealTimeManager.prototype.clearGenomicData = function () {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var genomicMap = root.get(this.GENOMIC_DATA_MAP_NAME);
        var visMap = root.get(this.VISIBLE_GENOMIC_DATA_MAP_NAME);
        var genomicDataGroupMap = root.get(this.GENOMIC_DATA_GROUP_NAME);
        var genomicDataGroupCount = root.get(this.GENOMIC_DATA_GROUP_COUNT);

        model.beginCompoundOperation();
        genomicMap.clear();
        visMap.clear();
        genomicDataGroupMap.clear();
        genomicDataGroupCount.setText("0");
        model.endCompoundOperation();
    }


    RealTimeManager.prototype.addGenomicData = function (geneData) {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var genomicMap = root.get(this.GENOMIC_DATA_MAP_NAME);

        //Iterate over all genmoic data which is mapped by geneSymbol to list of alteration values
        //that are also mapped by cancer name and associated value
        model.beginCompoundOperation();
        for (var geneSymbol in geneData) {
            var genomicMapEntry = {};
            if (genomicMap.has(geneSymbol))
                genomicMapEntry = _.clone(genomicMap.get(geneSymbol));

            for (var cancerType in geneData[geneSymbol]) {
                if (!(cancerType in genomicMapEntry))
                    genomicMapEntry[cancerType] = parseInt(geneData[geneSymbol][cancerType]).toFixed(2);
            }

            genomicMap.set(geneSymbol, genomicMapEntry);
        }
        model.endCompoundOperation();

    }


    RealTimeManager.prototype.addGenomicVisibilityData = function (visMap) {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var map = root.get(this.VISIBLE_GENOMIC_DATA_MAP_NAME);

        model.beginCompoundOperation();
        for (var cancerStudy in visMap) {
            map.set(cancerStudy, visMap[cancerStudy]);
        }
        model.endCompoundOperation();
    }

    RealTimeManager.prototype.changeVisibility = function (nodesToHide, isHidden) {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap = root.get(this.NODEMAP_NAME);

        nodesToHide.forEach(function (ele, index) {
            var nodeID = ele.id();
            if (nodeMap.has(nodeID)) {
                var realTimeNode = nodeMap.get(nodeID);
                realTimeNode.isHidden = isHidden;
            }
        });
    };

    RealTimeManager.prototype.changeHighlight = function (elementsToHighlight, isHighlighted) {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap = root.get(this.NODEMAP_NAME);
        var edgeMap = root.get(this.EDGEMAP_NAME);

        elementsToHighlight.forEach(function (ele, index) {
            var elementID = ele.id();
            if (nodeMap.has(elementID)) {
                var realTimeNode = nodeMap.get(elementID);
                realTimeNode.isHighlighted = isHighlighted;
            }
            if (edgeMap.has(elementID)) {
                var realTimeEdge = edgeMap.get(elementID);
                realTimeEdge.isHighlighted = isHighlighted;
            }
        });
    };

    RealTimeManager.prototype.addNewNode = function (nodeData, posData) {
        var realTimeGeneratedID = this.getCustomObjId();
        var newNode = {
            name: nodeData.name,
            type: nodeData.type,
            id: realTimeGeneratedID,
            parent: nodeData.parent,
            w: nodeData.w,
            h: nodeData.h,
            minWidth: nodeData.minWidth,
            minWidthBiasLeft: nodeData.minWidthBiasLeft,
            minWidthBiasRight: nodeData.minWidthBiasRight,
            minHeight: nodeData.minHeight,
            minHeightBiasTop: nodeData.minHeightBiasTop,
            minHeightBiasBottom: nodeData.minHeightBiasBottom
        };

        if (posData) {
            newNode.x = posData.x;
            newNode.y = posData.y;
        }
        this.insertShareDBObject(this.NODEMAP_NAME, realTimeGeneratedID, newNode);
    };

    RealTimeManager.prototype.addNewEdge = function (edgeData) {
        var realTimeGeneratedID = this.getCustomObjId();
        var newEdge = {
            type: edgeData.type,
            id: realTimeGeneratedID,
            source: edgeData.source,
            target: edgeData.target,
            pubmedIDs: edgeData.pubmedIDs,
            name: edgeData.name,
            bendPoint: edgeData.bendPoint
        };

        this.insertShareDBObject(this.EDGEMAP_NAME, realTimeGeneratedID, newEdge);
    };

    RealTimeManager.prototype.removeElement = function (elementID) {
        var edgeMap = doc.data[this.EDGEMAP_NAME];
        var nodeMap = doc.data[this.NODEMAP_NAME];

        if (nodeMap.hasOwnProperty(elementID)) {
            this.deleteShareDBObject(this.NODEMAP_NAME, elementID);
        }
        else if (edgeMap.hasOwnProperty(elementID)) {
            this.deleteShareDBObject(this.EDGEMAP_NAME, elementID);
        }
        else {
            throw new Error('Element does not exist in Real Time');

        }
    };

    RealTimeManager.prototype.moveElement = function (ele) {
        var nodeMap = doc.data[this.NODEMAP_NAME];

        var elementID = ele.id();
        var newPos = ele.position();

        if (nodeMap.hasOwnProperty(elementID)) {
            var tmpNode = nodeMap[elementID];
            tmpNode.x = newPos.x;
            tmpNode.y = newPos.y;
            this.updateShareDocObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    //This function is used for movements of all selected elements wrt alignment selected
    RealTimeManager.prototype.changeElementsPositionByAlignment = function (coll) {

        var nodeMap = doc.data[this.NODEMAP_NAME];

        coll.forEach(function (ele) {
            var elementID = ele.node.id();
            if (nodeMap.hasOwnProperty(elementID)) {
                var tmpNode = nodeMap[elementID];
                tmpNode.x = ele.nextPosition.x;
                tmpNode.y = ele.nextPosition.y;
                this.updateShareDocObject(this.NODEMAP_NAME, elementID, tmpNode);
            }
            else {
                throw new Error('Element does not exist in nodes !!! ');
            }
        });
    };

    RealTimeManager.prototype.resizeElement = function (ele, previousWidth, previousHeight) {
        var nodeMap = doc.data[this.NODEMAP_NAME];

        var elementID = ele.id();
        var newWidth = ele.width();
        var newHeight = ele.height();
        var currentX = ele.position('x');
        var currentY = ele.position('y');

        if (nodeMap.hasOwnProperty(elementID)) {
            var tmpNode = nodeMap[elementID];
            tmpNode.x = currentX + newWidth - previousWidth;
            tmpNode.y = currentY + newHeight - previousHeight;
            tmpNode.w = newWidth;
            tmpNode.h = newHeight;
            this.updateShareDocObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    RealTimeManager.prototype.setSizeOfElement = function (ele, newWidth, newHeight) {
        var nodeMap = doc.data[this.NODEMAP_NAME];

        var elementID = ele.id();

        if (nodeMap.hasOwnProperty(elementID)) {
            var tmpNode = nodeMap[elementID];
            tmpNode.w = newWidth;
            tmpNode.h = newHeight;
            this.updateShareDocObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    RealTimeManager.prototype.resizeCompound = function (ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom) {
        var nodeMap = doc.data[this.NODEMAP_NAME];

        var elementID = ele.id();
        var currentX = ele.position('x');
        var currentY = ele.position('y');

        if (nodeMap.hasOwnProperty(elementID)) {
            var tmpNode = nodeMap[elementID];
            tmpNode.x = currentX;
            tmpNode.y = currentY;
            tmpNode.minWidth = minWidth;
            tmpNode.minWidthBiasLeft = minWidthBiasLeft;
            tmpNode.minWidthBiasRight = minWidthBiasRight;
            tmpNode.minHeight = minHeight;
            tmpNode.minHeightBiasTop = minHeightBiasTop;
            tmpNode.minHeightBiasBottom = minHeightBiasBottom;
            this.updateShareDocObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    RealTimeManager.prototype.changeNodePositionsRealTime = function (nodes) {
        var nodeMap = doc.data[this.NODEMAP_NAME];

        nodes.forEach(function (ele) {
            var nodeID = ele.id();
            if (nodeMap.hasOwnProperty(nodeID)) {
                var realTimeNode = nodeMap[nodeID];
                realTimeNode.x = ele.position('x');
                realTimeNode.y = ele.position('y');
                this.updateShareDocObject(this.NODEMAP_NAME, nodeID, realTimeNode);
            }
            else {
                throw new Error('Element does not exist in nodes !!! ');
            }
        });
    };

    RealTimeManager.prototype.changeHighlightInvalidGenes = function (nodeIDs, isInvalid) {
        var nodeMap = doc.data[this.NODEMAP_NAME];

        //TODO check compound operation inside or outside of for ?
        for (var i in nodeIDs) {
            var nodeID = nodeIDs[i];
            if (nodeMap.hasOwnProperty(nodeID)) {
                var collaborativeNode = nodeMap[nodeID];
                collaborativeNode.isInvalidGene = isInvalid;
                this.updateShareDocObject(this.NODEMAP_NAME, nodeID, collaborativeNode);
            }
        }

    }

    RealTimeManager.prototype.addPubmedIDs = function (edgeID, pubmedIDs) {
        var edgeMap = doc.data[this.EDGEMAP_NAME];

        if (edgeMap.hasOwnProperty(edgeID)) {
            var tmpEdge = edgeMap[edgeID];
            var nonDuplicateArray = [];
            for (var i = 0; i < pubmedIDs.length; i++) {
                if (tmpEdge.pubmedIDs.indexOf(pubmedIDs[i]) < 0) {
                    nonDuplicateArray.push(pubmedIDs[i]);
                }
            }
            tmpEdge.pubmedIDs.pushAll(nonDuplicateArray);
            this.updateShareDocObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
        }
        else {
            throw new Error('Edge does not exist in real time !!! ');
        }
    }

    RealTimeManager.prototype.removePubmedID = function (edgeID, pubmedIDs) {
        var edgeMap = doc.data[this.EDGEMAP_NAME];

        if (edgeMap.hasOwnProperty(edgeID)) {
            var tmpEdge = edgeMap[edgeID];
            var removedIndices = [];
            for (var i = 0; i < pubmedIDs.length; i++) {
                var tmpID = pubmedIDs[i];
                var index = tmpEdge.pubmedIDs.indexOf(tmpID);
                if (index >= 0) {
                    removedIndices.push(index);
                }
            }
            for (var i = 0; i < removedIndices.length; i++) {
                tmpEdge.pubmedIDs.remove(removedIndices[i]);
            }
            this.updateShareDocObject(this.EDGEMAP_NAME, edgeID, tmpEdge);

        }
        else {
            throw new Error('Edge does not exist in real time !!! ');
        }
    }

    RealTimeManager.prototype.updateEdgeBendPoints = function (edgeID, bendPointsArray) {

        var edgeMap = doc.data[this.EDGEMAP_NAME];

        if (edgeMap.hasOwnProperty(edgeID)) {
            var tmpEdge = edgeMap[edgeID];
            console.log(tmpEdge);

            tmpEdge.bendPoint.clear();
            tmpEdge.bendPoint.pushAll(bendPointsArray);

            this.updateShareDocObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
        }
        else {
            throw new Error('Edge does not exist in real time !!! ');
        }
    }

    RealTimeManager.prototype.changeName = function (ele, newName) {
        var nodeMap = doc.data[this.NODEMAP_NAME];
        var edgeMap = doc.data[this.EDGEMAP_NAME];

        var elementID = ele.id();

        if (ele.isNode()) {
            if (nodeMap.hasOwnProperty(elementID)) {
                var tmpNode = nodeMap[elementID];
                tmpNode.name = newName;
                this.updateShareDocObject(this.NODEMAP_NAME, elementID, tmpNode);
            }
            else {
                throw new Error('Element does not exist in nodes !!! ');
            }
        }
        else {
            if (edgeMap.hasOwnProperty(elementID)) {
                var tmpEdge = edgeMap[elementID];
                tmpEdge.name = newName;
                this.updateShareDocObject(this.EDGEMAP_NAME, elementID, tmpEdge);
            }
            else {
                throw new Error('Element does not exist in edges !!! ');
            }
        }
    };

    RealTimeManager.prototype.changeParent = function (rootNode, newParentId, connectedEdges) {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap = root.get(this.NODEMAP_NAME);

        var nodeLookupTable = {};

        var self = this;

        function traverseFromRoot(rootNode, parId) {
            /*
             remove outermost node,
             create new real time node with given parentId,
             pass id of this real time node to children,
             repeat in a recursive manner
             after that restore the edges that dissapear by removed nodes
             during change parent
             */

            var refNode = rootNode.nodeRef;
            var children = rootNode.children;
            var newParentId = parId;

            if (refNode) {
                var refNodeId = refNode.id();
                var nodeData = refNode.data();
                var posData = refNode.position();
                var currentWidth = refNode.data('w');
                var currentHeight = refNode.data('h');

                var newNodeData =
                    {
                        name: nodeData.name,
                        type: nodeData.type,
                        x: posData.x,
                        y: posData.y,
                        w: currentWidth,
                        h: currentHeight
                    };

                if (parId) {
                    newNodeData.parent = parId;
                }

                //TODO compound operations ?
                self.removeElement(refNodeId);
                var newNode = model.create(NodeR, newNodeData);
                var newNodeId = self.getCustomObjId(newNode);
                nodeMap.set(newNodeId, newNode);
                newParentId = newNodeId;
                nodeLookupTable[refNodeId] = newNodeId;
            }

            for (var i in children) {
                var childNode = children[i];
                traverseFromRoot(childNode, newParentId);
            }
        }

        //Begin traversing from given root node
        traverseFromRoot(rootNode, newParentId);

        //Restore edges that dissapear by the change parent operation
        //TODO compound operations ?
        connectedEdges.forEach(function (edge, index) {
            var edgeData = edge.data();
            self.removeElement(edge.id());

            var newSource = nodeLookupTable[edgeData.source];
            var newTarget = nodeLookupTable[edgeData.target];

            if (newSource) {
                edgeData.source = newSource;
            }

            if (newTarget) {
                edgeData.target = newTarget;
            }

            self.addNewEdge(edgeData);
        });
    };

    RealTimeManager.prototype.removeAllElements = function () {
        var nodeMap = doc.data[this.NODEMAP_NAME];
        var edgeMap = doc.data[this.EDGEMAP_NAME];

        //TODO Compound operations
        //Remove all real time nodes
        for (var index in nodeMap) {
            this.removeElement(nodeMap[index]);
        }

        //Remove all real time edges
        for (var index in edgeMap) {
            this.removeElement(edgeMap[index]);
        }

    };

    RealTimeManager.prototype.loadGraph = function (nodes, edges) {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap = root.get(this.NODEMAP_NAME);
        var edgeMap = root.get(this.EDGEMAP_NAME);

        this.removeAllElements();

        //Function that traverses graph tree recursively.
        var that = this;
        var oldIdNewIdMap = {};

        function traverseTree(node, newParentId) {
            node.data.x = node.position.x;
            node.data.y = node.position.y;

            //Update parent !
            if (newParentId) {
                var parent = node.data.parent;
                if (parent) {
                    node.data.parent = newParentId;
                }
            }

            //Create new real time node
            var newNode = model.create(NodeR, node.data);
            var newNodeId = that.getCustomObjId(newNode);
            oldIdNewIdMap[node.data.id] = newNodeId;
            nodeMap.set(newNodeId, newNode);

            //If node has children recursively traverse sub graphs and update parent field of child nodes
            if (node.children.length > 0) {
                for (var i in node.children) {
                    var tmpNode = node.children[i];
                    traverseTree(tmpNode, newNodeId);
                }
            }
        }

        //Create graph hierarchy from given list of flat nodes
        var tree = window.GraphUtilities.createGraphHierarchyRealTime(nodes);
        //Traverse from root nodes of tree
        for (var i in tree) {
            var rootLevelNode = tree[i];
            traverseTree(rootLevelNode);
        }

        /*
          Create real time edges, update the source and target fields, since new ids will be generated for the nodes in
          real time
        */
        for (var i in edges) {
            var edge = edges[i];
            edge.data.source = oldIdNewIdMap[edge.data.source];
            edge.data.target = oldIdNewIdMap[edge.data.target];
            var newEdge = model.create(EdgeR, edge.data);
            var newEdgeID = this.getCustomObjId(newEdge);
            edgeMap.set(newEdgeID, newEdge);
        }
    };

    RealTimeManager.prototype.mergeGraph = function (nodes, edges) {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap = root.get(this.NODEMAP_NAME);
        var edgeMap = root.get(this.EDGEMAP_NAME);

        var realTimeNodeMap = nodeMap.items();
        var realTimeNodeLookupTable = {};
        var realTimeNodeNameLookupTable = {};
        var oldIdNewIdMap = {};
        var that = this;

        //Create lookup table for real time nodes
        //items are stored in an array in the resulting array of nodeMap.items()
        // [0] - id, [1] - object
        for (var i in realTimeNodeMap) {
            var nodeMapItem = realTimeNodeMap[i];
            realTimeNodeLookupTable[nodeMapItem[0]] = nodeMapItem[1];
            realTimeNodeNameLookupTable[nodeMapItem[1].name] = nodeMapItem[1];
        }

        //Recursive traverse definition
        function traverseTree(node, newParentId) {
            //Search by name !
            //We have not found a node that exist in the graph, add normally
            if (!(node.data.name in realTimeNodeNameLookupTable)) {
                node.data.x = node.position.x;
                node.data.y = node.position.y;

                //Update parent !
                if (newParentId) {
                    var parent = node.data.parent;
                    if (parent) {
                        node.data.parent = newParentId;
                    }
                }

                //Create new real time node
                var newNode = model.create(NodeR, node.data);
                var newNodeId = that.getCustomObjId(newNode);
                oldIdNewIdMap[node.data.id] = newNodeId;
                nodeMap.set(newNodeId, newNode);

                //If node has children recursively traverse sub graphs and update parent field of child nodes
                if (node.children.length > 0) {
                    for (var i in node.children) {
                        var tmpNode = node.children[i];
                        traverseTree(tmpNode, newNodeId);
                    }
                }
            }
            // At this point there exists another node in the graph with the same name as 'node'
            // we need to update parent field of children of this node if any
            else {
                var sameNameNode = realTimeNodeNameLookupTable[node.data.name];
                var sameNodeId = that.getCustomObjId(sameNameNode);
                oldIdNewIdMap[node.data.id] = sameNodeId;

                //If node has children recursively traverse sub graphs and update parent field of child nodes
                if (node.children.length > 0) {
                    for (var i in node.children) {
                        var tmpNode = node.children[i];
                        traverseTree(tmpNode, sameNodeId);
                    }
                }
            }
        }

        //Traverse from root nodes of tree
        var tree = window.GraphUtilities.createGraphHierarchyRealTime(nodes);
        for (var i in tree) {
            var rootLevelNode = tree[i];
            traverseTree(rootLevelNode, rootLevelNode.data.id);
        }

        /*
         Create real time edges, update the source and target fields, since new ids will be generated for the nodes in
         real time
         */
        for (var i in edges) {
            var edge = edges[i];
            edge.data.source = oldIdNewIdMap[edge.data.source];
            edge.data.target = oldIdNewIdMap[edge.data.target];
            var newEdge = model.create(EdgeR, edge.data);
            var newEdgeID = this.getCustomObjId(newEdge);
            edgeMap.set(newEdgeID, newEdge);
        }
    };

    RealTimeManager.prototype.updateLayoutProperties = function (newLayoutProperties) {
        var layoutPropertiesR = doc.data[this.LAYOUT_PROPS_NAME];

        for (var property in newLayoutProperties) {
            if (newLayoutProperties.hasOwnProperty(property)) {
                layoutPropertiesR[property] = newLayoutProperties[property];
            }
        }
        this.updateShareDBLayoutProperties(layoutPropertiesR);
    };

    RealTimeManager.prototype.updateGlobalOptions = function (newOptions) {
        var globalOptions = doc.data[this.GLOBAL_OPTS_NAME];

        for (var property in globalOptions) {
            if (newOptions.hasOwnProperty(property)) {
                globalOptions[property] = newOptions[property];
            }
        }
        this.updateShareDBGlobalOptions(globalOptions);
    };

    //Create unique ID for elements
    RealTimeManager.prototype.getCustomObjId = function () {
        // see http://stackoverflow.com/a/8809472
        // we need to take care of our own IDs because the ones automatically generated by cytoscape (also UUID)
        // don't comply with xsd:SID type that must not begin with a number
        // Public Domain/MIT
        var d = Date.now();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };

    // You must register the custom object before loading or creating any file that
    // uses this custom object.
    RealTimeManager.prototype.registerTypes = function () {
        //TODO does not need 2 functions remove one
        this.createRealTimeObjectDefinitions();
    };

    /*
     * Creates graph hierarchy from given flat list of nodes list, nodes list is assumed to have parent-child
     * relationship by a field 'parent' which represents to the id of the parent node This function is specific
     * for the needs of TCGA Pathway Curation Tool 04/07/2016
     *
     * @param nodes {array}: flat list of nodes of a graph
     * @return {array}: Tree representation in array, entries are root level nodes. node.children gives children nodes
     * of each node in the returned array.
     * a node in corresponding level.
     *
     * */
    RealTimeManager.prototype.createGraphHierarchy = function (nodes) {
        //Some arrays and maps for creating graph hierarchy
        var tree = [];
        var mappedArr = {};

        // First map the nodes of the array to an object -> create a hash table.
        for (var i = 0, len = nodes.length; i < len; i++) {
            var arrElem = nodes[i];
            mappedArr[arrElem.data.id] = arrElem;
            mappedArr[arrElem.data.id].children = [];
        }

        for (var id in mappedArr) {
            var mappedElem = mappedArr[id];

            // If the element is not at the root level, add it to its parent array of children.
            if (mappedElem.data.parent) {
                mappedArr[mappedElem.data.parent].children.push(mappedElem);
            }
            // If the element is at the root level, add it to first level elements array.
            else {
                tree.push(mappedElem);
            }
        }
        return tree;
    };

    RealTimeManager.prototype.createRealTimeObjectDefinitions = function () {
        //Register our custom objects Google Real Time API
        gapi.drive.realtime.custom.registerType(EdgeR, 'EdgeR');
        gapi.drive.realtime.custom.registerType(NodeR, 'NodeR');
        gapi.drive.realtime.custom.registerType(LayoutPropertiesR, 'LayoutPropertiesR');
        gapi.drive.realtime.custom.registerType(GlobalOptionsR, 'GlobalOptionsR');

        gapi.drive.realtime.custom.setInitializer(NodeR, NodeRInitializer);
        gapi.drive.realtime.custom.setInitializer(EdgeR, EdgeRInitializer);
        gapi.drive.realtime.custom.setInitializer(LayoutPropertiesR, LayoutPropertiesRInitializer);
        gapi.drive.realtime.custom.setInitializer(GlobalOptionsR, GlobalOptionsRInitializer);

        // NodeR;
        NodeR.prototype.name = gapi.drive.realtime.custom.collaborativeField('name');
        NodeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
        NodeR.prototype.x = gapi.drive.realtime.custom.collaborativeField('x');
        NodeR.prototype.y = gapi.drive.realtime.custom.collaborativeField('y');
        NodeR.prototype.w = gapi.drive.realtime.custom.collaborativeField('w');
        NodeR.prototype.h = gapi.drive.realtime.custom.collaborativeField('h');
        NodeR.prototype.minWidth = gapi.drive.realtime.custom.collaborativeField('minWidth');
        NodeR.prototype.minWidthBiasLeft = gapi.drive.realtime.custom.collaborativeField('minWidthBiasLeft');
        NodeR.prototype.minWidthBiasRight = gapi.drive.realtime.custom.collaborativeField('minWidthBiasRight');
        NodeR.prototype.minHeight = gapi.drive.realtime.custom.collaborativeField('minHeight');
        NodeR.prototype.minHeightBiasTop = gapi.drive.realtime.custom.collaborativeField('minHeightBiasTop');
        NodeR.prototype.minHeightBiasBottom = gapi.drive.realtime.custom.collaborativeField('minHeightBiasBottom');
        NodeR.prototype.parent = gapi.drive.realtime.custom.collaborativeField('parent');
        NodeR.prototype.isHidden = gapi.drive.realtime.custom.collaborativeField('isHidden');
        NodeR.prototype.isInvalidGene = gapi.drive.realtime.custom.collaborativeField('isInvalidGene');
        NodeR.prototype.isHighlighted = gapi.drive.realtime.custom.collaborativeField('isHighlighted');

        // EdgeR;
        EdgeR.prototype.source = gapi.drive.realtime.custom.collaborativeField('source');
        EdgeR.prototype.target = gapi.drive.realtime.custom.collaborativeField('target');
        EdgeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
        EdgeR.prototype.isHighlighted = gapi.drive.realtime.custom.collaborativeField('isHighlighted');
        EdgeR.prototype.pubmedIDs = gapi.drive.realtime.custom.collaborativeField('pubmedIDs');
        EdgeR.prototype.name = gapi.drive.realtime.custom.collaborativeField('name');
        EdgeR.prototype.bendPoint = gapi.drive.realtime.custom.collaborativeField('bendPoint');

        //LayoutPropertiesR
        LayoutPropertiesR.prototype.name = gapi.drive.realtime.custom.collaborativeField('name');
        LayoutPropertiesR.prototype.nodeRepulsion = gapi.drive.realtime.custom.collaborativeField('nodeRepulsion');
        LayoutPropertiesR.prototype.idealEdgeLength = gapi.drive.realtime.custom.collaborativeField('idealEdgeLength');
        LayoutPropertiesR.prototype.edgeElasticity = gapi.drive.realtime.custom.collaborativeField('edgeElasticity');
        LayoutPropertiesR.prototype.nestingFactor = gapi.drive.realtime.custom.collaborativeField('nestingFactor');
        LayoutPropertiesR.prototype.gravity = gapi.drive.realtime.custom.collaborativeField('gravity');
        LayoutPropertiesR.prototype.numIter = gapi.drive.realtime.custom.collaborativeField('numIter');
        LayoutPropertiesR.prototype.tile = gapi.drive.realtime.custom.collaborativeField('tile');
        LayoutPropertiesR.prototype.animate = gapi.drive.realtime.custom.collaborativeField('animate');
        LayoutPropertiesR.prototype.randomize = gapi.drive.realtime.custom.collaborativeField('randomize');
        LayoutPropertiesR.prototype.gravityRangeCompound = gapi.drive.realtime.custom.collaborativeField('gravityRangeCompound');
        LayoutPropertiesR.prototype.gravityCompound = gapi.drive.realtime.custom.collaborativeField('gravityCompound');
        LayoutPropertiesR.prototype.gravityRange = gapi.drive.realtime.custom.collaborativeField('gravityRange');
        LayoutPropertiesR.prototype.tilingPaddingVertical = gapi.drive.realtime.custom.collaborativeField('tilingPaddingVertical');
        LayoutPropertiesR.prototype.tilingPaddingHorizontal = gapi.drive.realtime.custom.collaborativeField('tilingPaddingHorizontal');
        LayoutPropertiesR.prototype.initialEnergyOnIncremental = gapi.drive.realtime.custom.collaborativeField('initialEnergyOnIncremental');

        //GlobalOptionsR
        GlobalOptionsR.prototype.zoomLevel = gapi.drive.realtime.custom.collaborativeField('zoomLevel');
        GlobalOptionsR.prototype.panLevel = gapi.drive.realtime.custom.collaborativeField('panLevel');

        //Attribute changed handlers !!!
        var self = this;

        function registerAttributeChangeHandlersElements() {
            function updateElementHandler(event) {
                var ele = event.currentTarget;
                window.editorActionsManager.updateElementCallback(ele, self.getCustomObjId(ele));
            }

            this.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, updateElementHandler);
        }

        function registerAttributeChangeHandlersLayoutPropertiesR() {
            function updateLayoutPropsHandler(event) {
                var layoutProps = event.currentTarget;
                window.editorActionsManager.updateLayoutPropertiesCallback(layoutProps);
            }

            this.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, updateLayoutPropsHandler);
        }

        function registerAttributeChangeHandlersGlobalOptionsR() {
            function updateGlobalOptionsRHandler(event) {
                var globalOptions = event.currentTarget;
                window.editorActionsManager.changeGlobalOptions(globalOptions);
            }

            this.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, updateGlobalOptionsRHandler);
        }

        //Register attribute changed handlers
        gapi.drive.realtime.custom.setOnLoaded(NodeR, registerAttributeChangeHandlersElements);
        gapi.drive.realtime.custom.setOnLoaded(EdgeR, registerAttributeChangeHandlersElements);
        gapi.drive.realtime.custom.setOnLoaded(LayoutPropertiesR, registerAttributeChangeHandlersLayoutPropertiesR);
        gapi.drive.realtime.custom.setOnLoaded(GlobalOptionsR, registerAttributeChangeHandlersGlobalOptionsR);

    };

    //Custom object Definitions and Registration Part
    var NodeR = function () {
    };
    var EdgeR = function () {
    };
    var LayoutPropertiesR = function () {
    };
    //For storing global options like zoom, pan level etc in colalborative mode
    var GlobalOptionsR = function () {
    };

    var NodeRInitializer = function (params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        model.beginCompoundOperation();
        this.name = params.name || "undefined";
        this.type = params.type || "undefined";
        this.parent = params.parent || "undefined";
        this.x = params.x || "undefined";
        this.y = params.y || "undefined";
        this.w = params.w || "undefined";
        this.h = params.h || "undefined";
        this.minWidth = params.minWidth || 0;
        this.minWidthBiasLeft = params.minWidth || 0;
        this.minWidthBiasRight = params.minWidth || 0;
        this.minHeight = params.minWidth || 0;
        this.minHeightBiasTop = params.minWidth || 0;
        this.minHeightBiasBottom = params.minWidth || 0;
        this.isHidden = params.isHidden || false;
        this.isInvalidGene = params.isInvalidGene || false;
        this.isHighlighted = params.isHighlighted || false;
        model.endCompoundOperation();
    };

    var EdgeRInitializer = function (params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        model.beginCompoundOperation();
        this.type = params.type || "undefined";
        this.source = params.source || "undefined";
        this.target = params.target || "undefined";
        this.name = params.name || "";
        this.isHighlighted = params.isHighlighted || false;

        if (params.pubmedIDs) {
            if (this.pubmedIDs == undefined) {
                this.pubmedIDs = model.createList();
            }
            this.pubmedIDs.pushAll(params.pubmedIDs);
        }
        else {
            this.pubmedIDs = model.createList();
        }

        if (params.bendPoint) {
            if (this.bendPoint == undefined) {
                this.bendPoint = model.createList();
            }
            this.bendPoint.pushAll(params.bendPoint);
        }
        else {
            this.bendPoint = model.createList();
        }

        model.endCompoundOperation();
    };

    var LayoutPropertiesRInitializer = function (params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        this.name = params.name || 'undefined';
        this.nodeRepulsion = params.nodeRepulsion || 'undefined';
        // this.nodeOverlap = params.nodeOverlap || 'undefined';
        this.idealEdgeLength = params.idealEdgeLength || 'undefined';
        this.edgeElasticity = params.edgeElasticity || 'undefined';
        this.nestingFactor = params.nestingFactor || 'undefined';
        this.gravity = params.gravity || 'undefined';
        this.numIter = params.numIter || 'undefined';
        this.tile = params.tile || 'undefined';
        this.animate = params.animate || 'undefined';
        this.randomize = params.randomize || false;
        this.gravityRangeCompound = params.gravityRangeCompound || 'undefined';
        this.gravityCompound = params.gravityCompound || 'undefined';
        this.gravityRange = params.gravityRange || 'undefined';
        this.tilingPaddingVertical = params.tilingPaddingVertical || 'undefined';
        this.tilingPaddingHorizontal = params.tilingPaddingHorizontal || 'undefined';
        this.initialEnergyOnIncremental = params.initialEnergyOnIncremental || 'undefined';
    };

    var GlobalOptionsRInitializer = function (params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        model.beginCompoundOperation();
        this.zoomLevel = params.zoomLevel || 'undefined';
        this.panLevel = params.panLevel || 'undefined';
        model.endCompoundOperation();
    };

    return RealTimeManager;

})();
