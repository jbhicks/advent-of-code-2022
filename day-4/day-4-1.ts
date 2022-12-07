// read from file testInput.txt
const input = Deno.readTextFileSync("testInput.txt");
console.log(input);

// split input into array of strings
const inputArray = input.split("\n");
console.log(getRange(inputArray[0]));

function getRange(input: string): number[] {
  const range = input.split("-");
  return range.map((n) => parseInt(n));
}

function isContained(str1: string, str2: string): boolean {
  return str1.includes(str2);
}
