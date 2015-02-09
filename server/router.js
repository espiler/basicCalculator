var express       = require('express');
var mathRouter   = require('./api/math');

module.exports = function (app, passport) {
  app.use('/api/math', mathRouter);
  app.use(express.static(__dirname + '/..'));
};