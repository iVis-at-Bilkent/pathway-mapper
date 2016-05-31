var express = require('express');
var path = require('path');
var helmet = require('helmet');
var multer = require('multer');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(multer({dest:'./uploads/'}).single('graphFile'));
app.use(helmet());
app.use(express.static('public'));
app.use('/node_modules/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/node_modules/cytoscape-panzoom', express.static(__dirname + '/node_modules/cytoscape-panzoom/'));
app.use('/node_modules/qtip2', express.static(__dirname + '/node_modules/qtip2/'));
app.use('/node_modules/filesaverjs', express.static(__dirname + '/node_modules/filesaverjs/'));


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
  // console.log(req.body) // form fields
  console.log(req.file) // form files

  fs.readFile(req.file.path, {encoding: 'utf-8'}, function(err,data)
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
      fs.unlinkSync(req.file.path);
  });

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
