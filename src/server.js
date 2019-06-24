const express = require('express');
const app = express();
const path = require('path');

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));
app.use(express.static(path.join(__dirname, '/icons')));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));})

const ShareDB = require('sharedb');
const WebSocketJSONStream = require('websocket-json-stream');
const WebSocket = require('ws');
const db = require('sharedb-mongo')('mongodb://pathwaymapper:1234abc@ds111072.mlab.com:11072/pathwaymapper');
const backend = new ShareDB({db});

const server = app.listen(process.env.PORT || 8080, function () {

})

// Connect any incoming WebSocket connection to ShareDB
var wss = new WebSocket.Server({server: server});
wss.on('connection', function(ws, req) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
});