/**
 * 判断数字是否以2为底数
 */
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;

  return !(n & n - 1);
}

// function isPowerOfTwo(n: number): boolean {
//   if (n <= 0) return false;

//   let lastBit = 1;
//   while ((n & lastBit) === 0) {
//     lastBit <<= 1;
//   }

//   return (n & (~lastBit)) === 0;
// };