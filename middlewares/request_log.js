var env = process.env.NODE_ENV || "development";
var log4js = require('log4js');
var logger = log4js.getLogger('cheese');

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/cheese.log', category: 'cheese',maxLogSize: 1024, backups:3}
  ]
});

//  trace, debug, info, warn, error, fatal
logger.setLevel('debug');

// http responses 3xx, level = WARN
// http responses 4xx & 5xx, level = ERROR
// else, level = INFO
log4js.connectLogger(logger, {level: 'WARN', format:':method :url'});

module.exports = function (req, res, next) {
  // Assets do not out log.
  if (exports.ignore.test(req.url)) {
    next();
    return;
  }

  var t = new Date();
  logger.info(t.toISOString(), req.method, req.url, req.ip);

  res.on('finish', function (d) {
    var duration = ((new Date()) - t);    
    logger.info('Completed', res.statusCode, ('(' + duration + 'ms)'));
  });

  next();
};

exports.ignore = /^\/(public|agent)/;

