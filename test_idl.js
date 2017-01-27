'use strict';

var idl = require('./idl');

function testSetup() {
	var idlFile = 'in/MediaMetadata.idl';
	return new idl('in/MediaMetadata.idl')
		.then(function(idl) {
			console.log(idl);
			return idl;
		});
}

function test_constructor() {
	testSetup()
		.then(function(idl) {
			console.log(idl.Constructor());
		})
		.catch(function(r) {
			console.log(r);
		});
}

function test_properties() {
	testSetup()
		.then(function(idl) {
			console.log(idl.Properties());
		})
		.catch(function(r) {
			console.log(r);
		})
}

test_constructor();
test_properties();