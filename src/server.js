const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

const DEFAULT_PORT = 8080;
const APP_PORT = process.env.PORT || DEFAULT_PORT;



const staticPath = path.join(__dirname, '../dist');
app.use(express.static(staticPath));
console.log(staticPath);
const server = http.createServer(app);
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));})

const ShareDB = require('sharedb');
const WebSocketJSONStream = require('websocket-json-stream');
const WebSocket = require('ws');
const db = require('sharedb-mongo')('mongodb://pathwaymapper:1234abc@ds111072.mlab.com:11072/pathwaymapper');
const backend = new ShareDB({db});

// Connect any incoming WebSocket connection to ShareDB
var wss = new WebSocket.Server({server: server});
wss.on('connection', function(ws, req) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
});

server.listen(APP_PORT, function (){
    console.log('--- PathwayMapper is up and running on port ' + APP_PORT + ' ---');
});