var express = require('express');
var path = require('path');
var helmet = require('helmet');
var bodyparser = require('simple-bodyparser');

var app = express();
app.use(helmet());
app.use(express.static('public'));
app.use(bodyparser());
app.use('/node_modules/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/node_modules/cytoscape-panzoom', express.static(__dirname + '/node_modules/cytoscape-panzoom/'));
app.use('/node_modules/filesaverjs', express.static(__dirname + '/node_modules/filesaverjs/'));


var APP_PORT = 3000;

//get handler for index.html
function indexGetHandler(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
}

/*******************************
  POST Handlers
********************************/
function loadGraphHandler(req, res)
{
  console.log(req.body);
  res.send('A Gentle Hello from server');
}

/*******************************
  GET Requests
********************************/
app.get('/',indexGetHandler);


/*******************************
  POST Requests
********************************/
app.post('/loadGraph', loadGraphHandler);

app.listen(APP_PORT, function ()
{
  console.log('Example app listening on port ' + APP_PORT);
});
