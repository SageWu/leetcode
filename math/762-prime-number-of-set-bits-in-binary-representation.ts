/**
 * 计算某个范围内，数字二进制表示1的个数是素数的个数
 */
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23]);

function countPrimeSetBits(left: number, right: number): number {
  let res = 0;

  for (let i = left; i <= right; ++i) {
    let bits = 0;
    let tmp = i;
    while (tmp) {
      if (tmp % 2 === 1) {
        ++bits;
      }
      tmp = Math.floor(tmp / 2);
    }
    if (primes.has(bits)) {
      ++res;
    }
  }

  return res;
};