'use strict';

const fs = require('fs');

function Catalog() {
  let data = fs.readFileSync('templates/questions.json', 'utf8');
  let json = JSON.parse(data);
  this._questions = json.question_templates;
}

// question = { question: "question", tag: "tag" };
Catalog.prototype.get = function(key) {
  if (key.startsWith('${')) { key = key.slice(2); }
  if (key.endsWith('}!')) { key = key.slice(0, -2); }
  return this._questions.find((template) => {
    if (template.tag == key.trim()) {
      return template;
    }
  });
}

Catalog.prototype.constructor = Catalog;

exports.Catalog = Catalog;
