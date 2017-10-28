var hapi = require('hapi')
var server = new hapi.Server()

server.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

server.route({path:'/',method:'GET',handler})

function handler(req,res){
	res('Hello hapi')
}

server.start(function(){
	console.log('Server running at:',server.info.uri)
})