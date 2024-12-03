const fs = require("fs");
const {
  default: part_one_first_solution,
} = require("./part_one_first_solution.ts");
const {
  default: part_two_first_solution,
} = require("./part_two_first_solution.ts");

test("day1 part one test", () => {
  const input = fs.readFileSync("2024/day1/input.txt", "utf8").split("\n");
  const N = input.length;

  expect(part_one_first_solution(input, N)).toBe(3508942);
});

test("day1 part two test", () => {
  const input = fs.readFileSync("2024/day1/input.txt", "utf8").split("\n");
  const N = input.length;

  expect(part_two_first_solution(input, N)).toBe(26593248);
});
