/**
 * 判断数字是否以4为底
 * n = 4 ^ x
 * x = log4(n) = log2(n) / log2(4)
 */
function isPowerOfFour(n: number): boolean {
  if (n === 1) return true;
  if (n < 4) return false;

  const x = Math.log2(n) / Math.log2(4);

  return Number.isInteger(x);
};