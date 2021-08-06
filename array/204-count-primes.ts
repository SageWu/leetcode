/**
 * 某个范围内，存在多少个素数
 */
function countPrimes(n: number): number {
  let cache = new Array(n).fill(true);
  cache[0] = cache[1] = false;

  for (let i = 2; i < n; ++i) {
    if (!cache[i]) continue;

    for (let j = i * i; j < n; j += i) {
      cache[j] = false;
    }
  }

  let c = 0;
  for (let i = 0; i < cache.length; ++i) {
    if (cache[i]) ++c;
  }

  return c;
};