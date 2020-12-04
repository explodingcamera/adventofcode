import { passports } from "./passport";
const data = passports.split("\n\n").map((passport) =>
  Object.fromEntries(
    passport
      .replaceAll("\n", " ")
      .replaceAll("  ", " ")
      .split(" ")
      .map((value) => value.split(":"))
  )
);

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let validPassports = data.filter((passport) =>
  requiredFields.every((key) => Object.keys(passport).includes(key))
);

console.log(`valid passports (1): ${validPassports.length}`);

const validateNumber = (val, min, max) => {
  const n = parseInt(val, 10);
  return n >= min && n <= max;
};

const validateHeight = (val) => {
  if (val.endsWith("in")) return validateNumber(val, 59, 76);
  if (val.endsWith("cm")) return validateNumber(val, 150, 193);
  return false;
};

validPassports = validPassports.filter(
  (passport) =>
    validateNumber(passport.byr, 1920, 2002) &&
    validateNumber(passport.iyr, 2010, 2020) &&
    validateNumber(passport.eyr, 2020, 2030) &&
    validateNumber(passport.eyr, 2020, 2030) &&
    validateHeight(passport.hgt) &&
    passport.hcl.match(/^#[0-9a-f]{6}$/i) &&
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(passport.ecl) &&
    passport.pid.match(/^[0-9]{9}$/i)
);

console.log(`valid passports (2): ${validPassports.length}`);
