'use strict';


function SharedQuestions() {
  this._questions = [];
  this.length = () => { return this._questions.length; }
}

SharedQuestions.prototype.constructor = SharedQuestions;

SharedQuestions.prototype.add = function(question, answer = '') {
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

SharedQuestions.prototype.getAnswer = function(tag) {
  let rec = this.getRecord(tag);
  if (rec) {
    return rec.answer;
  }
  else {
    return rec;
  }
}

SharedQuestions.prototype.getRecord = function(tag) {
  let storedQuestion;
  storedQuestion = this._questions.find((element) => {
    if (element.tag == tag) {
      return element;
    }
  });
  return storedQuestion;
}

exports.SharedQuestions = SharedQuestions;
