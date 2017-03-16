'use strict';
// mdn template [-i interface] [-m method method] [-p property property]
// mdn idl [idl_file | idl_folder]
// mdn list [idl_file | idl_folder]


require('marko/node-require');

var utils = require('./utils');
var prompt = require('prompt');

const TEMPLATES = 'templates/';

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
	let current = ''
	for (let i = 0; i < args.length; i++) {
		if (args[i].startsWith('-')) {
			current = args[i];
			console.log("processing for " + current);
			continue;
		}
		switch (current) {
			case '-i':
				// console.log(args[i]);
				createFile('interface', args[i]);
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

// START HERE: This doesn't really work. Find out why.
function createFile(template, name) {
	// Get template for given type
	var template = TEMPLATES + template + ".marko";
	// Get questions and prompt user for answers
	utils.getQuestionSet(template)
		.then(questions => {
			prompt.start();
			prompt.get(questions, function(err, result) {
				for (var r in result) {
					console.log(r + ": " + result[r]);
				}
			})


			// for (var q in questions) {
			// 	prompt.start();
			// 	prompt.get(q, function(err, result) {
			// 		for (var r in result) {
			// 			console.log(r + result[r]);
			// 		}
			// 	})
			// }
		})
	// Create the stream for output
	// Output the result
}