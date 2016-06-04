'use strict';

const execute = new (require(__base + 'app/execute'))();
execute.local({command: {cmd: 'ls', paramethers: ['-la'], options: {cwd: '~/', timeout: 1000}}});
execute.http({scopeOptions: {host: 'http://localhost:9000', path: 'test', data: {'hello': 'world'}}, command: {cmd: 'ls', paramethers: ['-la'], options: {cwd: '~/', timeout: 1000}}})