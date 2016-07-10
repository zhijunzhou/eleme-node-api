var config = require('../config');
var util   = require('../common/util');
var rq 	   = require('../common/request');
var qs     = require('querystring');

function get(url, consumer_secret) {
	var sig = util.sig(url, consumer_secret, config.encodingType);
	return rq.request(url + "&sig=" + sig);
}

// get food
exports.getFood = function (path, food_id, consumer_secret, params) {
	// string A
	var url = config.baseUrl + path + food_id + "?" + qs.stringify(params);	
	
	return get(url, consumer_secret);
};

// new order
exports.orderNew = function(path, consumer_secret, params) {
	var url = config.baseUrl + path + "?" + qs.stringify(params);
	return get(url, consumer_secret);
};

// order status
exports.orderStatus = function(path, eleme_order_id, consumer_secret, params) {
	var url = config.baseUrl + path + eleme_order_id + "?" + qs.stringify(params);
	return get(url, consumer_secret);
};

