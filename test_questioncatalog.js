'use strict';

const assert = require('assert');
const catalog = require('./questioncatalog');

const TEST_KEY = 'shared.opera-version'

function _testSetup() {
  return new catalog.Catalog();
}

function verifyMemberStructure() {
  const catalog = _testSetup();
  const question = catalog.get("description");
  assert.equal((typeof question), "object");
  assert.equal((typeof question.tag), "string");
  assert.equal((typeof question.question), "string");
}

function verifyTokenStripping() {
  const catalog = _testSetup();
  const question = catalog.get(('${' + TEST_KEY + '};'));
  assert.equal(question.tag, TEST_KEY);
}

verifyMemberStructure();
verifyTokenStripping();
