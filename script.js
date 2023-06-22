let display = document.querySelector('.display');
let operator = '';
let firstNumber = '';
let result = null;

function addToDisplay(num) {
    if (display.value === '0' || operator !== '') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function clearDisplay() {
    display.value = '0';
    operator = '';
    firstNumber = '';
    result = null;
}

function setOperator(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    firstNumber = display.value;
    display.value = '0';
}

function calculate() {
    if (operator === '') {
        return;
    }

    const secondNumber = display.value;
    let tempResult = null;

    if (operator === '+') {
        tempResult = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === '-') {
        tempResult = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === '*') {
        tempResult = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operator === '/') {
        tempResult = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    if (result === null) {
        result = tempResult;
    } else {
        result = performOperation(result, operator, parseFloat(secondNumber));
    }

    display.value = result;
    operator = '';
    firstNumber = '';
}

function performOperation(num1, op, num2) {
    if (op === '+') {
        return num1 + num2;
    } else if (op === '-') {
        return num1 - num2;
    } else if (op === '*') {
        return num1 * num2;
    } else if (op === '/') {
        return num1 / num2;
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}