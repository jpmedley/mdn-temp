'use strict';

const fs = require('fs');
const path = require('path');
const questioncatalog = require('./questioncatalog');
const questionset = require('./questionset');

const reToken = /\${(?:data\.)[^}]+}!/g;
const catalog = new questioncatalog.Catalog();

function Manager(forMembers) {
  // this._qustionSets = [];
  this._questions = new questionset.QuestionSet();
  this._getQuestions(forMembers);
}

Manager.prototype.constructor = Manager;

Manager.prototype._getQuestions = function(forMembers) {
  const FLAGS = ['o','i','c','e','h','m','p'];
  const EXPANSIONS = ['overview','interface','constructor','event',
                      'handler','method','property'];
  const members = forMembers.split('-');
  // Assumes '' is always the first one. Dangerous.
  if (members[0] == '') { members.shift(); }
  let interfaceName;
  members.forEach((member, i) => {
    let first = member.charAt(0);
    // If first not in FLAGS, throw.
    if (first=='i') { interfaceName = (member.split(' '))[1]; }
    this._getFromTemplate(EXPANSIONS[i]);
  });


  // const members = forMembers.split('-');
  // // Assumes '' is always the first one. Dangerous.
  // if (members[0] == '') { members.shift(); }
  // if (!members[0].charAt(0) == 'i') { throw "The first flag must be '-i'."; }
  // const interfaceName = (members[0].split(' '))[1];
  // members.forEach((type) => {
  //   let types;
  //   switch (type.charAt(0)) {
  //     case 'o':
  //       this._questionSets.push(this._getQuestionSet(interfaceName, "overview", this._shared));
  //     case 'i':
  //       this._qustionSets.push(this._getQuestionSet(interfaceName, "interface", this._shared));
  //       break;
  //     case 'c':
  //       let constructorName = interfaceName + "()";
  //       this._qustionSets.push(this._getQuestionSet(constructorName, "constructor", this._shared));
  //       break;
  //     case 'e':
  //       types = type.slice(1).split(' ');
  //       types.forEach((type)=> {
  //         this._qustionSets.push(this._getQuestionSet(type, "event", this._shared));
  //       })
  //       break;
  //     case 'm':
  //       types = type.slice(1).split(' ');
  //       types.forEach((type)=> {
  //         this._qustionSets.push(this._getQuestionSet(type, "method", this._shared));
  //       })
  //       break;
  //     case 'p':
  //       types = type.slice(1).split(' ');
  //       types.forEach((type)=> {
  //         this._qustionSets.push(this._getQuestionSet(type, "property", this._shared));
  //       })
  //       break;
  //   }
  // });
}

Manager.prototype._getFromTemplate = function(templateName) {

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
