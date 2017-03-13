'use strict';
// mdn template [-i interface] [-m method method] [-p property property]
// mdn idl [idl_file | idl_folder]
// mdn list [idl_file | idl_folder]

var utils = require('./utils');
var prompt = require('prompt');

var interfaceTemplate = './templates/interface.marko';
var propertyTemplate = './templates/property.marko';

switch (process.argv[2]) {
	case 'template':
		process.argv.shift();
		process.argv.shift();
		process.argv.shift();
		console.log(process.argv);
		template(process.argv);
		break;
	case 'idl':
		//
		break;
	case 'list':
		//
		break;
	case 'help':
		console.log('node mdn.js template [-i interface] [-m method method] [-p property property]');
		console.log('node mdn.js idl [idl_file | idl_folder]');
		console.log('node mdn.js list [idl_file | idl_folder]');
		break;
}

function template(args) {
	// START HERE: Start fleshing out processing of actual interface items.
	console.log(args[0]);
	let current = ''
	for (let i = 0; i < args.length; i++) {
		if (args[i].startsWith('-')) {
			current = args[i];
			console.log("processing for " + current);
			continue;
		}
		switch (current) {
			case '-i':
				console.log(args[i]);
				break;
			case '-m':
				console.log(args[i]);
				break;
			case '-p':
				console.log(args[i]);
				break;
		}
	}
}