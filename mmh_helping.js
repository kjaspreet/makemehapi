var hapi = require('hapi');
var server = new hapi.Server();
var Vision = require('vision');
var path = require('path');

server.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

server.register(Vision,function(err){
	if(err) throw err;
});

server.views({
	path:path.join(__dirname,'templates'),
	engines:{
		html:require('handlebars')
	},
	helpersPath:path.join(__dirname,'helpers')
	});

server.route({path: '/',method:'GET',handler:{
	view: 'index.html'
}})

server.start(function(){
	console.log('Server running at:',server.info.uri)
})
