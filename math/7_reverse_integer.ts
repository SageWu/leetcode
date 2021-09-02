const MAX_INTEGER = 2 ** 31;

/**
 * 反转整数
 */
function reverse(x: number): number {
  const isNegative = x < 0;
  x = Math.abs(x);

  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  res = isNegative? -res: res;
  if (res >= -MAX_INTEGER && res < MAX_INTEGER) {
    return res;
  }
  else {
    return 0;
  }
};