'use strict';

var utils = require('./utils');

function test_getQuestion() {
	utils.getQuestion('data.sh_overview-page-name')
	.then(q => {
		console.log('\nTesting getQuestion()')
		console.log('Testing: ' + 'data.sh_overview-page-name');
		console.log('\t' + q);
	});
	utils.getQuestion('${data.sh_overview-page-name}!')
	.then(q => {
		console.log('\nTesting getQuestion()')
		console.log('Testing: ' + '${data.sh_overview-page-name}!');
		console.log('\t' + q);
	})
}

function test_getQuestionCatalog() {
	utils.getQuestionCatalog()
	.then(questions => {
		console.log('\nTesting getQuestionCatalog()');
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
		console.log('\nTesting getTokens()');
		for (var t in tokens) {
			console.log(tokens[t]);
		}
	})
	.catch(e => {
		console.log(e);
	});
}

function test_getQuestionSet() {
	var temp_path = 'templates/property.marko';
	utils.getQuestionSet(temp_path)
	.then(questions => {
		console.log('\nTesting getQuestionSet()');
		for (var q in questions) {
			console.log(questions[q]);
		}
	})
	.catch(e => {
		console.log(e);
	});
}

console.log();
console.log("Starting tests.");
test_getQuestion();
console.log();
test_getQuestionCatalog();
console.log();
test_getTokens();
console.log();
test_getQuestionSet();