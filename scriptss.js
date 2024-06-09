let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput === '') return;
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if (currentOperation) {
    calculate();
  }
  currentOperation = operation;
  currentInput = '';
}

function calculate() {
  if (currentOperation === null || currentInput === '') return;
  let secondOperand = parseFloat(currentInput);
  let result;
  switch (currentOperation) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  firstOperand = null;
  currentOperation = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  firstOperand = null;
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput;
}
