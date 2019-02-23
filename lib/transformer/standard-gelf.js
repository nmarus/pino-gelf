const utils = require('./../utils');

module.exports = function (data) {
  let m = '';
  
  if (typeof data.msg === 'string') {
    m = data.msg;
  } else if (typeof data.message === 'string') {
    m = data.message;
  }

  return {
    version: '1.1',
    host: data.hostname,
    short_message: m.substring(0, 65),
    full_message: m,
    timestamp: data.time / 1000,
    level: utils.pinoLevelToSyslogLevel(data.level),
    facility: data.name
  };
};
