function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

const result1 = factorial(6);
const result2 = factorial(9);

console.log(result1);
console.log(result2);
