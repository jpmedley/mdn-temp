'use strict';

const fs = require('fs');

function Catalog() {
  let data = fs.readFileSync('templates/questions.cat', 'utf8');
  let lines = data.split('\n');
  if (lines[lines.length -1].trim() == '') { lines.pop(); }
  let rules = lines.map((line) => {
    let parts = line.split('--');
    return parts[1];
  });
  this._questions = rules.map((rule) => {
    let parts = rule.split(';');
    let question = {
      tag: parts[0].trim(),
      question: parts[1].trim()
    }
    return question;
  });
}

Catalog.prototype.get = function(key) {
  return this._questions.find((element) => {
    if (element.tag == key.trim()) {
      return element;
    }
  });
}

Catalog.prototype.constructor = Catalog;

exports.Catalog = Catalog;
