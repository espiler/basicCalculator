angular
  .module('calc.main', [])
  .controller('MainCtrl', ['MainFactory', '$scope', Calc]);


function Calc(Main, $scope) {
  var calc = this;
  calc.updateDisplay = updateDisplay;
  calc.operate = operate;
  calc.clear = clear;
  calc.negate = negate;
  calc.getPercent = getPercent;
  $scope.displayVal = '0';
  var newOperation = true;
  // Allow user to change operator without causing calculation
  var choosingOperator = true;
  var subtotal = 0;
  var heldVal = 0;
  var heldOperator; 
  var prevOperator = 'equals';
  var repeatOperator;
  var repeatVal;
  var percent;

  function updateDisplay(char) {
    char = char.toString();
    if ($scope.displayVal !== "eRR") {
      if (newOperation || $scope.displayVal === '0') { 
        $scope.displayVal = ''; 
        newOperation = false;
        choosingOperator = false;
      }
      if (!(/\./.test($scope.displayVal) && char === '.')) {
        $scope.displayVal += char;
        exponentDisplay();
      }
    }
  }

  function operate(operator) {
    if (choosingOperator) {
      prevOperator = operator;
    } else {
      if (operator === 'add' || operator === 'subtract') {
        return addSubtract(operator);
      }
      if (operator === 'equals') {
        return equals(operator);
      }
      if (operator === 'multiply' || operator === 'divide') {
        return multiplyDivide(operator);
      }
    }
  }

  function addSubtract(operator) {
    choosingOperator = true;
    repeatOperator = repeatVal = '';
    calculateTotal(operator);
  }

  function multiplyDivide(operator) {
    choosingOperator = true;
    repeatOperator = repeatVal = '';
    // Retain order of operations by holding adds/substracts until mults/divides are complete
    if (prevOperator === 'add' || prevOperator === 'subtract') {
      heldVal = subtotal;
      heldOperator = prevOperator;
      prevOperator = operator;
      subtotal = $scope.displayVal;
      newOperation = true;
    } else {
      calculateTotal(operator);
    }
  }

  function equals(operator) {
    // Repeat last calculation if user continues pressing equals
    if (!repeatOperator) {
      repeatOperator = prevOperator;
      repeatVal = $scope.displayVal;
    }
    calculateTotal(operator, subtotal, repeatVal, repeatOperator);
  }

  function calculateTotal(operator, sub, display, prev) {
    sub = sub || subtotal;
    display = display || $scope.displayVal;
    prev = prev || prevOperator;
    Main.operate(sub, display, prev, function(res) {
      if (prevOperator !== 'equals') {
        // Complete order of operations if add/subtract was previously held
        if (heldOperator && operator !== 'multiply' && operator !== 'divide') {
          Main.operate(res, heldVal, heldOperator, function(total) {
            heldOperator = heldVal = '';
            endOperation(operator, total);
          });
        } else {
          endOperation(operator, res)
        }
      } else {
        endOperation(operator, res);
      }
    });
  }

  function endOperation(operator, total) {
    $scope.displayVal = subtotal = total;
    exponentDisplay();
    newOperation = true;
    prevOperator = operator;
  }

  function clear() {
    $scope.displayVal = 0;
    heldVal = 0;
    heldOperator = 0;
    subtotal = 0; 
    newOperation = true;
  }

  function negate() {
    $scope.displayVal = $scope.displayVal.toString();
    $scope.displayVal[0] === '-' ? 
      $scope.displayVal = $scope.displayVal.substring(1) :
      $scope.displayVal = '-' + $scope.displayVal;
    // Allow user to negate total and continue calculating
    if (prevOperator === 'equals') {
      subtotal = $scope.displayVal;
    }
  }

  function getPercent() {
    Main.getPercent(subtotal, $scope.displayVal, prevOperator, function(percent) {
      $scope.displayVal = percent;
    });
  }

  function exponentDisplay() {
    if ($scope.displayVal.toString().length > 11) { 
      $scope.displayVal = parseFloat($scope.displayVal).toExponential(4);
    }
    if ($scope.displayVal === "Infinity") { 
      $scope.displayVal = "eRR"
    }
  }
} 