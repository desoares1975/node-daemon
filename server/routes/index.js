'use strict';
const tasks = require('./tasks');

function routes(server) {
	server.get('/', (req, res) => { return res.send('ok');});
	server.post('/tasks', tasks.create);
	server.get('/tasks', tasks.read);
}

module.exports = routes;