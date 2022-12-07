// read testInput.txt and parse contents into an array of strings
const input = await Deno.readTextFile("input.txt");
const inputArray = input.trim().split("\n");
const inputs = inputArray.map(splitString);
let priority = 0;

// for each input, determine if they share any characters
inputs.forEach((input) => {
  const sharedChars = sharedCharacters(input[0], input[1]);
  priority += determinePriority(sharedChars[0]);
});
console.log(`Final Priority: ${priority}`);

// determine priority, a-z is 1-26 and A-Z is 27-52
function determinePriority(input: string): number {
  const charCode = input.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) return charCode - 38;
  return charCode - 96;
}

// split the string in half
function splitString(input: string): string[] {
  const half = input.length / 2;
  const firstHalf = input.slice(0, half);
  const secondHalf = input.slice(half);
  return [firstHalf, secondHalf];
}

// given two strings, determine if they share any characters
function sharedCharacters(first: string, second: string): string[] {
  const shared = first.split("").filter((char) => second.includes(char));
  // filter out any duplicates
  return [...new Set(shared)];
}

export {};
