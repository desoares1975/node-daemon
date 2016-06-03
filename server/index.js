'use strict';
const restify = require('restify');
const server = restify.createServer();

server.use(restify.bodyParser());
server.listen(3001, () => {
	console.log('Server up and running');
});
require('../schemas');
require('./routes')(server);