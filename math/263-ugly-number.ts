
/**
 * 判断数字是否以2, 3, 5为因子
 */
function isUgly(n: number): boolean {
  if (n <= 0) return false;
  if (n <= 5) return true;

  while (n % 2 === 0) {
    n /= 2;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  while (n % 5 === 0) {
    n /= 5;
  }

  return n === 1;
};