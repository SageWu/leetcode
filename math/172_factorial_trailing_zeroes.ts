/**
 * 计算阶乘后面有多少个零
 */
function trailingZeroes(n: number): number {
  let res = 0;
  for (let i = n; i > 0; i = Math.floor(i / 5)) {
    res += Math.floor(i / 5);
  }

  return res;
};