const fs = require("fs");
const {
  default: part_one_first_solution,
} = require("./part_one_first_solution.ts");
const {
  default: part_two_first_solution,
} = require("./part_two_first_solution.ts");

test("day3 part one test", () => {
  const input = fs.readFileSync("2024/day3/input.txt", "utf8");

  expect(part_one_first_solution(input)).toBe(181345830);
});

test("day3 part two test", () => {
  const input = fs.readFileSync("2024/day3/input.txt", "utf8");

  expect(part_two_first_solution(input)).toBe(98729041);
});
