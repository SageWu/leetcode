/**
 * excel列字符串转成数字
 */
function titleToNumber(columnTitle: string): number {
  let res = 0;
  let base = 1;
  for (let i = columnTitle.length - 1; i >= 0; --i) {
    res += (columnTitle[i].charCodeAt(0) - 64) * base;
    base *= 26;
  }

  return res;
};