'use strict';


function AnswerSet(name='') {
  this._name = name;
  this.name = () => { return this._name; }
  this._questions = [];
  this.length = () => { return this._questions.length; }
}

AnswerSet.prototype.constructor = AnswerSet;

AnswerSet.prototype.add = function(question, answer = '') {
  let storedQuestion;
  storedQuestion = this._questions.find((found) => {
    if (found.tag == question.tag) {
      return found;
    }
  });
  if (!storedQuestion) {
    storedQuestion = question;
    this._questions.push(storedQuestion);
  }
  storedQuestion.answer = answer;
}

AnswerSet.prototype.getAnswer = function(tag) {
  let rec = this.getRecord(tag);
  if (rec) {
    return rec.answer;
  }
  else {
    return rec;
  }
}

AnswerSet.prototype.getRecord = function(tag) {
  let storedQuestion;
  storedQuestion = this._questions.find((found) => {
    if (found.tag == tag) {
      return found;
    }
  });
  return storedQuestion;
}

exports.AnswerSet = AnswerSet;
