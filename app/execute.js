'use strict';
const execa = require('execa'),
	client = require('restify').createJsonClient,
	 _ = require('lodash');

class Execute {

	parseScopeOptions(data) {
		let parse = {};
		data.forEach((value) => {
			switch (true) {
				case /^http/.test(value) : parse.host = value; break;
				case /^\//.test(value) : parse.path = value; break;
				case /[0-9]/.test(value) : parse.port = value; break;
			}

		});

		return parse;
	}

	curl() {

	}

	http(task) {
		let stringOptions = this.parseScopeOptions(task.scopeOptions.strings),
			numberOptions = this.parseScopeOptions(task.scopeOptions.numbers),
			url = (stringOptions.host + (numberOptions.port ? ':' + numberOptions.port : '' ));

		client({'url': url})
		.post(stringOptions.path, {'command': task.command.cmd, options: task.command.options}, (err, req, res, obj) => {
			console.log(obj);
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