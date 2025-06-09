// Add Subtract Divide and Multiply functions
function addNumbers(num1, num2) {
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}

function divideNumbers(num1, num2) {
  if (num2 === 0) {
    return "You cannot divide by 0!";
  } else {
    return num1 / num2;
  }
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

let firstNumber = 3;
let operator = "-";
let secondNumber = 5;

// Operate function
function operate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return addNumbers(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtractNumbers(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divideNumbers(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiplyNumbers(firstNumber, secondNumber);
  } else {
    return "Invalid Operator";
  }
}

console.log(operate(firstNumber, operator,secondNumber));

// Tests exports
module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
};
