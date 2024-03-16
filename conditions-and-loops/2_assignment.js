//Q2. Write a program that grades st9dents based on their marks^

let marks = 90;
if (marks > 90 && marks <= 100) {
  console.log("A grade");
} else if (marks >= 70 && marks <= 90) {
  console.log("B grade");
} else if (marks >= 50 && marks < 70) {
  console.log("C grade");
} else if (marks >= 0 && marks < 50) {
  console.log("F grade");
} else {
  console.log("invalid marks");
}
