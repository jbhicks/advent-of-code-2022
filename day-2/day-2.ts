// const input = Deno.readTextFileSync("input.txt");
const input = Deno.readTextFileSync("testInput.txt");
const inputArray = input.trim().split("\n");
let score = 0;

inputArray.forEach((row: string) => {
	const plays: string[] = row.split(" ");
	let shapeScore: number = getShapeScore(plays[1]);
	let roundScore: number = getRoundScore(plays[0], plays[1]);
	console.log(`round score for ${translatePlay(plays[0])} vs ${translatePlay(plays[1])} is ${roundScore}`);
	console.log(`total score this play is ${shapeScore + roundScore}`);
	score += shapeScore + roundScore;
});

console.log(score);

function translatePlay(play: string) {
	if (play === "A" || play === "X") return "Rock";
	if (play === "B" || play === "Y") return "Paper";
	if (play === "C" || play === "Z") return "Scissors";
	return "";
}

function getShapeScore(shape: string) {
	if (shape === "A" || shape === "X") return 1;
	if (shape === "B" || shape === "Y") return 2;
	if (shape === "C" || shape === "Z") return 3;
	return 0;
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
