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

document.addEventListener("keydown", function(event) {
	switch (event.code) {
		case "Digit0":
		case "Numpad0":
			addToDisplay("0");
			break;
		case "Digit1":
		case "Numpad1":
			addToDisplay("1");
			break;
		case "Digit2":
		case "Numpad2":
			addToDisplay("2");
			break;
		case "Digit3":
		case "Numpad3":
			addToDisplay("3");
			break;
		case "Digit4":
		case "Numpad4":
			addToDisplay("4");
			break;
		case "Digit5":
		case "Numpad5":
			addToDisplay("5");
			break;
		case "Digit6":
		case "Numpad6":
			addToDisplay("6");
			break;
		case "Digit7":
		case "Numpad7":
			addToDisplay("7");
			break;
		case "Digit8":
		case "Numpad8":
			addToDisplay("8");
			break;
		case "Digit9":
		case "Numpad9":
			addToDisplay("9");
			break;
		case "Period":
		case "NumpadDecimal":
			addToDisplay(".");
			break;
		case "Equal":
		case "NumpadEnter":
			calculate();
			break;
		case "Slash":
		case "NumpadDivide":
			setOperator("/");
			break;
		case "Asterisk":
		case "NumpadMultiply":
			setOperator("*");
			break;
		case "Minus":
		case "NumpadSubtract":
			setOperator("-");
			break;
		case "Plus":
		case "NumpadAdd":
			setOperator("+");
			break;
	}
})
// Show keyboard when input field is focused
display.addEventListener("input", function() {
	display.focus();
  });
  
  // Prevent default behavior of touch events on the input field to prevent the keyboard from disappearing on touch devices
  display.addEventListener("touchstart", function(event) {
	event.preventDefault();
  });