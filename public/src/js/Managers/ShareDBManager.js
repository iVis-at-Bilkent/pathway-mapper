var sharedb = require('sharedb/lib/client');
var socket = new WebSocket('ws://' + window.location.host);
var connection = new sharedb.Connection(socket);

module.exports = (function () {
    "use strict";

    var ShareDBManager = function (postFileLoadCallback) {
        //Doc data maps names and keys
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

        this.postFileLoad = postFileLoadCallback;
    };

    //Applies any given sharDB opeation to shared document and notifies other clients
    ShareDBManager.prototype.applyShareDBOperation = function (op) {
        this.doc.submitOp(op, this.shareDBError);
    };

    //Clears genomic data in shared document and notifies other clients
    ShareDBManager.prototype.clearShareDBGenomicData = function () {
        var ops = [];
        var genomicMap = this.doc.data[this.GENOMIC_DATA_MAP_NAME];
        var visMap = this.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
        var genomicDataGroupMap = this.doc.data[this.GENOMIC_DATA_GROUP_NAME];
        var genomicDataGroupCount = this.doc.data[this.GENOMIC_DATA_GROUP_COUNT];
        //Reset all genomic maps
        for (var key in genomicMap) {
            ops.push({p: [this.GENOMIC_DATA_GROUP_NAME, key], od: genomicMap[key]});
        }
        for (var key in visMap) {
            ops.push({p: [this.VISIBLE_GENOMIC_DATA_MAP_NAME, key], od: visMap[key]});
        }
        for (var key in genomicDataGroupMap) {
            ops.push({p: [this.GENOMIC_DATA_GROUP_NAME, key], od: genomicDataGroupMap[key]});
        }
        //Reset genomic data group count to 0
        ops.push({p: [this.GENOMIC_DATA_GROUP_COUNT], na: -genomicDataGroupCount});
        this.doc.submitOp(ops, this.shareDBError);
    };

    /*
     * Updates shared document object
     * @param mapName: map name of the object
     * @param objectKey: key of the object
     * @param object: new object
     *
     */
    ShareDBManager.prototype.updateShareDBObject = function (mapName, objectKey, object) {
        this.doc.submitOp([{
            p: [mapName, objectKey],
            od: this.doc.data[mapName][objectKey],
            oi: object
        }], this.shareDBError);
    };

    /*
     * Inserts a new shared document object
     * @param mapName: map name of the object
     * @param objectKey: key of the object
     * @param object: new object
     *
    */
    ShareDBManager.prototype.insertShareDBObject = function (mapName, objectKey, object) {
        this.doc.submitOp([{p: [mapName, objectKey], oi: object}], this.shareDBError);
    };

    /*
     * Deletes a shared document object
     * @param mapName: map name of the object
     * @param objectKey: key of the object
     *
    */
    ShareDBManager.prototype.deleteShareDBObject = function (mapName, objectKey) {
        this.doc.submitOp([{p: [mapName, objectKey], od: this.doc.data[mapName][objectKey]}], this.shareDBError);
    };

    //Initializes layout properties of the shared document
    ShareDBManager.prototype.initializeShareDBLayoutProperties = function () {
        this.doc.submitOp([{
            p: [this.LAYOUT_PROPS_NAME, 0],
            li: [window.editorActionsManager.layoutProperties]
        }], this.shareDBError);
    };

    //Initializes global options of the shared document
    ShareDBManager.prototype.initializeShareDBGlobalOptions = function () {
        this.doc.submitOp([{
            p: [this.GLOBAL_OPTS_NAME, 0],
            li: [window.editorActionsManager.getGlobalOptions()]
        }], this.shareDBError);
    };

    /*
     * Updates layout properties of the shared document and notifies other clients
     * @param object: new layout properties object
     *
    */
    ShareDBManager.prototype.updateShareDBLayoutProperties = function (object) {
        this.doc.submitOp([{
            p: [this.LAYOUT_PROPS_NAME, 0],
            ld: this.doc.data[this.LAYOUT_PROPS_NAME][0],
            li: object
        }], this.shareDBError);
    };

    /*
     * Updates global options of the shared document and notifies other clients
     * @param object: new global options object
     *
    */
    ShareDBManager.prototype.updateShareDBGlobalOptions = function (object) {
        this.doc.submitOp([{
            p: [this.GLOBAL_OPTS_NAME, 0],
            ld: this.doc.data[this.GLOBAL_OPTS_NAME][0],
            li: object
        }], this.shareDBError);
    };

    //Increments shared data group count
    //Use this function to increment and keep the group count synchronized
    ShareDBManager.prototype.incrementShareDBGroupCount = function () {
        this.doc.submitOp([{p: [this.GENOMIC_DATA_GROUP_COUNT], na: 1}], this.shareDBError);
    };

    //Checks whether given operation is a replace or add/delete operation
    ShareDBManager.prototype.isShareDBReplaceEvent = function (op) {
        return (op.hasOwnProperty("oi") && op.hasOwnProperty("od"))
            || (op.hasOwnProperty("li") && op.hasOwnProperty("ld"));
    };

    /*
     * Gets the initial value of the shared document
     * without this function shared document values cannot be reached
    */
    ShareDBManager.prototype.initializeSharedDBDoc = function () {
        this.doc.subscribe();
    };

    ShareDBManager.prototype.shareDBError = function (err) {
        if (err) {
            console.error(err);
        }
    };

    ShareDBManager.prototype.initShareDB = function () {
        var self = this;
        var id = this.getParam('id');

        var loadFileCallback = function () {
            self.onFileLoaded();
        };

        //Creates new shared db document and initializes values
        var createNewDocument = function () {
            var new_id = self.getCustomObjId();
            var data = {
                nodes: {},
                edges: {},
                layoutProperties: [window.editorActionsManager.layoutProperties],
                globalOptions: [window.editorActionsManager.getGlobalOptions()],
                genomicDataMap: {},
                visibleGenomicDataMapByType: {},
                genomicDataGroupList: {},
                genomicDataGroupCount: 0
            };
            window.history.pushState(null, null, '?id=' + new_id);
            self.doc = connection.get('cy', new_id);
            self.doc.create(data, loadFileCallback);
        };

        //Check if id exists in parameters
        //If exists open the shared document
        if (id) {
            // Check any document exists with given id
            this.doc = connection.get('cy', id);
            this.doc.fetch(function (err) {
                if (err)
                    throw err;

                if (self.doc.type === null) {
                    createNewDocument();
                    return;
                }
                self.doc.subscribe(loadFileCallback);
            });
        }
        else {
            //Create new shared document
            createNewDocument();
        }
    };

    /*
     * After a file has been initialized and loaded, we can access the
     * document. We will wire up the data in shared document to the UI.
     *
    */
    ShareDBManager.prototype.onFileLoaded = function () {
        this.initializeSharedDBDoc();
        this.syncInitialSharedDocData();
        this.initSharedDocEventHandlers();

        this.postFileLoad();
    };

    /*
     * Synchronizes initial data in the shared document to
     * client's application.
     */
    ShareDBManager.prototype.syncInitialSharedDocData = function () {
        var self = this;
        var nodeMap = self.doc.data[this.NODEMAP_NAME];
        var edgeMap = self.doc.data[this.EDGEMAP_NAME];
        var shareDBLayoutProperties = self.doc.data[this.LAYOUT_PROPS_NAME][0];
        var globalOptions = self.doc.data[this.GLOBAL_OPTS_NAME][0];
        var genomicDataMap = self.doc.data[this.GENOMIC_DATA_MAP_NAME];
        var visDataMap = self.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
        var groupedGenomicDataMap = self.doc.data[this.GENOMIC_DATA_GROUP_NAME];
        var groupedGenomicDataCount = self.doc.data[this.GENOMIC_DATA_GROUP_COUNT];


        var invalidGenes = [];
        var highlightedGenes = [];
        var invalidHighlightedGenes = [];
        var hiddenGenes = [];
        for (var key in nodeMap) {
            var tmpNode = nodeMap[key];
            var tmpNodeId = tmpNode.id;

            if (tmpNode.isInvalidGene && tmpNode.isHighlighted) {
                invalidHighlightedGenes.push(tmpNodeId);
            }
            else if (tmpNode.isInvalidGene) {
                invalidGenes.push(tmpNodeId);
            }
            else if (tmpNode.isHighlighted) {
                highlightedGenes.push(tmpNodeId);
            }
            if (tmpNode.isHidden) {
                hiddenGenes.push(tmpNodeId);
            }
        }
        var highlightedEdges = [];
        for (var key in edgeMap) {
            var tmpEdge = edgeMap[key];
            var tmpEdgeId = tmpEdge.id;
            if (tmpEdge.isHighlighted) {
                highlightedEdges.push(tmpEdgeId);
            }
        }

        //TODO Workaround for legacy pathways

        // Workaround for backward compatibility of legacy pathways
        // Addition of pubmed id field on server if legacy collaborative
        // pathways does not have !
        for (var key in edgeMap) {
            var tmpEdge = edgeMap[key];

            if (tmpEdge.pubmedIDs == undefined || tmpEdge.name == undefined || tmpEdge.bendPoint == undefined) {
                var pubmedIDs = (tmpEdge.pubmedIDs == undefined) ? [] : tmpEdge.pubmedID;
                var edgeLabel = (tmpEdge.name == undefined) ? "" : tmpEdge.name;
                var bendPoint = (tmpEdge.bendPoint == undefined) ? [] : tmpEdge.bendPoint;

                var param = {
                    type: tmpEdge.type,
                    source: tmpEdge.source,
                    id: self.getCustomObjId(),
                    target: tmpEdge.target,
                    pubmedID: pubmedIDs,
                    name: edgeLabel,
                    bendPoint: bendPoint
                };

                var newEdge = self.edgeInitializer(param);


                var tmpEdgeID = tmpEdge.id;
                var newEdgeID = newEdge.id;

                var ops = [
                    {p: [self.EDGEMAP_NAME, tmpEdgeID], od: tmpEdge},
                    {p: [self.EDGEMAP_NAME, newEdgeID], oi: newEdge}
                ]
                self.applyShareDBOperation(ops);
            }

        }

        //Add real time nodes to local graph
        window.editorActionsManager.addNewElementsLocally(nodeMap, edgeMap);
        //Adds different type of highlight to nodes and hides if their property is hidden
        window.editorActionsManager.highlightElementsInitially(invalidHighlightedGenes, invalidGenes, highlightedGenes, highlightedEdges, hiddenGenes);

        //Update layout properties & global options!!
        window.editorActionsManager.updateLayoutPropertiesCallback({li: shareDBLayoutProperties});
        window.editorActionsManager.changeGlobalOptions({li: globalOptions});

        //Sync already available genomic data !

        if (!groupedGenomicDataMap) {

            self.insertShareDBObject(self.GENOMIC_DATA_MAP_NAME, '0', []);
            for (var key in visDataMap) {
                var currentMap = _.clone(groupedGenomicDataMap['0']);
                currentMap.push(visibilityMapKeys[key]);
                self.updateShareDBObject(self.GENOMIC_DATA_MAP_NAME, '0', currentMap);
            }
        }

        if (!groupedGenomicDataCount) {
            var count = self.doc.data[self.GENOMIC_DATA_GROUP_COUNT];
            var op = [{
                p: [self.GENOMIC_DATA_GROUP_COUNT],
                na: -count
            }];
            self.applyShareDBOperation(op);
            groupedGenomicDataCount = self.doc.data[self.GENOMIC_DATA_GROUP_COUNT];
        }


        for (var key in genomicDataMap) {
            window.editorActionsManager.genomicDataOverlayManager.genomicDataMap[key] =
                genomicDataMap[key];
        }

        for (var key in visDataMap) {
            window.editorActionsManager.genomicDataOverlayManager.visibleGenomicDataMapByType[key] =
                visDataMap[key];
        }

        for (var key in groupedGenomicDataMap) {
            window.editorActionsManager.genomicDataOverlayManager.groupedGenomicDataMap[key] =
                groupedGenomicDataMap[key];
        }
        //Does not seem necessary for not but just for sake of completeness
        window.editorActionsManager.genomicDataOverlayManager.groupedGenomicDataCount = groupedGenomicDataCount;

        window.editorActionsManager.genomicDataOverlayManager.showGenomicData();
        window.editorActionsManager.genomicDataOverlayManager.notifyObservers();
        cy.fit(50);
    };

    /*
     * Initialize event listeners for any operation coming from shareDB
     *
     */
    ShareDBManager.prototype.initSharedDocEventHandlers = function () {

        var self = this;

        //Setup event handlers for maps
        var nodeAddRemoveHandler = function (op) {
            window.editorActionsManager.shareDBNodeAddRemoveEventCallBack(op);
        };

        var edgeAddRemoveHandler = function (op) {
            window.editorActionsManager.shareDBEdgeAddRemoveEventCallBack(op);
        };

        var genomicDataAddRemoveHandler = function (op) {
            window.editorActionsManager.shareDBGenomicDataHandler(op);
        };

        var genomicDataVisibilityChangeHandler = function (op) {
            window.editorActionsManager.shareDBGenomicDataVsibilityHandler(op);
        };

        var genomicDataGroupChangeHandler = function (op) {
            window.editorActionsManager.shareDBGenomicDataGroupChangeHandler(op);
        };

        var updateElementHandler = function (op) {
            window.editorActionsManager.updateElementCallback(op);
        };

        var updateLayoutPropsHandler = function (op) {
            window.editorActionsManager.updateLayoutPropertiesCallback(op);
        };

        var updateGlobalOptionsHandler = function (op) {
            window.editorActionsManager.changeGlobalOptions(op);
        };


        //Event listeners for maps
        this.doc.on('op', function (op, source) {
            for (var i = 0; i < op.length; i++) {
                var handleOp = op[i];
                var path = handleOp.p[0];
                var isReplaceEvent = self.isShareDBReplaceEvent(handleOp);

                if (!isReplaceEvent) {
                    if (path === self.NODEMAP_NAME) {
                        nodeAddRemoveHandler(handleOp);
                    }
                    else if (path === self.EDGEMAP_NAME) {
                        edgeAddRemoveHandler(handleOp);
                    }
                    else if (path === self.GENOMIC_DATA_MAP_NAME) {
                        genomicDataAddRemoveHandler(handleOp);
                    }
                    else if (path === self.VISIBLE_GENOMIC_DATA_MAP_NAME) {
                        genomicDataVisibilityChangeHandler(handleOp);
                    }
                    else if (path === self.GENOMIC_DATA_GROUP_NAME) {
                        genomicDataGroupChangeHandler(handleOp);
                    }
                }
                else { //Then it is update event
                    if (path === self.NODEMAP_NAME) {
                        updateElementHandler(handleOp);
                    }
                    else if (path === self.EDGEMAP_NAME) {
                        updateElementHandler(handleOp);
                    }
                    else if (path === self.LAYOUT_PROPS_NAME) {
                        updateLayoutPropsHandler(handleOp);
                    }
                    else if (path === self.GLOBAL_OPTS_NAME) {
                        updateGlobalOptionsHandler(handleOp);
                    }
                }
            }
        });
    };

    /*
     * Gets the first empty index from the shared document
     * genomic data group count and increments counter by 1
     *
    */
    ShareDBManager.prototype.getEmptyGroupID = function () {
        var returnCount = this.doc.data[this.GENOMIC_DATA_GROUP_COUNT];
        this.incrementShareDBGroupCount();
        return returnCount;
    };

    /*
     * Gets the first empty index from the shared document
     * Initializes & inserts a new genomic data
     * by group id or group name
     *
    */
    ShareDBManager.prototype.groupGenomicData = function (cancerNames, inGroupId) {
        var genomicGroupMap = this.doc.data[this.GENOMIC_DATA_GROUP_NAME];
        var genomicVisMap = this.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];

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
            this.updateShareDBObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
        }
        else {
            //Insert new group
            this.insertShareDBObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
        }

    };

    //Clears genomic data on shared document
    ShareDBManager.prototype.clearGenomicData = function () {
        this.clearShareDBGenomicData();
    };

    ShareDBManager.prototype.addGenomicData = function (geneData) {
        var genomicMap = this.doc.data[this.GENOMIC_DATA_MAP_NAME];

        //Iterate over all genmoic data which is mapped by geneSymbol to list of alteration values
        //that are also mapped by cancer name and associated value
        var ops = [];
        for (var geneSymbol in geneData) {
            var genomicMapEntry = {};
            if (genomicMap.hasOwnProperty(geneSymbol))
                genomicMapEntry = _.clone(genomicMap[geneSymbol]);

            for (var cancerType in geneData[geneSymbol]) {
                if (!(cancerType in genomicMapEntry))
                    genomicMapEntry[cancerType] = parseInt(geneData[geneSymbol][cancerType]).toFixed(2);
            }
            ops.push({
                p: [this.GENOMIC_DATA_MAP_NAME, geneSymbol],
                oi: genomicMapEntry
            });
        }
        this.applyShareDBOperation(ops);
    };

    ShareDBManager.prototype.addGenomicVisibilityData = function (visMap) {
        var ops = [];
        for (var cancerStudy in visMap) {
            ops.push({
                p: [this.VISIBLE_GENOMIC_DATA_MAP_NAME, cancerStudy],
                oi: visMap[cancerStudy]
            });
        }
        this.applyShareDBOperation(ops);
    };

    ShareDBManager.prototype.changeVisibility = function (nodesToHide, isHidden) {
        var self = this;
        var nodeMap = self.doc.data[this.NODEMAP_NAME];

        nodesToHide.forEach(function (ele) {
            var nodeID = ele.id();
            if (nodeMap.hasOwnProperty(nodeID)) {
                var realTimeNode = nodeMap[nodeID];
                realTimeNode.isHidden = isHidden;
                self.updateShareDBObject(self.NODEMAP_NAME, nodeID, realTimeNode);
            }
        });
    };

    ShareDBManager.prototype.changeHighlight = function (elementsToHighlight, isHighlighted) {
        var self = this;
        var nodeMap = self.doc.data[this.NODEMAP_NAME];
        var edgeMap = self.doc.data[this.EDGEMAP_NAME];

        elementsToHighlight.forEach(function (ele) {
            var elementID = ele.id();
            if (nodeMap.hasOwnProperty(elementID)) {
                var realTimeNode = nodeMap[elementID];
                realTimeNode.isHighlighted = isHighlighted;
                self.updateShareDBObject(self.NODEMAP_NAME, elementID, realTimeNode);
            }
            if (edgeMap.hasOwnProperty(elementID)) {
                var realTimeEdge = edgeMap[elementID];
                realTimeEdge.isHighlighted = isHighlighted;
                self.updateShareDBObject(self.EDGEMAP_NAME, elementID, realTimeEdge);
            }
        });
    };

    ShareDBManager.prototype.addNewNode = function (nodeData, posData) {
        var realTimeGeneratedID = this.getCustomObjId();
        var params = {
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

        //Ensures new node is compatible with the other nodes
        var newNode = this.nodeInitializer(params);
        if (posData) {
            newNode.x = posData.x;
            newNode.y = posData.y;
        }
        this.insertShareDBObject(this.NODEMAP_NAME, realTimeGeneratedID, newNode);
    };

    ShareDBManager.prototype.addNewEdge = function (edgeData) {
        var realTimeGeneratedID = this.getCustomObjId();
        var params = {
            type: edgeData.type,
            id: realTimeGeneratedID,
            source: edgeData.source,
            target: edgeData.target,
            pubmedIDs: edgeData.pubmedIDs,
            name: edgeData.name,
            bendPoint: edgeData.bendPoint
        };

        //Ensures new edge is compatible with the other edge
        var newEdge = this.edgeInitializer(params);
        this.insertShareDBObject(this.EDGEMAP_NAME, realTimeGeneratedID, newEdge);
    };

    ShareDBManager.prototype.reconnectEdge = function(sourceID, targetID, edgeData) {
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];
        var edge = edgeMap[edgeData.id];
        var edgeID = edge.id;

        edge.source = sourceID;
        edge.target = targetID;

        if(edgeMap.hasOwnProperty(edgeID)) {
            this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, edge);
        }
        else {
            throw new Error('Element does not exist in Real Time');
        }
    };


    ShareDBManager.prototype.removeElement = function (elementID) {
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];
        var nodeMap = this.doc.data[this.NODEMAP_NAME];

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

    ShareDBManager.prototype.moveElement = function (ele) {
        var nodeMap = this.doc.data[this.NODEMAP_NAME];

        var elementID = ele.id();
        var newPos = ele.position();

        if (nodeMap.hasOwnProperty(elementID)) {
            var tmpNode = nodeMap[elementID];
            tmpNode.x = newPos.x;
            tmpNode.y = newPos.y;
            this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    //This function is used for movements of all selected elements wrt alignment selected
    ShareDBManager.prototype.changeElementsPositionByAlignment = function (coll) {
        var self = this;
        var nodeMap = self.doc.data[this.NODEMAP_NAME];

        coll.forEach(function (ele) {
            var elementID = ele.node.id();
            if (nodeMap.hasOwnProperty(elementID)) {
                var tmpNode = nodeMap[elementID];
                tmpNode.x = ele.nextPosition.x;
                tmpNode.y = ele.nextPosition.y;
                self.updateShareDBObject(self.NODEMAP_NAME, elementID, tmpNode);
            }
            else {
                throw new Error('Element does not exist in nodes !!! ');
            }
        });
    };

    ShareDBManager.prototype.resizeElement = function (ele, previousWidth, previousHeight) {
        var nodeMap = this.doc.data[this.NODEMAP_NAME];

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
            this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    ShareDBManager.prototype.setSizeOfElement = function (ele, newWidth, newHeight) {
        var nodeMap = this.doc.data[this.NODEMAP_NAME];

        var elementID = ele.id();

        if (nodeMap.hasOwnProperty(elementID)) {
            var tmpNode = nodeMap[elementID];
            tmpNode.w = newWidth;
            tmpNode.h = newHeight;
            this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    ShareDBManager.prototype.resizeCompound = function (ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom) {
        var nodeMap = this.doc.data[this.NODEMAP_NAME];

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
            this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
        }
        else {
            throw new Error('Element does not exist in nodes !!! ');
        }
    };

    ShareDBManager.prototype.changeNodePositionsShareDB = function (nodes) {
        var self = this;
        var nodeMap = self.doc.data[self.NODEMAP_NAME];

        nodes.forEach(function (ele) {
            var nodeID = ele.id();
            if (nodeMap.hasOwnProperty(nodeID)) {
                var realTimeNode = nodeMap[nodeID];
                realTimeNode.x = ele.position('x');
                realTimeNode.y = ele.position('y');
                self.updateShareDBObject(self
                    .NODEMAP_NAME, nodeID, realTimeNode);
            }
            else {
                throw new Error('Element does not exist in nodes !!! ');
            }
        });
    };

    ShareDBManager.prototype.changeHighlightInvalidGenes = function (nodeIDs, isInvalid) {
        var nodeMap = this.doc.data[this.NODEMAP_NAME];

        //TODO check compound operation inside or outside of for ?
        for (var i in nodeIDs) {
            var nodeID = nodeIDs[i];
            if (nodeMap.hasOwnProperty(nodeID)) {
                var collaborativeNode = nodeMap[nodeID];
                collaborativeNode.isInvalidGene = isInvalid;
                this.updateShareDBObject(this.NODEMAP_NAME, nodeID, collaborativeNode);
            }
        }

    };

    ShareDBManager.prototype.addPubmedIDs = function (edgeID, pubmedIDs) {
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];


        if (edgeMap.hasOwnProperty(edgeID)) {
            var tmpEdge = edgeMap[edgeID];
            var nonDuplicateArray = [];
            for (var i = 0; i < pubmedIDs.length; i++) {
                if (tmpEdge.pubmedIDs.indexOf(pubmedIDs[i]) < 0) {
                    nonDuplicateArray.push(pubmedIDs[i]);
                }
            }
            tmpEdge.pubmedIDs.concat(nonDuplicateArray);
            this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
        }
        else {
            throw new Error('Edge does not exist in real time !!! ');
        }
    };

    ShareDBManager.prototype.removePubmedID = function (edgeID, pubmedIDs) {
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];

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
            this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);

        }
        else {
            throw new Error('Edge does not exist in real time !!! ');
        }
    };

    ShareDBManager.prototype.updateEdgeBendPoints = function (edgeID, bendPointsArray) {

        var edgeMap = this.doc.data[this.EDGEMAP_NAME];

        if (edgeMap.hasOwnProperty(edgeID)) {
            var tmpEdge = edgeMap[edgeID];
            tmpEdge.bendPoint = bendPointsArray;
            this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
        }
        else {
            throw new Error('Edge does not exist in real time !!! ');
        }
    };

    ShareDBManager.prototype.changeName = function (ele, newName) {
        var nodeMap = this.doc.data[this.NODEMAP_NAME];
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];

        var elementID = ele.id();

        if (ele.isNode()) {
            if (nodeMap.hasOwnProperty(elementID)) {
                var tmpNode = nodeMap[elementID];
                tmpNode.name = newName;
                this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
            }
            else {
                throw new Error('Element does not exist in nodes !!! ');
            }
        }
        else {
            if (edgeMap.hasOwnProperty(elementID)) {
                var tmpEdge = edgeMap[elementID];
                tmpEdge.name = newName;
                this.updateShareDBObject(this.EDGEMAP_NAME, elementID, tmpEdge);
            }
            else {
                throw new Error('Element does not exist in edges !!! ');
            }
        }
    };

    ShareDBManager.prototype.changeParent = function (rootNode, newParentId, connectedEdges) {
        var self = this;
        var nodeLookupTable = {};

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

                self.removeElement(refNodeId);
                var newNode = self.nodeInitializer(newNodeData);
                var newNodeId = newNode.id;
                self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode);
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

    ShareDBManager.prototype.removeAllElements = function () {
        var nodeMap = this.doc.data[this.NODEMAP_NAME];
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];
        var ops = [];

        //Remove all real time nodes
        for (var key in nodeMap) {
            ops.push({
                p: [this.NODEMAP_NAME, key],
                od: nodeMap[key]
            });
        }

        //Remove all real time edges
        for (var key in edgeMap) {
            ops.push({
                p: [this.EDGEMAP_NAME, key],
                od: edgeMap[key]
            });
        }

        this.applyShareDBOperation(ops);
    };

    ShareDBManager.prototype.loadGraph = function (nodes, edges) {
        var self = this;
        this.removeAllElements();

        //Function that traverses graph tree recursively.
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
            var newNodeId = self.getCustomObjId();
            var params = node.data;
            oldIdNewIdMap[params.id] = newNodeId;
            var newNode = self.nodeInitializer(params);
            newNode.id = newNodeId;

            self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode);

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
            var params = edge.data;
            var newEdgeID = self.getCustomObjId();
            params.id = newEdgeID;
            var newEdge = self.edgeInitializer(params);
            self.insertShareDBObject(self.EDGEMAP_NAME, newEdgeID, newEdge);
        }
    };

    ShareDBManager.prototype.mergeGraph = function (nodes, edges) {
        var self = this;
        var nodeMap = self.doc.data[this.NODEMAP_NAME];

        var realTimeNodeMap = nodeMap;
        var realTimeNodeLookupTable = {};
        var realTimeNodeNameLookupTable = {};
        var oldIdNewIdMap = {};

        //Create lookup table for real time nodes
        //items are stored in an array in the resulting array of nodeMap.items()
        // [0] - id, [1] - object
        for (var i in realTimeNodeMap) {
            var nodeMapItem = realTimeNodeMap[i];
            realTimeNodeLookupTable[nodeMapItem.id] = nodeMapItem;
            realTimeNodeNameLookupTable[nodeMapItem.name] = nodeMapItem;
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
                var newNodeId = self.getCustomObjId();
                oldIdNewIdMap[node.data.id] = newNodeId;
                var newNode = self.nodeInitializer(node.data);
                newNode.id = newNodeId;
                self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode);

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
                var sameNodeId = sameNameNode.id;
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
        var ops = [];
        for (var i in edges) {
            var edge = edges[i];
            edge.data.source = oldIdNewIdMap[edge.data.source];
            edge.data.target = oldIdNewIdMap[edge.data.target];
            var newEdge = self.edgeInitializer(edge.data);
            var newEdgeID = this.getCustomObjId();
            newEdge.id = newEdgeID;
            ops.push({
                p: [self.EDGEMAP_NAME, newEdgeID],
                oi: newEdge
            });
        }
        self.applyShareDBOperation(ops);
    };

    ShareDBManager.prototype.updateLayoutProperties = function (newLayoutProperties) {
        this.updateShareDBLayoutProperties(newLayoutProperties);
    };

    ShareDBManager.prototype.updateGlobalOptions = function (newOptions) {
        this.updateShareDBGlobalOptions(newOptions);
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
    ShareDBManager.prototype.createGraphHierarchy = function (nodes) {
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

    //Makes sure that edge is compatible with edges in shared document
    ShareDBManager.prototype.edgeInitializer = function (params) {
        var edge = {};
        edge.id = params.id || this.getCustomObjId();
        edge.type = params.type || "undefined";
        edge.source = params.source || "undefined";
        edge.target = params.target || "undefined";
        edge.name = params.name || "";
        edge.isHighlighted = params.isHighlighted || false;

        if (params.pubmedIDs) {
            if (edge.pubmedIDs == undefined) {
                edge.pubmedIDs = [];
            }
            edge.pubmedIDs.push(params.pubmedIDs);
        }
        else {
            edge.pubmedIDs = [];
        }

        if (params.bendPoint) {
            if (edge.bendPoint == undefined) {
                edge.bendPoint = [];
            }
            edge.bendPoint.push(params.bendPoint);
        }
        else {
            edge.bendPoint = [];
        }
        return edge;
    };

    //Makes sure that node is compatible with nodes in shared document
    ShareDBManager.prototype.nodeInitializer = function (params) {
        var node = {};
        node.id = params.id || this.getCustomObjId();
        node.name = params.name || "undefined";
        node.type = params.type || "undefined";
        node.parent = params.parent || "undefined";
        node.x = params.x || "undefined";
        node.y = params.y || "undefined";
        node.w = params.w || "undefined";
        node.h = params.h || "undefined";
        node.minWidth = params.minWidth || 0;
        node.minWidthBiasLeft = params.minWidth || 0;
        node.minWidthBiasRight = params.minWidth || 0;
        node.minHeight = params.minWidth || 0;
        node.minHeightBiasTop = params.minWidth || 0;
        node.minHeightBiasBottom = params.minWidth || 0;
        node.isHidden = params.isHidden || false;
        node.isInvalidGene = params.isInvalidGene || false;
        node.isHighlighted = params.isHighlighted || false;
        return node;
    };

    //Makes sure that layout properties is compatible with layout properties in shared document
    ShareDBManager.prototype.layoutPropertiesInitializer = function (params) {
        var layoutProperties = {};
        layoutProperties.name = params.name || 'undefined';
        layoutProperties.nodeRepulsion = params.nodeRepulsion || 'undefined';
        // this.nodeOverlap = params.nodeOverlap || 'undefined';
        layoutProperties.idealEdgeLength = params.idealEdgeLength || 'undefined';
        layoutProperties.edgeElasticity = params.edgeElasticity || 'undefined';
        layoutProperties.nestingFactor = params.nestingFactor || 'undefined';
        layoutProperties.gravity = params.gravity || 'undefined';
        layoutProperties.numIter = params.numIter || 'undefined';
        layoutProperties.tile = params.tile || 'undefined';
        layoutProperties.animate = params.animate || 'undefined';
        layoutProperties.randomize = params.randomize || false;
        layoutProperties.gravityRangeCompound = params.gravityRangeCompound || 'undefined';
        layoutProperties.gravityCompound = params.gravityCompound || 'undefined';
        layoutProperties.gravityRange = params.gravityRange || 'undefined';
        layoutProperties.tilingPaddingVertical = params.tilingPaddingVertical || 'undefined';
        layoutProperties.tilingPaddingHorizontal = params.tilingPaddingHorizontal || 'undefined';
        layoutProperties.initialEnergyOnIncremental = params.initialEnergyOnIncremental || 'undefined';
        return layoutProperties;
    };

    //Makes sure that global options is compatible with global options in shared document
    ShareDBManager.prototype.globalOptionsInitializer = function (params) {
        var globalOptions = {};
        globalOptions.zoomLevel = params.zoomLevel || 'undefined';
        globalOptions.panLevel = params.panLevel || 'undefined';
        return globalOptions;
    };

    //Create unique ID for elements
    ShareDBManager.prototype.getCustomObjId = function () {
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

    ShareDBManager.prototype.getParam = function (urlParam) {
        var regExp = new RegExp(urlParam + '=(.*?)($|&)', 'g');
        var match = window.location.search.match(regExp);
        if (match && match.length) {
            match = match[0];
            match = match.replace(urlParam + '=', '').replace('&', '');
        } else {
            match = null;
        }
        return match;
    };

    return ShareDBManager;

})();
