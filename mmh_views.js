var hapi = require('hapi');
var server = new hapi.Server();
var Vision = require('vision');
var path = require('path');

server.register(Vision,function(err){
	if(err) throw err;
});

server.views({
	engines:{
		html:require('handlebars')
	},
	path: path.join(__dirname,'templates')
});

server.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

server.route({path: '/{name?}',method:'GET',handler:{
	view:"index.html"
}})

server.start(function(){
	console.log('Server running at:',server.info.uri)
})
