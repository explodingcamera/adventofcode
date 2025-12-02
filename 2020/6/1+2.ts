import { customs } from "./input";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let totalAllYes = 0;
let totalAnyoneYes = 0;
for (const group of customs.split("\n\n")) {
	const members = group.split("\n");
	const memberCount = members.length;
	const results = Object.fromEntries(alphabet.map((c) => [c, 0]));

	for (const member of members)
		for (const answer of member.split("")) {
			console.log(answer);
			results[answer]++;
		}

	const anyoneYes = Object.entries(results)
		.filter(([_, count]) => count !== 0)
		.map(([question]) => question);

	const allYes = Object.entries(results)
		.filter(([_, count]) => count === memberCount)
		.map(([question]) => question);

	totalAnyoneYes += anyoneYes.length;
	totalAllYes += allYes.length;
}

console.log(`Anyone in a group has answered yes: ${totalAllYes}`);
console.log(`All have answered yes: ${totalAnyoneYes}`);
