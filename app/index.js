'use strict';

const execute = new (require(__base + 'app/execute'))();
execute.local({command: {cmd: 'ls', paramethers: ['-la'], options: {cwd: '~/', timeout: 1000}}});
execute.http({
	scopeOptions:
	{
		strings: ['http://localhost', '/test'],
		numbers: [9000]
	},
	command: {
		cmd: 'ls',
		paramethers: ['-la'],
		options: {
			cwd: '~/',
			timeout: 3000
		}
	}
})