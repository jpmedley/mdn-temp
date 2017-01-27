'use strict';

var utils = require('./utils');

function test_getQuestions() {
	var temp_path = 'templates/interface.marko';
	utils.getQuestions(temp_path)
		.then(function(questions) {
			for (var q in questions) {
				console.log(questions[q][0]);
				console.log("\t" + questions[q][1]);
			}
		});
}

function test_getTokens() {
	var temp_path = 'templates/interface.marko';
	utils.getTokens(temp_path)
		.then(function(tokens) {
			for (var t in tokens) {
				console.log(tokens[t]);
			}
		});
}

test_getQuestions();
test_getTokens();