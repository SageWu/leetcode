/**
 * 给定一个数组，代表一个正整数，加一。
 * 从尾部开始，加一，有进位则继续。
 */
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; --i) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        break;
      }
    } else {
      ++digits[i];
      break;
    }
  }
  return digits;
};