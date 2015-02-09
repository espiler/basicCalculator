var request = require('request');
var result;
var subtotal;
var percent;

module.exports = {
	getPercent: getPercent,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};

function getPercent(req, res) {
	subtotal = parseFloat(req.query.subtotal)
	percent = parseFloat(req.query.percent)
  if (subtotal === 0 || req.query.prevOperator === 'equals') { subtotal = 1; }
  percent = percent * 0.01;
  result = (subtotal * percent).toString();
  res.end(result);
}

function add(req, res) {
	result = (parseFloat(req.query.subtotal) + parseFloat(req.query.val)).toString();
 	res.end(result); 
}

function subtract(req, res) {
	result = (parseFloat(req.query.subtotal) - parseFloat(req.query.val)).toString();
 	res.end(result); 
}

function multiply(req, res) {
	result = (parseFloat(req.query.subtotal) * parseFloat(req.query.val)).toString();
 	res.end(result); 
}

function divide(req, res) {
	result = (parseFloat(req.query.subtotal) / parseFloat(req.query.val)).toString();
 	res.end(result); 
}
