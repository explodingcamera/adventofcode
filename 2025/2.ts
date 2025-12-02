#!/usr/bin/env bun

const db = new Bun.SQL("sqlite://:memory:");
await db`CREATE TABLE product_ids (from_id INTEGER NOT NULL, to_id INTEGER NOT NULL)`;
await Promise.all(
	(await Bun.file("./input.txt").text())
		.split(",")
		.map((s) => s.split("-").map((n) => parseInt(n, 10)) as [number, number])
		.map(([from_id, to_id]) => db`INSERT INTO product_ids ${Bun.sql({ from_id, to_id })}`),
);

const [res] = await db`--sql
    with recursive nums(from_id, to_id, n) as (
        select from_id, to_id, from_id from product_ids
        union all
        select from_id, to_id, n+1 from nums where n < to_id
    )
    select
      sum(case when len % 2 = 0 and substr(s,1,len/2) = substr(s, len/2+1, len/2) then n else 0 end) as part1,
      sum(case when instr(substr(s||s, 2, len*2-2), s) > 0 then n else 0 end) AS part2
    from (select n, n as s, length(n) as len from nums);
`;

console.log(res);
