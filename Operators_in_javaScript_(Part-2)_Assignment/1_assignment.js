// Q1. Explain the usage of ternary operator with syntax and write a program to check whether the number is even
// or odd using the ternary operator.

console.log(`The ternary operator, also known as the conditional operator, is a shorthand way of writing an if...else statement. 
It evaluates a condition and returns one of two values based on whether 
the condition is true or false.`);

console.log(`Syntax:-condition ? expression1 : expression2`);

var number = 7;
var result = number % 2 === 0 ? "even" : "odd";

console.log(`The number is ${result} `);
