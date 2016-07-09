var config = require('./config');
var q = require('./promise').get;

// http request promise
q(config.query.food, config.type.food_id, config.sysParams)
	.then(function (repos) {
		// success handle
	    console.log(repos);
	})
	.catch(function (err) {
	    // error handle
	    console.log(err.statusCode);
	});

