'use strict';

const fs = require('fs');
const questioncatalog = require('./questioncatalog');
const sharedquestions = require('./sharedquestions');

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

exports.Templates = Templates;
