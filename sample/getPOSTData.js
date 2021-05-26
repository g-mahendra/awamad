var express = require('express')
var app = express()
const cors = require('cors')
var port = '3000'
var host = '127.0.0.1'

// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.json())
app.use(cors())
app.use(express.static('public'));
  
app.get('/form2.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "form2.html" );  
})

app.post('/process_post', function (req, res) {  
response = {  
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };  
   console.log(response);  
   res.end(JSON.stringify(response));
})

/*app.get('/process_get', function (req, res) {  
res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');
})*/

	var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log("Example app listening at http://%s:%s", host, port)
})  