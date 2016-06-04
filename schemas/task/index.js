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
		'enum': ['interval', 'scheduled', 'ordered']
	},
	'scope': {
		'type': String,
		'enum': ['curl', 'http', 'local', 'ssl'],
		'default': 'local'
	},
	'scopeOptions': {
		'host': String,
		'path': String,
		'number': Number,
		'array': [Schema.Types.Mixed],
		'object': Schema.Types.Mixed
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
	'perks': {
		'overloadble': {
			'type': Boolean,
            'default': false
		},
		'exclusive':{
			'type': Boolean,
            'default': false
		},
        'killable': {
            'type': Boolean,
            'default': true
        },
        'forceble': {
            'type': Boolean,
            'default': true
        },
        'stoppable': {
            'type': Boolean,
            'default': true
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