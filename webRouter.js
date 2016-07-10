var config = require('./config');
var q = require('./controllers/controllers');
var express = require('express');
var router = express.Router();


router.get('/food', function(req, res, next) {
	q.getFood(config.query.food, config.type.food_id, config.sysParams)
	.then(function (repos) {
		// success handle
	    res.jsonp({isSuccess:true, data:repos});
	})
	.catch(function (err) {
	    // error handle
	    res.jsonp({isSuccess:false, statusCode: err.statusCode, error: err});
	});
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





