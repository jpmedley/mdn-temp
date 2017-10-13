'use strict';

const assert = require('assert');
const qman = require('./questionmanager');

const TEST_ARGS = '-i FootGun -c -m load() fire() -p bulletCount -e onfire onload';

function _testSetup() {
  return new qman.Manager(TEST_ARGS);
}

function RunTest() {
  const manager = _testSetup();
}

RunTest();
