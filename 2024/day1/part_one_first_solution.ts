const solution = (inputFile: string[], N: number) => {
  const leftArr: number[] = Array.from({ length: N }).map(() => 0);
  const rightArr: number[] = Array.from({ length: N }).map(() => 0);

  inputFile.forEach((val, idx) => {
    const [left, right] = val.split("   ");

    leftArr[idx] = Number(left);
    rightArr[idx] = Number(right);
  });

  leftArr.sort((a, b) => a - b);
  rightArr.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += Math.abs(leftArr[i] - rightArr[i]);
  }

  return sum;
};

export default solution;
