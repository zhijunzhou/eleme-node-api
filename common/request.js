var config = require('../config');
var rp 	   = require('request-promise');

exports.request = function (url) {
	var options = {
	    uri:  url,
	    method: 'GET',
	    headers: {
	        'Content-Type': config.contentType
	    }
	};
	return rp(options);
};