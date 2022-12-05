// read the input.txt file for the input
const input = Deno.readTextFileSync("input.txt");

// split the input into an array of numbers
const numbers: number[] = input.split("\n").map((n) => parseInt(n));
const inventories: number[] = [];
let total = 0;

// loop through the numbers and create the inventories
numbers.forEach((number) => {
  if (Number.isNaN(number)) {
    inventories.push(total);
    total = 0;
  } else {
    total += number;
  }
});

console.log(inventories.sort((a, b) => b - a));

// find the highest number in the inventories
console.log(`Highest calories: \n${Math.max(...inventories)}`);
// find the sum of the top 3 inventories
console.log(`Sum of top 3: \n${inventories.slice(0, 3).reduce((a, b) => a + b)}`);
