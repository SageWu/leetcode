/**
 * 计算斐波那契数
 */
function fib(n: number): number {
  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;

  for (let i = 2; i <= n; ++i) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

// const memo = {};
// function fib(n: number): number {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   if (memo[n] === undefined) {
//     memo[n] = fib(n - 1) + fib(n - 2);
//   }

//   return memo[n];
// };