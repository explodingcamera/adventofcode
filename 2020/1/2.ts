import { numbers } from "./numbers";

for (const n of numbers) {
  for (const n2 of numbers) {
    for (const n3 of numbers) {
      if (n + n2 + n3 === 2020) console.log(`n1: ${n} n2: ${n2} n3: ${n3}`);
    }
  }
}
