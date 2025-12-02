import { strings } from "./input";

let valid = 0;
for (const s of strings) {
	const [policy, password] = s.split(": ");
	const [count, character] = policy.split(" ");
	const [min, max] = count.split("-");

	const occurences = (password.match(new RegExp(character, "g")) || []).length;
	if ((occurences >= parseInt(min, 10) && occurences <= parseInt, 10(max))) valid++;
}

console.log(valid);
