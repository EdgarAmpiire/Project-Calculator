// Logic for number clicked to be displayed
let displayValue = "0";
let firstOperand = null;
let currentOperator = null;
let waitingForSecondOperand = false;
let justCalculated = false;

const displayElement = document.getElementById("display");
// Update the display
function updateDisplay() {
  displayElement.textContent = displayValue;
}

// Digit input
function onDigitClick(event) {
  const digit = event.target.textContent;

  if (justCalculated) {
    displayValue = (digit === "." )? "0.": digit;
    justCalculated = false;
    updateDisplay();
    return;
  }

  if (waitingForSecondOperand) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    if (displayValue === "0" && digit === "0") {
      return;
    }
    if (displayValue === "0" && digit !== ".") {
      displayValue = digit;
    } else if (digit === "." && displayValue.includes(".")) {
      return;
    } else {
      displayValue += digit;
    }
  }
  updateDisplay();
}

// Operator input (+, -, /, *)
function onOperatorClick(e) {
  const nextOperator = e.target.textContent;

  if(justCalculated) {
    firstOperand = parseFloat(displayValue);
    justCalculated = false;
  }

  if (currentOperator && waitingForSecondOperand) {
    currentOperator = nextOperator;
    return;
  }
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
  } else if (currentOperator) {
    const result = operate(
      currentOperator,
      firstOperand,
      parseFloat(displayValue)
    );
    displayValue = String(result);
    firstOperand = result;
    updateDisplay();
  }
  currentOperator = nextOperator;
  waitingForSecondOperand = true;
}

// Equals Button
function onEqualsClick() {
  if (
    firstOperand !== null &&
    currentOperator !== null &&
    !waitingForSecondOperand
  ) {
    const result = operate(
      currentOperator,
      firstOperand,
      parseFloat(displayValue)
    );
    displayValue = String(result);
    firstOperand = null;
    currentOperator = null;
    waitingForSecondOperand = false;
    justCalculated = true;
    updateDisplay();
  }
}

// Delete (Del) button
function onDeleteClick() {
  if (waitingForSecondOperand) return;
  if (
    displayValue.length === 1 ||
    (displayValue.length === 2 && displayValue.startsWith("-"))
  ) {
    displayValue = "0";
  } else {
    displayValue = displayValue.slice(0, -1);
  }
  updateDisplay();
}

// Clear (AC) button
function onClearClick() {
  displayValue = "0";
  firstOperand = null;
  currentOperator = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

// Main Math Logic
function operate(operator, firstNumber, secondNumber) {
    let result;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber; break; 
    case "−":
      result = firstNumber - secondNumber; break;
    case "×":
      result = firstNumber * secondNumber; break;
    case "÷":
      if (secondNumber === 0) return "Error";
      result = firstNumber / secondNumber;
      break;
    default: return secondNumber;
  }
  return roundResult(result);
}
// Rounding off to 8 decimals
function roundResult(num) {
  if (Number.isInteger(num)) return num;
  return parseFloat(num.toPrecision(8));
}

// Adding listeners
document.querySelectorAll(".btn.dark, .btn.zero").forEach((btn) => {
  btn.addEventListener("click", onDigitClick);
});

document.querySelectorAll(".btn.orange").forEach((btn) => {
  if (btn.textContent === "=") {
    btn.addEventListener("click", onEqualsClick);
  } else {
    btn.addEventListener("click", onOperatorClick);
  }
});

document.querySelector(".btn.gray.ac").addEventListener("click", onClearClick);

document
  .querySelector(".btn.gray.del")
  .addEventListener("click", onDeleteClick);

// Keyboard support
document.addEventListener("keydown", (e) => {
    const key = e.key;
    if(!isNaN(key)){
        simulateButtonClick(key); // 1-9
    } else if(key==="."){
        simulateButtonClick(".")
    }else if(key === "+" || key === "-" || key === "*" || key === "/" ){
        const operatorMap = { '*': '×', '/': '÷', '+': '+', '-': '−' };
        simulateButtonClick(operatorMap[key]);
    } else if (key === "Enter" || key === "="){
        simulateButtonClick("=")
    } else if (key === "Backspace" || key ==="Delete"){
        onDeleteClick();
    }else if (key === "Escape"){
        onClearClick();
    }
})

function simulateButtonClick(text){
    const btn= Array.from(document.querySelectorAll(".btn"))
    .find(b => b.textContent.trim() === text);
    if(btn){
        btn.click();
    }
}

updateDisplay();
