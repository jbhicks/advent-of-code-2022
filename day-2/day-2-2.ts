const input = Deno.readTextFileSync("input.txt");
const inputArray = input.trim().split("\n");
let score = 0;

inputArray.forEach((row: string) => {
	const plays: string[] = row.split(" ");
	console.log(`evaluating ${plays}`);
	console.log(`opponent played ${translatePlay(plays[0])} and the result should be ${translateCondition(plays[1])}`);
	let shapeScore: number = getShapeScore(determineShapeToPlay(plays[0], plays[1]));
	let roundScore: number = getRoundScore(plays[0], determineShapeToPlay(plays[0], plays[1]));
	score += shapeScore + roundScore;
});

console.log(score);

function determineShapeToPlay(startingPlay: string, endCondition: string) {
	if (startingPlay === "A") {
		if (endCondition === "X") return "Z";
		if (endCondition === "Y") return "X";
		if (endCondition === "Z") return "Y";
	}
	if (startingPlay === "B") {
		if (endCondition === "X") return "X";
		if (endCondition === "Y") return "Y";
		if (endCondition === "Z") return "Z";
	}
	if (startingPlay == "C") {
		if (endCondition === "X") return "Y";
		if (endCondition === "Y") return "Z";
		if (endCondition === "Z") return "X";
	}
	return "";
}

function getRoundScore(play1: string, play2: string) {
	if ((play1 === "A" && play2 === "X") ||
		(play1 === "B" && play2 === "Y") ||
		(play1 === "C" && play2 === "Z")) return 3;

	switch (play1) {
		case "A": return play2 === "Y" ? 6 : 0;
		case "B": return play2 === "Z" ? 6 : 0;
		case "C": return play2 === "X" ? 6 : 0;
	}
	return 0;
}

function getShapeScore(shape: string) {
	if (shape === "A" || shape === "X") return 1;
	if (shape === "B" || shape === "Y") return 2;
	if (shape === "C" || shape === "Z") return 3;
	return 0;
}

function translatePlay(play: string) {
	if (play === "A" || play === "X") return "Rock";
	if (play === "B" || play === "Y") return "Paper";
	if (play === "C" || play === "Z") return "Scissors";
	return "";
}

function translateCondition(condition: string) {
	if (condition === "X") return "LOSE";
	if (condition === "Y") return "DRAW";
	if (condition === "Z") return "WIN";
}

