/*
- Create a variable named 'num1' and assign it a floating-point value.
- Create a variable named 'num2' and assign it a different floating-point value.

- Round both 'num1' and 'num2' to the nearest integer and store the results in variables 'roundedNum1' and 'roundedNum2'.
- Calculate the square root of 'roundedNum1' and store it in a variable named 'sqrtNum1'.
- Find the larger number between 'roundedNum1' and 'roundedNum2' and store it in a variable named 'maxNum'.

- Use console.log() to print 'roundedNum1', 'roundedNum2', 'sqrtNum1', and 'maxNum' to the console.
- Use the typeof operator to check the data type of each new variable and print the result using console.log().
*/

let num1 = 3.14;
let num2 = 22.4;
let roundedNum1,roundedNum2;
roundedNum1 = Number(num1.toFixed(0));
roundedNum2 = Number(num2.toFixed(0));

console.log(roundedNum1,roundedNum2);

