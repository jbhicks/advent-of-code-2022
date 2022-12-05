// read testInput.txt and parse contents into an array of strings
const input = await Deno.readTextFile("testInput.txt");
const inputArray = input.trim().split("\r\n");
const inputs = inputArray.map(splitString);

console.log(determinePriority("a"));

// determine priority, a-z is 1-26 and A-Z is 27-52
function determinePriority(input: string): number {
  const charCode = input.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) return charCode - 38;
  return charCode - 96;
}

function splitString(input: string): string[] {
  const half = input.length / 2;
  const firstHalf = input.slice(0, half);
  const secondHalf = input.slice(half);
  return [firstHalf, secondHalf];
}

export {};
