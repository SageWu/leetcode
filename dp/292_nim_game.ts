/**
 * 有一堆石头，数量为n，每次可以取1-3个，最后拿完的则赢，你先手是否能赢。
 */
function canWinNim(n: number): boolean {
  return n % 4 !== 0;
}

// function canWinNim(n: number): boolean {
//   n = n % 4;

//   const memo = new Array(n + 1);
//   memo[0] = false;
//   memo[1] = memo[2] = memo[3] = true;

//   for (let i = 4; i <= n; ++i) {
//     memo[i] = !memo[i - 1] || !memo[i - 2] || !memo[i - 3];
//   }

//   return memo[n];
// }

// const memo = {};
// function canWinNim(n: number): boolean {
//   if (n <= 0) return false;
//   if (n <= 3) return true;

//   if (memo[n] === undefined) {
//     memo[n] = !canWinNim(n - 1) || !canWinNim(n - 2) || !canWinNim(n - 3);
//   }

//   return memo[n];
// };