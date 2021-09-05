/**
 * 判断数字是否以3为底
 */
function isPowerOfThree(n: number): boolean {
  if (n === 1) return true;
  if (n < 3) return false;

  return Math.pow(3, 33) % n === 0;
}

// function isPowerOfThree(n: number): boolean {
//   if (n === 1) return true;
//   if (n < 3) return false;

//   while (n % 3 === 0) {
//     n /= 3;
//   }

//   return n === 1;
// };