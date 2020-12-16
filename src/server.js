const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const multer = require('multer');
const DEFAULT_PORT = 3000;
const APP_PORT = process.env.PORT || DEFAULT_PORT;
const fs = require('fs');
const qs = require("querystring");
var request = require('request');
const multerInstance = multer({dest:'./uploads/'});

const staticPath = path.join(__dirname, '../dist');
app.use(express.static(staticPath));
console.log(staticPath);
const server = http.createServer(app);
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
})
app.post('/loadGraph', multerInstance.single('graphFile'), loadGraphHandler);
app.post('/getBioGeneData', multerInstance.array(), biogeneDataHandler);

const ShareDB = require('sharedb');
const WebSocketJSONStream = require('websocket-json-stream');
const WebSocket = require('ws');
const db = require('sharedb-mongo')('mongodb://pathwaymapper:1234abc@pathwaymapper-shard-00-00.pez3l.mongodb.net:27017,pathwaymapper-shard-00-01.pez3l.mongodb.net:27017,pathwaymapper-shard-00-02.pez3l.mongodb.net:27017/pathwaymapper?ssl=true&replicaSet=atlas-g5vfe2-shard-0&authSource=admin&retryWrites=true&w=majority');
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


function biogeneDataHandler(req,res)
{
    var queryParams =
        {
            'query': req.body['query'],
            'format': 'json',
            'org': 'human'
        };

    var paramString = qs.stringify(queryParams);
    var bioGeneURL = 'http://cbio.mskcc.org/biogene/retrieve.do?'
    var queryURL = bioGeneURL + paramString;

    request(queryURL, function (error, response, body)
    {
        if (!error && response.statusCode == 200)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(response.body);
            res.end();
        }
        else {
            //console.log(response.statusCode) // Print the error
        }
    })

}

function loadGraphHandler(req, res)
{
    console.log("LoadGraphHandler called");
    if(req.file)
    {
        fs.readFile(req.file.path, {encoding: 'utf-8'}, function(err,data)
        {
            if (!err)
            {
                res.writeHead(200, {'Content-Type': 'multipart/form-data'});
                res.write(data);
                res.end();
                console.log("Graph loaded");
            }
            else
            {
                console.log("err");
                console.log(err);
            }
            fs.unlinkSync(req.file.path);
        });
    }
}