var express = require('express');
var path = require('path');
var helmet = require('helmet');

var app = express();
app.use(helmet());
app.use(express.static('public'));
app.use('/node_modules/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/node_modules/cytoscape-panzoom', express.static(__dirname + '/node_modules/cytoscape-panzoom/'));

var APP_PORT = 3000;

//get handler for index.html
function indexGetHandler(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
}

/*******************************
  GET Requests
********************************/
app.get('/',indexGetHandler);


/*******************************
  POST Requests
********************************/

app.listen(APP_PORT, function ()
{
  console.log('Example app listening on port ' + APP_PORT);
});
