var express  = require('express');
var router = require('./router');

var app = express();
router(app);

var server = app.listen(3000);
console.log('app listening on port:' + 3000);

// expose app and server
module.exports = {
  app: app,
};
if (server) {
  module.exports.server = server;
}
