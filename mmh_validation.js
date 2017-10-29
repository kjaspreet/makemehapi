var path = require('path')
var hapi = require('hapi')
var server = new hapi.Server()
var joi = require('joi')

var routeconfig = {
	path: '/chickens/{breed}',
	methos: 'GET',
	handler: myhandler,
	config:{
		validate: {
			params: {
				with: joi.string().required(),
				breed: joi.string().required()
			}
		}
	}
}

server.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

// server.route({path:'/breed',method:'GET',handler})

function myhandler(req,res){
	res(req.params.breed)
}

server.start(function(){
	console.log('Server running at:',server.info.uri)
})