var config = require('../config');
var util = require('../common/util');
var rq = require('../common/request');
var oauth = require('../common/oAuth');
var qs = require('querystring');

function get(url, consumer_secret) {
    var sig = util.sig(url, consumer_secret, config.encodingType);
    return rq.request(url + "&sig=" + sig);
}

// get food
exports.getFood = function(path, food_id, consumer_secret, params) {
    // string A
    var url = config.baseUrl + path + food_id + "?" + qs.stringify(params);
    oauth.getToken();

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


exports.getToken = function() {
    var reqUrl = 'https://api.weixin.qq.com/cgi-bin/token?';
    var params = {
        appid: config.oauth.appid,
        secret: config.oauth.secret,
        grant_type: 'client_credential'
    };
    return rq.request(reqUrl + qs.stringify(params));
}


// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9f51df2624282eb1&secret=0f60883c96bd8cc7dec06b3c601f233e
