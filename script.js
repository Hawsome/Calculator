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

// Handle keyboard input for mobile devices
function handleMobileKeyboardInput(event) {
	const key = event.key;

	// Check if the pressed key is a number key
	if (/\d/.test(key)) {
		addToDisplay(key);
	}
}

// Add event listener for keyboard input on mobile devices
document.addEventListener("keydown", function(event) {
	// Check if the input is from a mobile device
	if (/Mobi/.test(navigator.userAgent)) {
		handleMobileKeyboardInput(event);
	}
});

function handleKeyboardInput(event) {
	const key = event.key;
	if (/\d/.test(key)) {
		addToDisplay(key);
	} else if (key === ".") {
		addToDisplay(".");
	} else if (key === "=" || key === "Enter") {
		calculate();
	} else if (key === "/") {
		setOperator("/");
	} else if (key === "*") {
		setOperator("*");
	} else if (key === "-") {
		setOperator("-");
	} else if (key === "+") {
		setOperator("+");
	}
}