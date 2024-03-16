// Q5. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
// “positive” if the number is positive and similarly for negative and zero also.

var number = -1;
var number2 = 0;
var number3 = -3;
var result = number === 0 ? "zero" : number > 0 ? "positive" : "negative";
var result2 = number2 === 0 ? "zero" : number > 0 ? "positive" : "negative";
var result3 = number3 === 0 ? "zero" : number > 0 ? "positive" : "negative";
console.log(`The number is ${result} `);
console.log(`The number is ${result2} `);
console.log(`The number is ${result3} `);
