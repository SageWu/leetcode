/**
 * 尽可能吃到不同类型的糖果
 */
function distributeCandies(candyType: number[]): number {
  let cache = new Set();
  let max = 0;
  for (let i = 0; i < candyType.length; ++i) {
    if (!cache.has(candyType[i])) {
      cache.add(candyType[i]);
      ++max;
    }
  }

  return Math.min(max, candyType.length / 2);
};