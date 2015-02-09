angular.module('calc')
.factory('MainFactory', ['$http', function($http) {
  var mainObj = {
    operate: operate,
    getPercent: getPercent
  };
  var result;

  function operate(subtotal, val, operator, cb) {
    if (operator === 'add') { return add(subtotal, val, cb); }
    if (operator === 'subtract') { return subtract(subtotal, val, cb); }
    if (operator === 'multiply') { return multiply(subtotal, val, cb); }
    if (operator === 'divide') { return divide(subtotal, val, cb); }
    if (operator === 'equals') { cb(val); }
  }

  function getPercent(subtotal, percent, prevOperator, cb) {
    $http({
      method: 'GET',
      url: '/api/math/percent',
      params: {
        subtotal: subtotal, 
        percent: percent,
        prevOperator: prevOperator
      }
    })
    .success(function(data, status) {
      cb(data);
    })
    .error(function(data, status) {
      console.log("ERROR")
    })
  }

  function add(subtotal, val, cb) {
    $http({
      method: 'GET',
      url: '/api/math/add',
      params: {
        subtotal: subtotal, 
        val: val
      }
    })
    .success(function(data, status) {
      cb(data);
    })
    .error(function(data, status) {
      console.log("ERROR")
    })
  }

  function subtract(subtotal, val, cb) {
    $http({
      method: 'GET',
      url: '/api/math/subtract',
      params: {
        subtotal: subtotal, 
        val: val
      }
    })
    .success(function(data, status) {
      cb(data);
    })
    .error(function(data, status) {
      console.log("ERROR")
    })
  }

  function multiply(subtotal, val, cb) {
    $http({
      method: 'GET',
      url: '/api/math/multiply',
      params: {
        subtotal: subtotal, 
        val: val
      }
    })
    .success(function(data, status) {
      console.log("SUCCESS: ", data)
      cb(data);
    })
    .error(function(data, status) {
      console.log("ERROR")
    })
  }

  function divide(subtotal, val, cb) {
    $http({
      method: 'GET',
      url: '/api/math/divide',
      params: {
        subtotal: subtotal, 
        val: val
      }
    })
    .success(function(data, status) {
      cb(data);
    })
    .error(function(data, status) {
      console.log("ERROR")
    })
  }

  return mainObj;

}]);