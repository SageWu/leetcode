var guess = function(num): number { return 0; }

/**
 * 猜数字
 */
function guessNumber(n: number): number {
  let left = 1;
  let right = n;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let tmp = guess(mid);
    if (tmp < 0) {
      right = mid - 1;
    } else if (tmp > 0) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};