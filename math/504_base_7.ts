/**
 * 数字转为基数为7的字符串
 */
function convertToBase7(num: number): string {
  if (num === 0) return "0";

  let res = "";
  let tmp = num >= 0? num: Math.abs(num);

  while (tmp) {
    res = (tmp % 7) + res;
    tmp = Math.floor(tmp / 7);
  }

  return num < 0? "-" + res: res;
};