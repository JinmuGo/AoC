const fs = require("fs");
const {
  default: part_one_first_solution,
} = require("./part_one_first_solution.ts");
const {
  default: part_two_first_solution,
} = require("./part_two_first_solution.ts");

test("day2 part one test", () => {
  const input = fs.readFileSync("2024/day2/input.txt", "utf8").split("\n");
  const N = input.length;

  expect(part_one_first_solution(input, N)).toBe(279);
});

test("day2 part two test", () => {
  const input = fs.readFileSync("2024/day2/input.txt", "utf8").split("\n");
  const N = input.length;

  expect(part_two_first_solution(input, N)).toBe(343);
});
