var express = require('express');
var path = require('path');
var helmet = require('helmet');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var request = require('request');
var qs = require("querystring");


var app = express();
// app.use(multer);
app.use(express.static('public'));
app.use('/node_modules/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/node_modules/cytoscape-panzoom', express.static(__dirname + '/node_modules/cytoscape-panzoom/'));
app.use('/node_modules/cytoscape-navigator', express.static(__dirname + '/node_modules/cytoscape-navigator/'));
app.use('/node_modules/qtip2', express.static(__dirname + '/node_modules/qtip2/'));
app.use('/node_modules/filesaverjs', express.static(__dirname + '/node_modules/filesaverjs/'));

var multerInstance = multer({dest:'./uploads/'});

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
/*******************************
  GET Requests
********************************/
app.get('/',indexGetHandler);
app.get('/sampleGraph', loadSampleFile);
app.get('/sampleGenomicData', loadSampleGenomicData);


/*******************************
  POST Requests
********************************/
app.post('/loadGraph', multerInstance.single('graphFile'), loadGraphHandler);
app.post('/getBioGeneData', multerInstance.array(), biogeneDataHandler);

app.listen(APP_PORT, function ()
{
  console.log('TCGA Pathway Curation Tool up and running on port ' + APP_PORT);
});
