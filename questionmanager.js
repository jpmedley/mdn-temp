'use strict';

require('marko/node-require');
const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const questioncatalog = require('./questioncatalog');
const answerset = require('./answerset');

// It looks like compiling these blows the stack somewhere in interface.
// const constructor_t = require('./templates/constructor.marko');
// const event_t = require('./templates/event.marko');
// const handler_t = require('./templates/handler.marko');
// const interface_t = require('./templates/interface.marko');
// const method_t = require('./templates/method.marko');
// const overview_t = require('./templates/overview.marko');
// const property_t = require('./templates/property.marko');

const TEMPS = './templates';
const reToken = /\${[^}]+}!/g;
const catalog = new questioncatalog.Catalog();

function Manager() {
  this._catalog = new questioncatalog.Catalog();
  this.answerSet = new answerset.AnswerSet();
  this._template;
  this._schemaMembers = "";
}

Manager.prototype.constructor = Manager;

Manager.prototype._addToSchema = function(template) {
  if (this._schemaMembers != '') { this._schemaMembers += "," }
  this._schemaMembers += '"' + template.question + '": { "required": "' + template.required + '","tag": "' + template.tag + '"" }';
}

Manager.prototype._schemaToJSON = function() {
  let schema = '{ "properties": {' + this._schemaMembers + '} }';
  return JSON.parse(schema);
}

Manager.prototype.getAnswers = function(pageType, memberName) {
  if (this._template) {
    // Throw error. Last set of answers not written to file.
  }
  const templatePath = path.join("templates", (pageType + ".marko"));
  this._template = fs.readFileSync(templatePath, 'utf8');
  const tokens = (() => {
    let uniqueTokens = new Array();
    let tokens = this._template.match(reToken);
    tokens.forEach((token) => {
      if (!uniqueTokens.includes(token)) {
        uniqueTokens.push(token);
      }
    })
    return uniqueTokens;
  })();
  if (tokens) {
    tokens.forEach((token) => {
      let question = this._catalog.get(token);
      let answerObj = this.answerSet.getRecord(question.tag) || question;
      this._addToSchema(answerObj);
    });
    this._askQuestions();
  }
}

Manager.prototype.writeFile = function(named) {
  const outPath = path.join("out", (named + ".html"))
  // Do the substitution work.
  // Save the file.
  this._template = undefined;
}

Manager.prototype._askQuestions = function() {
  prompt.start();
  let jschema = this._schemaToJSON();
  prompt.get(jschema, (err, result) => {
    this.answerSet.add(result, '');
  });
  prompt.stop = () => {
    if (prompt.stopped || !prompt.started) {
      return;
    }
  }
}

exports.Manager = Manager;
