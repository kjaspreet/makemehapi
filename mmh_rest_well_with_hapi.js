var hapi = require('hapi')
var server = new hapi.Server()

server.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

server.route({path:'/{name}',method:'GET',handler})

function handler(req,res){
	// console.log(req.params.name)
	res('Hello ' + req.params.name)

}

server.start(function(){
	console.log('Server running at:',server.info.uri)
})