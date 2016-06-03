'use strict';
const Task = require(__base + 'schemas/task');

module.exports = {
	'create': (req, res) => {
		new Task(req.params)
		.save()
		.then((task) => {
			return res.send(200, task);
		})
		.catch(reason => {
			return res.send(500, {
				'method': 'Task.create',
				'error': reason
			});
		});
	},
	'read': (req, res) => {
		Task.find().exec((err, tasks) => {
			return res.send(200, tasks)
		})
		.catch(reason => {
			return res.send(500, {
				'method': 'Task.read',
				'error': reason
			});
		});
	}
};