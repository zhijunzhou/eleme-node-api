/** 
 * eleme api transfer node server
 */  
var config = require('./config'),
    express = require('express'),
  	router = require('./webRouter'),
  	http = require('http'),
    requestLog = require('./middlewares/request_log'),
    errorhandler = require('errorhandler'),
    favicon = require('serve-favicon'),
  	bodyParser = require('body-parser'),
  	path = require('path');

var app = express();

app.set('port', process.env.PORT || 8080);  

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

if(config.debug) {
  app.use(requestLog);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// })

// app.use('/', router2);

app.use('/', router);

// error handler
if (config.debug) {  
  app.use(errorhandler());
} else {
  app.use(function (err, req, res, next) {
    logger.error(err);
    return res.status(500).send('500 status');
  });
}

http.createServer(app).listen(app.get('port'), function(){  
  console.log("Express server listening on port " + app.get('port'));  
});  