'use strict';
// mdn template -i interface [-m method method] [-p property property]
// mdn idl [idl_file | idl_folder]
// mdn list [idl_file | idl_folder]

var interfaceTemplate = './templates/interface.marko';

switch (process.argv[2]) {
	case 'template':
		//
		break;
	case 'idl':
		//
		break;
	case 'list':
		//
		break;
	case 'help':
		console.log('node mdn.js template -i interface [-m method method] [-p property property]');
		console.log('node mdn.js idl [idl_file | idl_folder]');
		console.log('node mdn.js list [idl_file | idl_folder]');
		break;
}

function idlToMDN(idlFile) {
	return new idl(idlFile)
		.then(idl => {
			
		})
}