let cache = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
};

/**
 * 将罗马数字字符串转成十进制数字
 */
function romanToInt(s: string): number {
  let res = 0;
  for (let i = 0; i < s.length; ++i) {
    if (i + 1 < s.length && cache[s[i]] < cache[s[i + 1]]) {
      res += cache[s[i + 1]] - cache[s[i]];
      ++i;
    } else {
      res += cache[s[i]];
    }
  }

  return res;
};