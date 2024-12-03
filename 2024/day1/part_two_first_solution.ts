const solution = (inputFile: string[], N: number) => {
  const leftArr: number[] = Array.from({ length: N }).map(() => 0);
  const rightArr: number[] = Array.from({ length: N }).map(() => 0);
  const map = new Map();
  let sum = 0;

  inputFile.forEach((val, idx) => {
    const [left, right] = val.split("   ");

    leftArr[idx] = Number(left);
    rightArr[idx] = Number(right);
  });

  leftArr.forEach((val) => {
    map.set(val, 0);
  });

  rightArr.forEach((val) => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    }
  });

  map.forEach((val, key) => {
    sum += val * key;
  });

  return sum;
};

export default solution;
