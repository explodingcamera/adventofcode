import { numbers } from "./input";

for (const n of numbers) {
	for (const n2 of numbers) {
		if (n + n2 === 2020) console.log(`n1: ${n} n2: ${n2}`);
	}
}
