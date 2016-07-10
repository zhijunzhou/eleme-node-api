var config = require('./config');
var q = require('./controllers/controllers');
var express = require('express');
var router = express.Router();


router.get('/food', function(req, res, next) {
	console.log(req.query);
	var consumer_key = req.query.consumer_key;
	var food_id = req.query.food_id;
	var consumer_secret = req.query.consumer_secret;
	var sysParams = {};

	if(consumer_key && food_id && consumer_secret) {
		sysParams.consumer_key = consumer_key;
		sysParams.timestamp = Date.now();

		q.getFood(config.query.food, food_id + "/", sysParams)
		.then(function (repos) {
			// success handle
		    res.jsonp({isSuccess:true, data:repos});
		})
		.catch(function (err) {
		    // error handle
		    res.jsonp({isSuccess:false, statusCode: err.statusCode, error: err});
		});

	} else {
		res.status(400);
		res.jsonp({isSuccess:false, statusCode: err.statusCode, error: 'Bad Request'});
	}

	
});


router.get('/order/new', function(req, res, next) {
	q.orderNew(config.query.orderNew, config.sysParams)
	.then(function (repos) {
		// success handle
	    res.jsonp({isSuccess:true, data:repos});
	})
	.catch(function (err) {
	    // error handle
	    res.jsonp({isSuccess:false, statusCode: err.statusCode, error: err});
	});
});

module.exports = router;





