enum STATE {
  INSC,
  DESC,
  SAME,
}

const RANGE = 3;

const getDiffAndState = (a: number, b: number) => {
  const d = a - b;

  if (d > 0) {
    return [d, STATE.DESC];
  } else if (d < 0) {
    return [-d, STATE.INSC];
  } else {
    return [d, STATE.SAME];
  }
};

const judgeIsSafe = (arr: number[]) => {
  const [_, initState] = getDiffAndState(arr[0], arr[1]);

  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i];
    const b = arr[i + 1];
    const [d, state] = getDiffAndState(a, b);

    if (state !== initState || d > RANGE || d === 0) {
      return false;
    }
  }

  return true;
};

const solutionImpl = (prev: number, curr: string) => {
  const originArr = curr.split(" ").map(Number);
  const subArrays = originArr.map((_, index) => {
    return originArr.filter((_, i) => i !== index);
  });

  let isSafe: boolean = false;

  while (subArrays.length) {
    const arr = subArrays.pop();

    isSafe = judgeIsSafe(arr);
    if (isSafe === true) {
      break;
    }
  }

  if (isSafe) {
    return prev + 1;
  } else {
    return prev;
  }
};

const solution = (inputFile: string[], _: number) => {
  return inputFile.reduce(solutionImpl, 0);
};

export default solution;
