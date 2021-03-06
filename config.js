var config = {
	debug: true, // true for local test
	baseUrl: 'http://v2.openapi.ele.me', // open api url
	consumer_secret:'87217cb263701f90316236c4df00d9352fb1da76',
	sysParams: {
	    consumer_key: '0170804777',
		timestamp: Date.now(),
	},
	type: {
		food_id:'20385638/',
	},
	contentType:'application/x-www-form-urlencoded',
	encodingType: 'UTF-8',
	query: {
		restaurants:'/v2/restaurants/',
		food: '/food/',
		orderNew: '/order/new/',
		order: '/order/',
	},
	oauth: {
		appid: 'wx9f51df2624282eb1',
		secret: '0f60883c96bd8cc7dec06b3c601f233e'
	},
	v2: {
		env:{
			app:{
				clientId: ''
			},
			auth: {
				sandbox: ''
			},
			token: {
				sandbox: ''
			}
		}
	}
};

module.exports = config;