var sha1   = require('sha1');

// encoding the string with specific encoding type
function encodeString (str, encodingType) {
	var buffer = new Buffer(str);
	return buffer.toString(encodingType);
}

// transform  str to hex
function hexToString (str){
	var buffer = new Buffer(str);
	return buffer.toString('hex');
}

// sig
exports.sig = function(url, consumer_secret, encodingType) {
	var encodeUrl = encodeString(url + consumer_secret);
	var hex = hexToString(encodeUrl, encodingType);
	return sha1(hex);
};