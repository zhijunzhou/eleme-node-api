var config = require('../config');


exports.output = function output(message) {
	if(config.debug) {
		console.log(message);
	}
};