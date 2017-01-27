'use strict';

var fs = require('fs');

function getQuestions(forfile) {
	return new Promise(function(resolve, reject) {
		var questions = [];
		var reQuestions = /<!--\s+([^>]+)\s+-->/g;
		fs.readFile(forfile, 'utf8', function(err, data) {
			if (err) { reject(err); return; };
			var matched = data.match(reQuestions);
			if (matched) {
				matched.forEach(function(question) {
					question = question.substring(4, question.length - 3).trim();
					question = question.split(';');
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
		var reToken = /\${([^}]+)}!/g;
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

exports.getQuestions = getQuestions;
exports.getTokens = getTokens;