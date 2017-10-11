'use strict';

const assert = require('assert');
const catalog = require('./questioncatalog');

function _testSetup() {
  return new catalog.Catalog();
}

function verifyMemberStructure() {
  const catalog = _testSetup();
  const question = catalog.get("data.description");
  assert.equal((typeof question), "object");
  assert.equal((typeof question.tag), "string");
  assert.equal((typeof question.question), "string");
}

verifyMemberStructure();
