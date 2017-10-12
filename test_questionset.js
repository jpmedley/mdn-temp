'use strict';

const assert = require('assert');
const questionset = require('./questionset');
const catalog = require('./questioncatalog');

const TEST_ANSWER = 'Mr. Spock';
const TEST_SINGLE_TAG = 'data.constructor';
const TEST_SHARED_TAG = 'data.shared.chrome-version';
const TEST_TAGS = [
  TEST_SINGLE_TAG, TEST_SHARED_TAG
]

const cat = new catalog.Catalog();

function _testSetup() {
  return new questionset.QuestionSet();
}

function testAddQuestion() {
  const set = _testSetup();
  const test = cat.get(TEST_SINGLE_TAG);
  set.add(test, "First call.");
  assert.equal(set.length(),1);
  set.add(test, "Second call.");
  assert.equal(set.length(),1);
}

function testGetAnswer() {
  const set = _testSetup();
  const test = cat.get(TEST_SINGLE_TAG);
  set.add(test, TEST_ANSWER);
  assert.equal(set.getAnswer(TEST_SINGLE_TAG), TEST_ANSWER);
}

testAddQuestion();
testGetAnswer();
