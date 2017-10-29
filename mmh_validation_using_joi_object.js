var path = require('path')
var hapi = require('hapi')
var server = new hapi.Server()
var joi = require('joi')

server.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

server.route({
	path: '/login',
	method: 'POST',
	config:{
		handler: (req,res) => {
			res('login successful')
		},
		validate:{
			payload: joi.object({
				isGuest: joi.boolean().required(),
				username: joi.string().when('isGuest', { is: false, then: joi.required() }),
				password: joi.string().alphanum(),
				accessToken: joi.string().alphanum()
			})
			.options({allowUnknown: true})
			.without('password','accessToken')
		}
	}
})

server.start(function(){
	console.log('Server running at:',server.info.uri)
})