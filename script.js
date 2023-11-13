let fancyCalculator = (first, second) => {
  // Write your code here

  return first * 2 + second;
};

// Do not change the code below

const first = prompt("Enter the first number - ");
const second = prompt("Enter the second number - ");
alert(
  "The final result is : " + fancyCalculator(parseInt(first), parseInt(second))
);
