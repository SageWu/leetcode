/**
 * 给定一个数组，0表示空格，1之间需要间隙，是否能插入n个1
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; ++i) {
    if (!flowerbed[i] &&
      (i - 1 < 0 || !flowerbed[i - 1]) &&
      (i + 1 >= flowerbed.length || !flowerbed[i + 1])
    ) {
      --n;
      flowerbed[i] = 1;
      if (n === 0) return true;
    }
  }

  return n <= 0;
};