'use strict';


function QuestionSet(name='') {
  this._name = name;
  this.name = () => { return this._name; }
  this._questions = [];
  this.length = () => { return this._questions.length; }
}

QuestionSet.prototype.constructor = QuestionSet;

QuestionSet.prototype.add = function(question, answer = '') {
  let storedQuestion;
  storedQuestion = this._questions.find((element) => {
    if (element.tag == question.tag) {
      return element;
    }
  });
  if (!storedQuestion) {
    storedQuestion = question;
    this._questions.push(storedQuestion);
  }
  storedQuestion.answer = answer;
}

QuestionSet.prototype.getAnswer = function(tag) {
  let rec = this.getRecord(tag);
  if (rec) {
    return rec.answer;
  }
  else {
    return rec;
  }
}

QuestionSet.prototype.getRecord = function(tag) {
  let storedQuestion;
  storedQuestion = this._questions.find((element) => {
    if (element.tag == tag) {
      return element;
    }
  });
  return storedQuestion;
}

exports.QuestionSet = QuestionSet;
