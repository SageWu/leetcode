/**
 * 1 + ... + n = n * (n + 1) / 2
 * k * (k + 1) / 2 <= n
 * k * (k + 1) <= 2n
 * k^2 + k <= 2n
 * k^2 + k + 1/4 <= 2n + 1/4
 * (k + 1/2)^2 <= 2n + 1/4
 * k + 1/2 <= sqrt(2n + 1/4)
 * k <= sqrt(2n + 1/4) - 1/2
 */
function arrangeCoins(n: number): number {
  return Math.floor(Math.sqrt(2 * n + (1 / 4)) - (1 / 2));
};