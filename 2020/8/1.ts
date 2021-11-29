import { asm } from "./asm";

const instructions = asm.split("\n");

const run = (index) => {
  let accumulator = 0;
  let currentInstruction = 0;
  let history = [];
  while (true) {
    if (history.includes(currentInstruction)) {
      return false;
    }
    history.push(currentInstruction);

    if (!instructions[currentInstruction]) break;
    let [instruction, data] = instructions[currentInstruction].split(" ");
    let num = parseInt(data);

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
  let res = run(index);
  console.log(res);
  if (res) break;
}
