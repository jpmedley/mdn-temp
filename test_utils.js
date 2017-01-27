'use strict';

var utils = require('./utils');

function test_getQuestions() {
	var temp_path = 'templates/interface.marko';
	utils.getQuestions(temp_path)
		.then(function(questions) {
			console.log(questions);

		});
}

function test_getTokens() {
	var temp_path = 'templates/interface.marko';
	utils.getTokens(temp_path)
		.then(function(tokens) {
			console.log(tokens);
		});
}

test_getQuestions();
// test_getTokens();