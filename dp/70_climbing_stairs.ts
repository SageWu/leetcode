/**
 * n阶楼梯，有多少种爬楼梯的方式
 */
function climbStairs(n: number): number {
  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; ++i) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

// const memo = { 0: 0, 1: 1, 2: 2 };
// function climbStairs(n: number): number {
//   if (n < 0) return 0;

//   if (memo[n]) return memo[n];
//   memo[n] = climbStairs(n - 1) + climbStairs(n - 2);

//   return memo[n];
// }

// function climbStairs(n: number): number {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   return climbStairs(n - 1) + climbStairs(n - 2);
// };