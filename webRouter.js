var config = require('./config');
var output = require('./common/output').output;
var q = require('./controllers/controllers');
var factory = require('./services/factory');
var oppties = require('./data/sample');
var express = require('express');
var util = require('util');
var uuid = require('uuid4');
var multer = require('multer');

var router = express.Router();

router.get('/food', function (req, res, next) {

	var consumer_key = req.query.consumer_key;
	var food_id = req.query.food_id;
	var sysParams = {};
	var consumer_secret = req.query.consumer_secret;

	if (consumer_key && food_id && consumer_secret) {
		sysParams.consumer_key = consumer_key;
		sysParams.timestamp = Date.now();

		q.getFood(config.query.food, food_id + "/", consumer_secret, sysParams)
			.then(function (repos) {
				// success handle
				var message = { isSuccess: true, data: repos };
				res.jsonp(message);
				output(message);
			})
			.catch(function (err) {
				// error handle
				var message = { isSuccess: false, statusCode: err.statusCode, error: err };
				res.jsonp(message);
				output(message);
			});

	} else {
		var message = { isSuccess: false, statusCode: 400, error: 'Bad Request' };
		res.status(400);
		res.jsonp(message);
		output(message);
	}


});

router.get('/order/new', function (req, res, next) {
	var consumer_key = req.query.consumer_key;
	var restaurant_id = req.query.restaurant_id;
	var sysParams = {};
	var consumer_secret = req.query.consumer_secret;

	if (consumer_key && restaurant_id && consumer_secret) {
		sysParams.consumer_key = consumer_key;
		sysParams.timestamp = Date.now();

		q.orderNew(config.query.orderNew, consumer_secret, sysParams)
			.then(function (repos) {
				// success handle
				var message = { isSuccess: true, data: repos };
				res.jsonp(message);
				output(message);
			})
			.catch(function (err) {
				// error handle
				var message = { isSuccess: false, statusCode: err.statusCode, error: err };
				res.jsonp(message);
				output(message);
			});
	} else {
		var message = { isSuccess: false, statusCode: 400, error: 'Bad Request' };
		res.status(400);
		res.jsonp(message);
		output(message);
	}

});

router.get('/order/detail', function (req, res, next) {
	var consumer_key = req.query.consumer_key;
	var eleme_order_id = req.query.eleme_order_id;
	var sysParams = {};
	var consumer_secret = req.query.consumer_secret;
	var tp_id = req.query.tp_id;

	if (consumer_key && eleme_order_id && consumer_secret) {
		sysParams.consumer_key = consumer_key;
		sysParams.timestamp = Date.now();

		if (tp_id) {
			sysParams.tp_id = tp_id;
		}

		q.orderStatus(config.query.order, eleme_order_id + "/", consumer_secret, sysParams)
			.then(function (repos) {
				// success handle
				var message = { isSuccess: true, data: repos };
				res.jsonp(message);
				output(message);
			})
			.catch(function (err) {
				// error handle
				var message = { isSuccess: false, statusCode: err.statusCode, error: err };
				res.jsonp(message);
				output(message);
			});
	} else {
		var message = { isSuccess: false, statusCode: 400, error: 'Bad Request' };
		res.status(400);
		res.jsonp(message);
		output(message);
	}

});

router.get('/oauth', function (req, res, next) {
	q.getToken();
});

router.get('/v2/food', function (req, res, next) {

});

function processIssue(req, cb) {
	var id = req.params.id;

	function getIssueById(arr, id) {
		for (var j = 0; j < arr.length; j++) {
			if (id === arr[j].id) {
				return arr[j];
			}
		}
		return null;
	}

	factory.getAll(function (err, data) {
		if (err) {
			cb(err);
		} else {
			if (id && typeof id === "string") {
				cb(getIssueById(data.issues, id));
			} else {
				cb(data);
			}
		}
	});
}

router.get('/v2/issues', function (req, res, next) {
	processIssue(req, function(err, data) {
		if(err) {
			res.json(err);
			return;
		}
		res.json(data);
	})
});

router.get('/v2/issues/:id', function (req, res, next) {
	processIssue(req, function(err, data) {
		if(err) {
			res.json(err);
			return;
		}
		res.json(data);
	})
});

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

var upload = multer({ dest: './uploads/', storage: storage });
router.post('/v2/upload', upload.single('file'), function (req, res, next) {
	if (req.file.path) {
		var id = uuid();
		var obj = {
			id: id,
			issueType: null,
			priority: null,
			attachement: req.file,
			description: null,
			iemail: null
		}
		factory.insert(obj, function (err, data) {
			if (err) {
				res.json({ isSuccess: false, info: err });
				return;
			}
			res.json({ isSuccess: true, info: data });
		})
	} else {
		res.json({ isSuccess: false, info: 'file not found!' });
	}
});

module.exports = router;





