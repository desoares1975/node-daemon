'use strict';
const execa = require('execa');
const client = require('restify').createJsonClient;

class Execute {

	curl() {

	}

	http(task) {
		client({'url': task.scopeOptions.host})
		.post(task.scopeOptions.path, task.scopeOptions.data, (err, req, res, obj) => {
			console.log(err, req, res, obj);
		});
	}

	local(task) {
		let cmd = task.command;
		execa.shell(cmd.cmd, cmd.parameters, cmd.options).then(result => {
			console.log(result);
		});
	}

	ssh() {

	}

}

module.exports = Execute;