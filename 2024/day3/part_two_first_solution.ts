const instReg = /^[\s\S]*?(?=don't\(\))|do\(\)[\s\S]*?(?=don't\(\)|$)/g;
const regexp = /mul\(\d{1,3}\,\d{1,3}\)/g;
const numReg = /\d{1,3}/g;

const calMul = (a: number, b: number): number => {
  return a * b;
};

const solution = (inputFile: string) => {
  const arr = inputFile.match(instReg).join("").match(regexp);
  let res = 0;

  arr.forEach((val) => {
    const [a, b] = val.match(numReg).map(Number);
    res += calMul(a, b);
  });

  return res;
};

export default solution;
