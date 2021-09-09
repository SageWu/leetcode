/**
 * 大整数相加
 */
function addStrings(num1: string, num2: string): string {
  let res = "";
  let inc = 0;
  let len = Math.max(num1.length, num2.length);
  for (let i = 1; i <= len; ++i) {
    let bit1 = Number(num1[num1.length - i] || 0);
    let bit2 = Number(num2[num2.length - i] || 0);
    let tmp = bit1 + bit2 + inc;
    res = (tmp % 10) + res;
    inc = tmp > 9? 1: 0;
  }

  if (inc) {
    res = "1" + res;
  }

  return res;
};