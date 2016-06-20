module.exports = (function(cy)
{
    var clientId = '781185170494-n5v6ukdtorbs0p8au8svibjdobaad35c.apps.googleusercontent.com';

    if (!/^([0-9])$/.test(clientId[0])) {
        alert('Invalid Client ID - did you forget to insert your application Client ID?');
    }
    // Create a new instance of the realtime utility with your client ID.
    var realtimeUtils = new utils.RealtimeUtils({
        clientId: clientId
    });

    authorize();

    function authorize() {
        // Attempt to authorize
        realtimeUtils.authorize(function(response) {
            if (response.error) {
                // Authorization failed because this is the first time the user has used your application,
                // show the authorize button to prompt them to authorize manually.
                var button = document.getElementById('auth_button');
                button.classList.add('visible');
                button.addEventListener('click', function() {
                    realtimeUtils.authorize(function(response) {
                        start();
                    }, true);
                });
            } else {
                start();
            }
        }, false);
    }

    function start() {
        // With auth taken care of, load a file, or create one if there
        // is not an id in the URL.
        var id = realtimeUtils.getParam('id');

        // Register Types before load event !
        registerTypes();

        if (id) {
            // Load the document id from the URL
            realtimeUtils.load(id.replace('/', ''), onFileLoaded, onFileInitialize);
        } else {
            // Create a new document, add it to the URL
            realtimeUtils.createRealtimeFile('New Graph', function(createResponse) {
                window.history.pushState(null, null, '?id=' + createResponse.id);
                realtimeUtils.load(createResponse.id, onFileLoaded, onFileInitialize);
            });
        }
    }


    // You must register the custom object before loading or creating any file that
    // uses this custom object.
    function registerTypes() {
        //Register our custom objects go Google Real Time API
        gapi.drive.realtime.custom.registerType(EdgeR, 'EdgeR');
        gapi.drive.realtime.custom.registerType(NodeR, 'NodeR');
        gapi.drive.realtime.custom.setInitializer(NodeR, NodeRInitializer);
        gapi.drive.realtime.custom.setInitializer(EdgeR, EdgeRInitializer);
        createNodeAndEdgeFieldsR();
        gapi.drive.realtime.custom.setOnLoaded(NodeR, onLoadCallback);
    }

    function onLoadCallback() {
        // this.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, wireTextBoxes);
    }

    // The first time a file is opened, it must be initialized with the
    // document structure.
    function onFileInitialize(model) {
        var root = model.getRoot();

        var nodeList = model.createList();
        var edgeList = model.createList();

        root.set('nodes', nodeList);
        root.set('edges', edgeList);

        var nodes = cy.nodes();
        var edges = cy.edges();

        nodes.forEach(function(node, index)
        {
            var nodeData = node.data();
            var nodePos = node.position();

            var newNode = model.create(NodeR, {
                label: nodeData.name,
                nodeID: nodeData.id,
                type: nodeData.type,
                posX: nodePos.x,
                posY: nodePos.y
            });

            nodeList.push(newNode);
        });

        edges.forEach(function(edge, index)
        {
            var edgeData = edge.data();

            var newEdge = model.create(EdgeR, {
                edgeID: edgeData.id,
                source: edgeData.source,
                target: edgeData.target,
                type: edgeData.type
            });

            edgeList.push(newEdge);
        });
    }

    // After a file has been initialized and loaded, we can access the
    // document. We will wire up the data model to the UI.
    function onFileLoaded(doc)
    {
        var model = doc.getModel();
        var root = model.getRoot();

        var refreshDataButton = document.getElementById('add_node');
        refreshDataButton.addEventListener('click', function(event)
        {
            var nodeData = {name: "Dummy", type: "Gene"};

            var newNode = model.create(NodeR, {
                label: "Dummy",
                nodeID: Math.random() * 10,
                type: "Gene",
                posX: Math.random() * 10,
                posY: Math.random() * 10,
            });

            root.get('nodes').push(newNode);
        });

        root.get('nodes').addEventListener( gapi.drive.realtime.EventType.VALUES_ADDED, function(event)
        {
          var node = event.values[0];

          var nodeData = {type: node.type, name:'New '+ node.type};
          console.log(event);
          cy.add(
          {
              group: "nodes",
              data: nodeData
          });
        })

        gapi.drive.realtime.debug();
    }

    // Connects the text boxes to the collaborative string
    function wireTextBoxes(event) {
        var textArea1 = document.getElementById('text_area_1');
        var textArea2 = document.getElementById('text_area_2');

        textArea1.innerHTML = event.currentTarget.nodeID;
        textArea2.innerHTML = event.currentTarget.label;
    }

    //Custom object Definitions and Registration Part
    var NodeR = function() {

    }

    var EdgeR = function() {

    }

    var createNodeAndEdgeFieldsR = function() {
        NodeR.prototype.nodeID = gapi.drive.realtime.custom.collaborativeField('nodeID');
        NodeR.prototype.label = gapi.drive.realtime.custom.collaborativeField('label');
        NodeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
        NodeR.prototype.posX = gapi.drive.realtime.custom.collaborativeField('posX');
        NodeR.prototype.posY = gapi.drive.realtime.custom.collaborativeField('posY');

        EdgeR.prototype.edgeID = gapi.drive.realtime.custom.collaborativeField('edgeID');
        EdgeR.prototype.source = gapi.drive.realtime.custom.collaborativeField('source');
        EdgeR.prototype.target = gapi.drive.realtime.custom.collaborativeField('target');
        EdgeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
    }

    var NodeRInitializer = function(params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        this.nodeID = params.nodeID || "undefined";
        this.label = params.label || "undefined";
        this.type = params.type || "undefined";
        this.posX = params.posX || "undefined";
        this.posY = params.posY || "undefined";
    }

    var EdgeRInitializer = function(params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        this.edgeID = params.edgeID || "undefined";
        this.type = params.type || "undefined";
        this.source = params.source || "undefined";
        this.target = params.target || "undefined";
    }

})(window.cy)
