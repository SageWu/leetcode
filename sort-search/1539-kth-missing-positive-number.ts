function findKthPositive(arr: number[], k: number): number {
  let i = 1;
  let j = 0;
  while (k) {
    if (arr[j] === i) {
      ++j;
    } else {
      --k;
    }
    ++i;
  }

  return i - 1;
};