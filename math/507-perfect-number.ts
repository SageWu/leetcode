/**
 * 检查数字是否能等于其因子之和（除了自身）
 */
function checkPerfectNumber(num: number): boolean {
  if (num < 3) return false;

  let sum = 0;
  for (let i = Math.floor(Math.sqrt(num)); i >= 0; --i) {
    if (num % i === 0) {
      sum += i + num / i;
    }
  }

  return num * 2 === sum;
};