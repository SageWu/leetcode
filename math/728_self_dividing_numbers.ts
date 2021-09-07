/**
 * 判断数字是否能被各个位上的数字整除
 */
function selfDividingNumbers(left: number, right: number): number[] {
  let res = [];
  for (let i = left; i <= right; ++i) {
    const flag = String(i).split("").every((digit) => {
      return i % Number(digit) === 0;
    });
    if (flag) {
      res.push(i);
    }
  }

  return res;
};