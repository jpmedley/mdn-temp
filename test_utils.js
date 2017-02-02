'use strict';

var utils = require('./utils');

function test_getQuestion() {
	utils.getQuestion('data.sh_overview-page-name')
		.then(q => {
			console.log('Testing: ' + 'data.sh_overview-page-name');
			console.log('\t' + q);
		});
	utils.getQuestion('${data.sh_overview-page-name}!')
		.then(q => {
			console.log('Testing: ' + '${data.sh_overview-page-name}!');
			console.log('\t' + q);
		})
}

function test_getQuestions() {
	utils.getQuestions()
		.then(questions => {
			for (var q in questions) {
				console.log(questions[q][0]);
				console.log("\t" + questions[q][1]);
			}
		})
		.catch(e => {
			console.log(e);
		});
}

function test_getTokens() {
	// var temp_path = 'templates/interface.marko';
	var temp_path = 'templates/property.marko';
	utils.getTokens(temp_path)
		.then(tokens => {
			for (var t in tokens) {
				console.log(tokens[t]);
			}
		});
}

test_getQuestion();
test_getQuestions();
test_getTokens();