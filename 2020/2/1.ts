import { strings } from "./strings";

let valid = 0;
for (const s of strings) {
  const [policy, password] = s.split(": ");
  const [count, character] = policy.split(" ");
  const [min, max] = count.split("-");

  const occurences = (password.match(new RegExp(character, "g")) || []).length;
  if (occurences >= parseInt(min) && occurences <= parseInt(max)) valid++;
}

console.log(valid);
