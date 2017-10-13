'use strict';

const fs = require('fs');
const path = require('path');
const questioncatalog = require('./questioncatalog');
const sharedquestions = require('./sharedquestions');

const TEMPLATES = 'templates';

const reToken = /\${(?:data\.)[^}]+}!/g;

function Templates(forMembers) {

}

Templates.prototype.constructor = Templates;

Templates.prototype._getSharedQuestions = function(forMembers) {
  const templateTypes = forMembers.split('-');
  templateTypes.forEach((type) => {
    switch (type.charAt(0)) {
      case '-c':
        //
        break;
      case '-e':
        //
        break;
      case '-i':
        //
        break;
      case '-m':
        //
        break;
      case '-p':
        //
        break;
    }
  })
}

Templates.prototype._getQuestionsFor = function(templateType) {
  const path = path.join(TEMPLATES, (templateType + 'marko'));
  const template = fs.readFileSync(path, 'utf8');
  const tokens = template.match(reToken);
  if (tokens) {
    tokens.forEach((token) => {
      if (token.includes('data.shared')) {
        // Put it in the shared list.
      }
      else {
        // Put it in a list for just the current member.
      }
    })
  }
}

exports.Templates = Templates;
