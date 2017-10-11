'use strict';
// mdn template [-i interface] [-m method method] [-p property property] [-c]

require('marko/node-require');

var utils = require('./utils');
var prompt = require('prompt');

var question = [];

const TEMPLATES = 'templates/';

switch (process.argv[2]) {
	case 'template':
		process.argv.shift();
		process.argv.shift();
		process.argv.shift();
		// Ask if user needs an interface page. If no, remove from args.
		// Later merge with walker and ping the interface for the answer.
		console.log(process.argv);
		template(process.argv);
		break;
	case 'list':
		//
		break;
	case 'help':
		console.log('node mdn.js template [-i interface] [-m method method] [-p property property]');
		break;
}

function template(args) {
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

function createFile(template, name) {
	// Get template for given type
	var template = TEMPLATES + template + ".marko";
	// Get questions and prompt user for answers
	utils.getQuestionSet(template)
		.then(questions => {
			prompt.start();
			prompt.get(questions[1], function(err, result) {
				// START HERE: How to I connect result with my template tokens?
				// * questions[] is out of scope at this point.
				// * Can use prompt.history() this b/c prompt.get() is async.
				// 3/31: May have to abandon the prompt module. The callback
				//   puts me in a scope/access dead end I can't get out of.
				for (var r in result) {
					console.log(r + ": " + result[r]);
				}
			})
		})
	// Create the stream for output
	// Output the result
}
