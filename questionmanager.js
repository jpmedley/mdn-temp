'use strict';

const fs = require('fs');
const path = require('path');
const questioncatalog = require('./questioncatalog');
const questionset = require('./questionset');

const reToken = /\${(?:data\.)[^}]+}!/g;
const catalog = new questioncatalog.Catalog();

function Manager(forMembers) {
  this._qustionSets = [];
  this._shared = new questionset.QuestionSet();
  this._getQuestions(forMembers);
}

Manager.prototype.constructor = Manager;

Manager.prototype._getQuestions = function(forMembers) {
  const members = forMembers.split('-');
  if (members[0] == '') { members.shift(); }
  const interfaceName = members.find((member) => {
    return member.charAt(0) == "i";
  })[1];
  members.forEach((type) => {
    switch (type.charAt(0)) {
      case 'i':
        this._qustionSets.push(this._getQuestionSet(interfaceName, "interface", this._shared));
        break;
      case 'c':
        let constructorName = interfaceName + "()";
        this._qustionSets.push(this._getQuestionSet(constructorName, "constructor", this._shared));
        break;
      case 'e':
        types = type.slice(1).split(' ');
        types.forEach((type)=> {
          this._qustionSets.push(this._getQuestionSet(type, "event", this._shared));
        })
        break;
      case 'm':
        types = type.slice(1).split(' ');
        types.forEach((type)=> {
          this._qustionSets.push(this._getQuestionSet(type, "method", this._shared));
        })
        break;
      case 'p':
        types = type.slice(1).split(' ');
        types.forEach((type)=> {
          this._qustionSets.push(this._getQuestionSet(type, "property", this._shared));
        })
        break;
    }
  });
}

Manager.prototype._getQuestionSet = function(forMember, templateName, shared) {
  let newSet = null;
  const aPath = path.join("templates", (templateName + '.marko'));
  const template = fs.readFileSync(aPath, 'utf8');
  const tokens = template.match(reToken);
  if (tokens) {
    newSet = new questionset.QuestionSet(forMember);
    tokens.forEach((token) => {
      let question = catalog.get(token);
      if (token.includes('data.shared')) {
        // shared.add(question);
        console.log(question);
      }
      else {
        // newSet.add(question);
        console.log(question);
      }
    })
  }
  return newSet;
}

exports.Manager = Manager;
