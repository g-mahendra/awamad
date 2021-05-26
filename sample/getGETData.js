var express = require('express')
var app = express()
var port = '3000'
var host = '127.0.0.1'

app.use(express.static('public'));

app.get('/form.html', function (req, res) {
   res.sendFile(__dirname + "/" + "form.html");
})

/*app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };  
   console.log(response);  
   res.end(JSON.stringify(response));
})*/

app.get('/process_get', function (req, res) {
   res.send('<p>Username: ' + req.query['first_name'] + '</p><p>Lastname: ' + req.query['last_name'] + '</p>');
})

var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
})