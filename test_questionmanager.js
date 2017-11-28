'use strict';

const assert = require('assert');
const qman = require('./questionmanager');

const TEST_ARGS = '-o -i FootGun -c -e FireEvent LoadEvent -h onfire onload -m load() fire() -p bulletCount caliber';

function _testSetup() {
  return new qman.Manager(TEST_ARGS);
}

function RunTest() {
  const manager = _testSetup();
}

RunTest();
