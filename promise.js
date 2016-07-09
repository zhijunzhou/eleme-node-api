var config = require('./config');
var rp = require('request-promise');
var querystring = require('querystring');
var sha1 = require('sha1');

// encoding the string with specific encoding type
function encodeString(str) {
	var buffer = new Buffer(str);
	return buffer.toString(config.encodingType);
}

// transform  str to hex
function hexToString(str){
	var buffer = new Buffer(str);
	return buffer.toString('hex');
}

// get food
exports.get = function (path, food_id, params) {
	
	var uri0 = config.baseUrl + path + food_id + "?" + querystring.stringify(params);
	var uri = uri0 + config.consumer_secret;
	var encodeUrl = encodeString(uri);
	var hex = hexToString(encodeUrl);
	var sig = sha1(hex);
	var options = {
	    uri:  uri0 + '&sig=' + sig,
	    method: 'GET',
	    headers: {
	        'Content-Type': config.contentType
	    }
	};
	return rp(options);
};
