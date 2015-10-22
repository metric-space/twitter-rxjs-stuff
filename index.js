require("./lib/global");


var app   =  require('express')(),
    https =  require('https'),
    fs    =  require('fs'),
    path  =  require('path'),
    serveStatic = require('serve-static'),
    config = include("config");
    twitter = include('API/twitter')

https.createServer({
	key:fs.readFileSync('key.pem'),
	cert:fs.readFileSync('cert.pem')
},app).listen(config.server.port);

app.set('json spaces', 40);

app.use(serveStatic('frontEnd/'));

app.get('/',function(req,res){
	res.header('Content-type','text/html');	
	res.sendFile(path.join(__dirname,'index.html'));
})


// main place where the twitter-api interaction takes place
app.get('/:keyword',function(req,res){
	console.log(req.params.keyword)
	twitter.search(req.params.keyword).then(function(a){
		res.json(a);	
	})	
})

	
