'use strict';

const assert = require('assert');
const answerset = require('./answerset');
const catalog = require('./questioncatalog');

const TEST_ANSWER = 'Mr. Spock';
const TEST_SINGLE_TAG = 'constructor';
const TEST_SHARED_TAG = 'shared.chrome-version';
const TEST_TAGS = [
  TEST_SINGLE_TAG, TEST_SHARED_TAG
]

const cat = new catalog.Catalog();

function _testSetup(options={}) {
  return new answerset.AnswerSet(options.memberName);
}

function testAddQuestion() {
  const set = _testSetup();
  const test = cat.get(TEST_SINGLE_TAG);
  set.add(test, "First call.");
  assert.equal(set.length(),1);
  set.add(test, "Second call.");
  assert.equal(set.length(),1);
}

function testConstructorParams() {
  let options = { memberName: "shootFoot()" }
  const set = _testSetup(options);
  assert.equal(set.name(), "shootFoot()");
}

function testGetAnswer() {
  const set = _testSetup();
  const test = cat.get(TEST_SINGLE_TAG);
  set.add(test, TEST_ANSWER);
  assert.equal(set.getAnswer(TEST_SINGLE_TAG), TEST_ANSWER);
}

function testNoAnswerYet() {
  const set = _testSetup();
  const test = cat.get('data.spock');
  assert.equal(set.getAnswer(test), undefined);
}

testAddQuestion();
testConstructorParams();
testGetAnswer();
testNoAnswerYet();
