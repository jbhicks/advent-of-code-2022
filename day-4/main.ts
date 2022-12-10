const input = Deno.readTextFileSync("input.txt");
const inputArray = input.split("\n");
let count = 0;

// part1();
part2();

function part1() {
  inputArray.forEach((line) => {
    const ranges = line.split(",");
    if (
      isRangeContainedWithin(ranges[0], ranges[1]) ||
      isRangeContainedWithin(ranges[1], ranges[0])
    )
      count++;
  });
  console.log(`Part 1: count: ${count}`);
}

function part2() {
  count = 0;
  inputArray.forEach((line) => {
    const ranges = line.split(",");
    if (isRangeOverlapping(ranges[0], ranges[1])) {
      count++;
    }
  });
  console.log(`Part 2: count: ${count}`);
}

// Given two ranges of numbers, return true if the ranges overlap
function isRangeOverlapping(range1str: string, range2str: string): boolean {
  return (
    range1str.split("-")[0] <= range2str.split("-")[1] &&
    range2str.split("-")[0] <= range1str.split("-")[1]
  );
}

// Given two ranges of numbers, return true if the first range is contained within the second range
function isRangeContainedWithin(range1: string, range2: string): boolean {
  const range1Array = getRange(range1);
  const range2Array = getRange(range2);
  return range1Array.every((num) => range2Array.includes(num));
}

// function returns an array of numbers given a string range input like "x-y"
function getRange(input: string): number[] {
  const range = input.split("-");
  const rangeArray: number[] = [];
  for (let i = Number(range[0]); i <= Number(range[1]); i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}
