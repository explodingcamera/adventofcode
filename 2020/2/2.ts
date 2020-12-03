import { strings } from "./strings";

let valid = 0;
for (const s of strings) {
  const [policy, password] = s.split(": ");
  const [count, character] = policy.split(" ");
  const [a, b] = count.split("-");

  const aValid = password[parseInt(a) - 1] === character;
  const bValid = password[parseInt(b) - 1] === character;

  if ((aValid && !bValid) || (bValid && !aValid)) {
    console.log(aValid, bValid, s);
    valid++;
  }
}

console.log(valid);
