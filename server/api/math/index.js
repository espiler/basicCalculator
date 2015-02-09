var controller = require('./math.controller');
var router = require('express').Router();

router.get('/add', controller.add);

router.get('/subtract', controller.subtract);

router.get('/multiply', controller.multiply);

router.get('/divide', controller.divide);

router.get('/percent', controller.getPercent);

module.exports = router;
