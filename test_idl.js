'use strict';

var idl = require('./idl');

function testSetup() {
	var idlFile = 'in/MediaMetadata.idl';
	return new idl.Interface('in/MediaMetadata.idl')
		.then(function(idl) {
			return idl;
		});
}

function test_constructor() {
	testSetup()
		.then(function(idl) {
			console.log(idl.Constructor());
		})
		.catch(function(e) {
			console.log(e);
		});
}

function test_properties() {
	testSetup()
		.then(function(idl) {
			console.log(idl.Properties());
		})
		.catch(function(e) {
			console.log(e);
		})
}

test_constructor();
test_properties();