import { rules } from "./input";

const allRules = rules
	.replaceAll("bags", "")
	.split(".\n")
	.map((r) => {
		const [bag, contains] = r.split(" contain ");
		const items = contains
			.split(", ")
			.map((c) => ({ count: parseInt(c[0], 10), color: c.slice(1).trim() }));
		return [bag.trim(), items];
	});

const rulesObj = Object.fromEntries(allRules);

const searchFor = "shiny gold";
const validBags = allRules.filter(([bag]) => {
	if (bag === searchFor) return false;

	console.log(bag);

	const containsBag = (bag, contains) => {
		const data = rulesObj[bag];
		if (!Array.isArray(data)) return false;
		if (data.length === 0) return false;
		if (data.find((d) => d.color === contains)) return true;
		return [...data.map((d) => containsBag(d.color, contains))].some(Boolean);
	};

	return containsBag(bag, searchFor);
});
console.log(validBags.map(([b]: Array<string>) => b.trim()));
console.log(validBags.length);
