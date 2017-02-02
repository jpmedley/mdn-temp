'use strict';

var fs = require('fs');

var questions = [];

function getQuestion(forToken) {
	if (forToken.startsWith('${')) {
		forToken = forToken.slice(2, -2);
	}
	return getQuestions()
		.then(questions => {
			return questions.find(function(element, index, array){
				return element[0] === forToken;
			});
		});
}

function getQuestions() {
	return new Promise(function(resolve, reject) {
		if (questions.length > 0) {
			resolve(questions);
		}
		var questionCatalog = 'templates/questions.cat';
		var reQuestions = /<!--\s+([^>]+)\s+-->/g;
		fs.readFile(questionCatalog, 'utf8', function(err, data) {
			if (err) { reject(err); return; };
			var matched = data.match(reQuestions);
			if (matched) {
				matched.forEach(function(question) {
					question = question.substring(4, question.length - 3).trim();
					question = question.split(';');
					question[0] = question[0].trim();
					question[1] = question[1].trim();
					if (!questions.includes(question)) {
						questions.push(question);
					};
				});
				resolve(questions);
			} else {
				resolve(null);
			};
		});
	});
}

function getTokens(forfile) {
	return new Promise(function(resolve, reject) {
		var tokens = [];
		// var reToken = /\${([^}]+)}!/g;
		var reToken = /\${(?:data\.)[^}]+}!/g;
		fs.readFile(forfile, 'utf8', function(err, data) {
			if (err) { reject(err); return; };
			var matched = data.match(reToken);
			if (matched) {
				matched.forEach(function(token) {
					if (!tokens.includes(token)) {
						tokens.push(token);
					};
				});
				resolve(tokens);
			} else {
				resolve(null);
			};
		});
	});
}

exports.getQuestion = getQuestion;
exports.getQuestions = getQuestions;
exports.getTokens = getTokens;