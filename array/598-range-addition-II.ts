/**
 * 对矩阵经过一系列操作后，最大的数字出现的次数。
 */
function maxCount(m: number, n: number, ops: number[][]): number {
  let r = m;
  let c = n;
  let res = r * c;
  for (let i = 0; i < ops.length; ++i) {
    let op = ops[i];
    let tmp1 = Math.max(0, r - op[0]);
    let tmp2 = Math.max(0, c - op[1]);
    res -= (tmp1 * c) + (tmp2 * (Math.max(0, r - tmp1)));
    r -= tmp1;
    c -= tmp2;
  }

  return res;
};
