var hapi = require('hapi')
var server = new hapi.Server()
var Inert = require('inert')
var path = require('path')

server.register(Inert,function(err){
	if(err) throw err;
})

server.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

server.route({path: '/foo/bar/baz/{file}',method:'GET',handler:{
	directory: {path: path.join(__dirname,'public')}
}})

server.start(function(){
	console.log('Server running at:',server.info.uri)
})
