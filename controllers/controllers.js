var config = require('../config');
var util   = require('../common/util');
var rq 	   = require('../common/request');
var qs     = require('querystring');

function get(url) {
	var sig = util.sig(url, config.consumer_secret, config.encodingType);
	return rq.request(url + "&sig=" + sig);
}

// get food
exports.getFood = function (path, food_id, params) {
	// string A
	var url = config.baseUrl + path + food_id + "?" + qs.stringify(params);	
	
	return get(url);
};

// new order
exports.orderNew = function(path, params) {
	var url = config.baseUrl + path + "?" + qs.stringify(params);
	return get(url);
};

