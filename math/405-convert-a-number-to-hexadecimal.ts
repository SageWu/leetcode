/**
 * 十进制转十六进制
 */
function toHex(num: number): string {
  if (num === 0) return "0";

  const memo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let res = "";
  if (num < 0) {
    num = (2 ** 32 - 1) + num + 1;
  }
  while (num) {
    res = memo[num % 16] + res;
    num = Math.floor(num / 16);
  }

  return res;
};