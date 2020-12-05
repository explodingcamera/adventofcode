import { passes } from "./passes";

const arr = passes.split("\n");

let seats: number[] = []
for (const pass of arr) {
  const row = pass.slice(0, 7);
  const seat = pass.slice(7);

  const rowNumber = parseInt(row.replace(/B/g, "1").replace(/F/g, "0"), 2);
  const columnNumber = parseInt(seat.replace(/R/g, "1").replace(/L/g, "0"), 2);
  const seatID = rowNumber * 8 + columnNumber

  seats.push(seatID)
}

const seat = seats.sort().find((v, i) => i > 2 && v === (seats[i-1] + 2) && v === (seats[i-2] + 3)) - 1

console.log("highest seatID:", Math.max(...seats));
console.log("free seatID:", seat);
