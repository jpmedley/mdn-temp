'use strict';


function QuestionSet() {
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
  console.log(storedQuestion);
  console.log(this._questions.length);
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

// QUESTION: Why doesn't this return a record? It does in add().
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
