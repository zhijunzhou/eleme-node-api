// var config = require('../config');
// var rp = require('request-promise');

// exports.request = function (url, type) {
// 	var options = {
// 		uri: url,
// 		method: type
// 	};

// 	var body = {

// 	}

// 	if (typeof type === "string") {
// 		if (type === "GET") {
// 			options.headers = {
// 				'Content-Type': config.contentType
// 			}
// 		} else if (type === "POST") {
// 			options.headers = {
// 				'Content-Type': config.v2.contentType
// 			}
// 			// 1 . 首先构造一个完整的API请求对象。

// 		} else {
// 			// todo
// 		}
// 	}

// 	return rp(options);
// };
var md5 = require('md5');
var clientId = "wYO4C8ZLzB";
var secret = "8e81ef8b73593d6b24e0cd9f11cbe3132d11ab8e";
var access_tocken = "ed72bdaef7b635ecf9279147d76d6a55";
var action = "eleme.order.getOrder";
var orderId = "100027526535707064";

var raw = {
	"token": access_tocken,
	"nop": "1.0.0",
	"metas": {
		"app_key": clientId,
		"timestamp": 1486217703
	},
	"params": {
		"orderId": orderId
	},
	"action": action,
	"id": "8bcee9e3-2d18-4e91-85e6-d62a540978cf",
	"signature": ""
};
// 2 . 提取出上一步得到的请求对象中的metas和params参数值，构造出一个新的参数对象
var extract = {
	"orderId": raw.params.orderId,
	"app_key": raw.metas.app_key,
	"timestamp": raw.metas.timestamp
}
// 3 . 建立一个空数组，然后遍历参数对象中的键值对，使用"key=json_encode(value)"方式进行字符串拼接，将得到的字符串挨个添加到数组中
var extract_array = [];

for (var x in extract) {
	var value = extract[x];
	if(typeof extract[x] === "string") {
		value = JSON.stringify(value);
	}
	extract_array.push(x + '=' + value);
}

// 4 . 对数组进行排序，使用首字母的字母序进行排序，得到排序后的数组
extract_array.sort(function (a, b) {
	return a > b;
});

// 5 . 按照 action + token + 上一步得到的数组用空字符串连接 + secret 的规则拼接签名原串
var raw_sig = raw.action + raw.token + extract_array.join("") + secret;

// 6 . 将上一步得到的字符串进行MD5编码
var md5_str = md5(raw_sig);

// 7 . 将MD5编码后得到的字符串转换为大写字符串，这个字符串就是API签名计算的结果
var sig = md5_str.toString().toUpperCase();

// 8 . 将签名计算的结果赋值给请求对象的signature属性，此时就完成了API调用所需要的signature参数的计算
raw.signature = sig;

console.log(JSON.stringify(raw));