let display = document.querySelector(".display");
let operator = "";
let firstNumber = "";
let secondNumber = "";

function addToDisplay(num) {
	if (display.value === "0") {
		display.value = num;
	} else {
		display.value += num;
	}
}

function clearDisplay() {
	display.value = "0";
	operator = "";
	firstNumber = "";
	secondNumber = "";
}

function setOperator(op) {
	operator = op;
	firstNumber = display.value;
	display.value = "0";
}

function calculate() {
	secondNumber = display.value;
	let result = 0;

	if (operator === "+") {
		result = parseFloat(firstNumber) + parseFloat(secondNumber);
	} else if (operator === "-") {
		result = parseFloat(firstNumber) - parseFloat(secondNumber);
	} else if (operator === "*") {
		result = parseFloat(firstNumber) * parseFloat(secondNumber);
	} else if (operator === "/") {
		result = parseFloat(firstNumber) / parseFloat(secondNumber);
	}

	display.value = result;
	operator = "";
	firstNumber = "";
	secondNumber = "";
}

function deleteLastCharacter() {
	display.value = display.value.slice(0, -1);
} 