// Add Subtract Divide and Multiply functions

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

function divideNumbers(num1, num2){
    if (num2 === 0) {
        return "You cannot divide by 0!";
    } else {
        return num1 / num2;
    }
}

function multiplyNumbers(num1, num2){
  return num1 * num2;
}


// Tests exports
module.exports = {
    addNumbers, subtractNumbers, divideNumbers, multiplyNumbers
}