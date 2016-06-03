'use strict'; 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-daemon', error => {
	if (error) {
		return console.log('error while connecting on MongoDB');
	}
	console.log('connected on mongodb');
});