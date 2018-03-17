var express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());


app.get('/',function(req, res) { res.sendFile('shortner.html',{root:__dirname}); });

app.post('/short',function(req, res) {
	var url = req.body.url;
	var key = req.body.key;
	var time_stamp = Date();
	console.log(url+ " " + key + " " + time_stamp);
});

app.get('/*',function(req, res) { res.send('404 error  | Page not found'); });


app.listen('3000',function() { console.log('Server is up and running'); });