import { trees } from "./input";

const arr = trees.split("\n").map((r) => r.split(""));

const counts = [];
const slopes = [
	[1, 1],
	[3, 1],
	[5, 1],
	[7, 1],
	[1, 2],
];

for (const [xSteps, ySteps] of slopes) {
	let count = 0;

	for (let x = 0, y = ySteps; y < arr.length; y += ySteps) {
		const row = arr[y];

		x += xSteps;
		if (x >= row.length) x = x - row.length;
		if (row[x] === "#") count++;
	}

	counts.push(count);
	console.log(`${xSteps}:${ySteps}: ${count}`);
}

console.log(`===\ntotal: ${counts.filter(Boolean).reduce((a, b) => a * b, 1)}`);
