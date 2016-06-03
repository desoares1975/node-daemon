'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  TaskSchema = new Schema({
	'name': {
		'type': String,
		'required': true,
		'unique': true
	},
	'executionType': {
		'type': String,
		'enum': ['interval', 'agended']
	},
	'command': {
		'cmd': {
			'type': String,
			'required': true
		},
		'parameters': [String],
		'options': {
			'cwd': {
				'type': String,
				'default': '~/'
			},
			'timeout': {
				'type': Number,
				'default': 0
			}
		}
	},
	'active': {
		'type': Boolean,
		'default': true
	},
	'interval': Schema.Types.Mixed,
	'metter': [Schema.Types.Mixed],
	'history': Schema.Types.Mixed
});

module.exports = mongoose.model('Task', TaskSchema);