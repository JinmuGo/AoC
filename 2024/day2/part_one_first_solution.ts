enum STATE {
  INSC,
  DESC,
}

const RANGE = 3;

const getDiffAndState = (a: number, b: number) => {
  const d = a - b;

  if (d > 0) {
    return [d, STATE.DESC];
  } else if (d < 0) {
    return [-d, STATE.INSC];
  } else {
    return [d, 0];
  }
};

const solutionImpl = (prev: number, curr: string) => {
  const arr = curr.split(" ").map(Number);
  const len = arr.length;
  let isSafe = true;
  let [d, state] = getDiffAndState(arr[0], arr[1]);
  const initState = state;

  for (let i = 1; i < len; i++) {
    if (state !== initState || d > RANGE || d === 0) {
      isSafe = false;
      break;
    }

    const a = arr[i];
    const b = arr[i + 1];

    [d, state] = getDiffAndState(a, b);
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
