var express = require('express');
var path = require('path');
var helmet = require('helmet');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var request = require('request');
var qs = require("querystring");


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.use(multer);
app.use(express.static('public'));
app.use('/node_modules/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/node_modules/cytoscape-panzoom', express.static(__dirname + '/node_modules/cytoscape-panzoom/'));
app.use('/node_modules/cytoscape-context-menus', express.static(__dirname + '/node_modules/cytoscape-context-menus/'));
app.use('/node_modules/cytoscape-navigator', express.static(__dirname + '/node_modules/cytoscape-navigator/'));
app.use('/node_modules/qtip2', express.static(__dirname + '/node_modules/qtip2/'));
app.use('/node_modules/filesaverjs', express.static(__dirname + '/node_modules/filesaverjs/'));
app.use('/node_modules/bootstrap-select', express.static(__dirname + '/node_modules/bootstrap-select/'));



var multerInstance = multer({dest:'./uploads/'});

//var APP_PORT = 3000;
var APP_PORT = 80;

//get handler for index.html
function indexGetHandler(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
}

/*******************************
  POST Handlers
********************************/
function loadGraphHandler(req, res)
{
    fs.readFile(req.file.path, {encoding: 'utf-8'}, function(err,data)
    {
      if (!err)
      {
        res.writeHead(200, {'Content-Type': 'multipart/form-data'});
        res.write(data);
        res.end();
      }
      else
      {
          console.log(err);
      }
      fs.unlinkSync(req.file.path);
    });
}

function loadSampleFile(req, res)
{
  fs.readFile('./samples/sample1.txt', {encoding: 'utf-8'}, function(err,data)
  {
      if (!err)
      {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      }
      else
      {
          console.log(err);
      }
      // fs.unlinkSync('./samples/sample1.txt');
  });
}

function loadSampleGenomicData(req, res)
{
  fs.readFile('./samples/sampleGenomicData.txt', {encoding: 'utf-8'}, function(err,data)
  {
      if (!err)
      {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      }
      else
      {
          console.log(err);
      }
      // fs.unlinkSync('./samples/sample1.txt');
  });
}

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
      console.log(response.statusCode) // Print the error
    }
  })

}

function loadPathway(req, res)
{
    var pathwayName = req.query.filename;
    fs.readFile('./samples/' + pathwayName, {encoding: 'utf-8'}, function(err,data)
    {
        if (!err)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
        else
        {
            res.writeHead(501, {'Content-Type': 'text/html'});
            res.write("Error retrieving pathway");
            res.end();
        }
        // fs.unlinkSync('./samples/sample1.txt');
    });
}

function getTemplateFileData(req, res)
{
    fs.readFile('./samples/sampleMeta.txt', {encoding: 'utf-8'}, function(err,data)
    {
        if (!err)
        {
            var outData = {};
            // By lines
            // Match all new line character representations
            var seperator = /\r?\n|\r/;
            var lines = data.split(seperator);
            var lastStudy = "";

            for(var i = 0; i < lines.length; i++)
            {
                var line = lines[i];
                if(line.indexOf("--") >= 0)
                {
                    if(outData[lastStudy] != undefined)
                        outData[lastStudy] = outData[lastStudy].sort();

                    lastStudy = line.substring(line.indexOf("--") + 2, line.length);
                    outData[lastStudy] = [];
                    continue;
                }
                else
                {
                    if (line.length > 0)
                        outData[lastStudy].push(line);
                }
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(outData));
            res.end();
        }
        else
        {
            console.log(err);
        }
        // fs.unlinkSync('./samples/sample1.txt');
    });
}

/*******************************
  GET Requests
********************************/
app.get('/',indexGetHandler);
app.get('/sampleGraph', loadSampleFile);
app.get('/pathway', loadPathway);
app.get('/sampleGenomicData', loadSampleGenomicData);
app.get('/getTemplateFileData', getTemplateFileData);


/*******************************
  POST Requests
********************************/
app.post('/loadGraph', multerInstance.single('graphFile'), loadGraphHandler);
app.post('/getBioGeneData', multerInstance.array(), biogeneDataHandler);


/*******************************
 Socket.io related chat functions
 ********************************/

io.on('connection', function(socket)
{
    var addedUser = false;
    var USER_DISCONNECTED_EVENT = "disconnect";
    var NEW_MESSAGE_EVENT = "newMessage";
    var USER_JOINED_EVENT = "userJoined";

    socket.on(NEW_MESSAGE_EVENT, function(data)
    {
        socket.broadcast.emit(NEW_MESSAGE_EVENT, data);
    });

    // when the client emits 'add user', this listens and executes
    socket.on(USER_JOINED_EVENT, function (username)
    {
        if (addedUser) return;

        // we store the username in the socket session for this client
        socket.userName = username;
        addedUser = true;

        console.log("User " + socket.userName  + " is connected");

        // echo globally (all clients) that a person has connected
        io.emit(USER_JOINED_EVENT,
        {
            username: socket.username
        });
    });

    socket.on(USER_DISCONNECTED_EVENT, function()
    {
        console.log("User " + socket.userName  + " is disconnected");
        socket.broadcast.emit(USER_DISCONNECTED_EVENT, "User " + socket.userName  + " is disconnected");
    });

});

/*******************************
  Server
 ********************************/
http.listen(APP_PORT, function ()
{
  console.log('TCGA Pathway Curation Tool up and running on port ' + APP_PORT);
});
