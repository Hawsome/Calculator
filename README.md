# Calculator
A simple calculator that performs basic arithmetic operations.
This calculator is a simple web-based calculator that allows users to perform basic arithmetic calculations. It provides a user interface with number buttons, operator buttons, a clear button, a delete button, and an equal button.

Here's how the calculator works:

1. Display: The calculator has a display area that shows the numbers and results of calculations. The initial value of the display is '0'.

2. Number Buttons: The calculator has number buttons from 0 to 9, including a decimal point button. Clicking these buttons appends the corresponding number to the display value.

3. Operator Buttons: The calculator has operator buttons for addition (+), subtraction (-), multiplication (*), and division (/). Clicking these buttons sets the selected operator and stores the current display value as the first number of the calculation. The display value is then reset to '0' to enter the second number.

4. Equal Button: Clicking the equal button (=) performs the calculation using the selected operator and the first and second numbers. The result is displayed in the display area. If an operator is selected again without clicking the equal button, the calculator performs the previous calculation and updates the result accordingly.

5. Clear Button: Clicking the clear button (C) resets the calculator. It clears the display value, the operator, the first number, and the result.

6. Delete Button: Clicking the delete button removes the last character from the display value. It allows users to correct any input errors.

The calculator uses JavaScript to handle user interactions and perform calculations. It keeps track of the selected operator, the first number, and the result to ensure correct calculations. The `performOperation()` function is used to perform the arithmetic operations based on the selected operator.

Overall, this calculator provides basic functionality for performing arithmetic calculations.
