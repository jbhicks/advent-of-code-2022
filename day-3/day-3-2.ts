// read input.txt and parse contents into an array of strings
const input = await Deno.readTextFile("input.txt");
const inputs = input.trim().split("\n");
let priority = 0;

// group inputs into 3s and calculate badge and priority
for (let i = 0; i < inputs.length; i += 3) {
  const first = inputs[i];
  const second = inputs[i + 1];
  const third = inputs[i + 2];
  const badge = determineBadge(first, second, third);
  const badgePriority = determinePriority(badge);
  console.log(`badge: ${badge}, priority: ${badgePriority}`);
  priority += badgePriority;
}

console.log(priority);

// determine badge - given 3 strings, find the character common to all 3
function determineBadge(first: string, second: string, third: string): string {
  let shared = sharedCharacters(first, second);
  shared = sharedCharacters(shared.join(""), third);
  return shared.join("");
}

// determine priority, a-z is 1-26 and A-Z is 27-52
function determinePriority(input: string): number {
  const charCode = input.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) return charCode - 38;
  console.log(`priority for ${input} is ${charCode - 96}`);
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
