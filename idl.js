'use strict';

var fs = require('fs');
var idl = require('webidl2');

function Interface(idl_path) {
	var me = this;
	return new Promise(function(resolve, reject) {
		fs.readFile(idl_path, 'utf8', function(err, data) {
			me.raw = data;
			me.tree = idl.parse(data);
			me.fragments = me.tree[0].extAttrs;
			if (me.tree) {
				resolve(me);
				return;
			}
			if (err) {
				reject(err);
				return;
			}
		})
	})
}

Interface.prototype.Constructor = function() {
	return getSub('Constructor', this);
}

Interface.prototype.Events = function() {
	
}

Interface.prototype.Interface = function() {
	return this.tree[0].name;
}

Interface.prototype.Methods = function() {

}

Interface.prototype.Properties = function() {
	// return this.tree[0].members;
	var properties = [];
	for (var i = 0; i < this.tree[0].members.length; i++) {
		if (this.tree[0].members[i].type == 'attribute') {
			properties.push(this.tree[0].members);
		}
	}
	return properties;
}

function getSub(find, in_tree) {
	for (var i = 0; i < in_tree.fragments.length; i++) {
		if (in_tree.fragments[i].name == find) {
			return in_tree.fragments[i].arguments;
			break;
		}
	}
}

exports.Interface = Interface;