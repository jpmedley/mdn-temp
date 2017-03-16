'use strict';

var fs = require('fs');

var questions = [];
var reToken = /\${(?:data\.)[^}]+}!/g;

function getQuestion(forToken) {
	if (forToken.startsWith('${')) {
		forToken = forToken.slice(2, -2);
	}
	return getQuestionCatalog()
	.then(questions => {
		return questions.find(function(element, index, array){
			return element[0] === forToken;
		});
	});
}

function getTokens(forFile) {
	return new Promise(function(resolve, reject) {
		var tokens = [];
		fs.readFile(forFile, 'utf8', function(err, data) {
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

function getQuestionSet(forFile) {
	return new Promise(function(resolve,reject) {
		return getQuestionTokenPairs(forFile)
			.then(pairs => {
				var qtLists = [[],[]];
				for (var p in pairs) {
					qtLists[0].push(pairs[p][0]);
					qtLists[1].push(pairs[p][1])
				}
				resolve(qtLists);
			});
	})
}

function getQuestionTokenPairs(forFile) {
	return new Promise((resolve,reject) => {
			getTokens(forFile)
				.then(tokens => {
					var questionSet = [];
					tokens.forEach(token => {
						// [[a1,a2],[b1,b2],[c1,c2]]
						// ques = [a1,a2]
						// [[a1,b1,c1],[a2,b2,c2]]
						var ques = getQuestion(token);
						questionSet.push(ques);
						// questionSet.push(getQuestion(token));
					});
					Promise.all(questionSet)
						.then(questionSet => {
							resolve(questionSet)
						});
				})
	})
}

function getQuestionCatalog() {
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

exports.getQuestion = getQuestion;
exports.getQuestionCatalog = getQuestionCatalog;
exports.getQuestionSet = getQuestionSet;
exports.getQuestionTokenPairs = getQuestionTokenPairs;
exports.getTokens = getTokens;