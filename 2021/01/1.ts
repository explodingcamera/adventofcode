import { input } from "./input";

const inputs = input.split("\n").map((i) => parseInt(i, 10));
const measurements = inputs.map((v, i) => {
  if (i === 0) return NaN;
  const prev = inputs[i - 1];
  return v > prev;
});
console.log(`Part 1: ${measurements.filter(Boolean).length}`);

const measurements2 = inputs.map((v, i) => {
  if (i === 0 || i + 3 > inputs.length) return NaN;
  const prev = inputs[i - 1] + v + inputs[i + 1];
  const curr = v + inputs[i + 1] + inputs[i + 2];
  return curr > prev;
});
console.log(`Part 2: Sliding Average: ${measurements.filter(Boolean).length}`);
