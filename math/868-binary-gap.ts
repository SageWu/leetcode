/**
 * 数字的二进制表示，两个1之间都为0,计算最长距离
 */
function binaryGap(n: number): number {
  let right;
  let index = 0;
  let res = 0;
  while (n) {
    const bit = n % 2;
    if (bit) {
      if (right !== undefined) {
        res = Math.max(res, index - right);
      }
      right = index;
    }

    n = Math.floor(n / 2);
    ++index;
  }

  return res;
};