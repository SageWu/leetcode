/**
 * 验证数字是否可以完美开平方根
 */
function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = Math.ceil(num / 2);
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let tmp = mid * mid;
    if (tmp < num) {
      left = mid + 1;
    } else if (tmp > num) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};