function calculateTax(income) {
  let taxRate;

  if (income <= 10000) {
    taxRate = 0.2;
  } else if (income <= 20000) {
    taxRate = 0.35;
  } else {
    taxRate = 0.5;
  }

  return income * taxRate;
}

const tax1 = calculateTax(10000);
const tax2 = calculateTax(20000);

console.log(`Tax for 10000: ${tax1}`);
console.log(`Tax for 20000: ${tax2}`);
