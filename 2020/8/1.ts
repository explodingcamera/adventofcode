import { asm } from "./input";

const instructions = asm.split("\n");

const run = (index) => {
	let accumulator = 0;
	let currentInstruction = 0;
	const history = [];
	while (true) {
		if (history.includes(currentInstruction)) {
			return false;
		}
		history.push(currentInstruction);

		if (!instructions[currentInstruction]) break;
		let [instruction, data] = instructions[currentInstruction].split(" ");
		const num = parseInt(data, 10);

		if (currentInstruction === index) {
			instruction = instruction === "nop" ? "jmp" : "nop";
		}

		switch (instruction) {
			case "acc":
				accumulator += num;
				currentInstruction++;
				continue;
			case "jmp":
				currentInstruction += num;
				continue;
			case "nop":
				currentInstruction++;
				continue;
			default:
				console.log("invalid instruction, skipping: ", instruction);
				currentInstruction++;
				continue;
		}
	}

	return accumulator;
};

for (const [index, instruction] of instructions.entries()) {
	if (!instruction.startsWith("nop") && !instruction.startsWith("jmp")) continue;
	const res = run(index);
	console.log(res);
	if (res) break;
}
