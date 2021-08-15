/**
 * 两个数组交换一个数字，使得它们的和相同
 */
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  let sumA = 0;
  let total = 0;
  let cache = new Set();
  for (let i = 0; i < aliceSizes.length; ++i) {
    total += aliceSizes[i];
    sumA += aliceSizes[i];
  }
  for (let i = 0; i < bobSizes.length; ++i) {
    total += bobSizes[i];
    cache.add(bobSizes[i]);
  }

  let half = total / 2;
  for (let i = 0; i < aliceSizes.length; ++i) {
    let tmp = half - (sumA - aliceSizes[i]);
    if (cache.has(tmp)) {
      return [aliceSizes[i], tmp];
    }
  }

  return [];
}

// function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
//   let alice = 0;
//   for (let i = 0; i < aliceSizes.length; ++i) {
//     alice += aliceSizes[i];
//   }
//   let bob = 0;
//   for (let i = 0; i < bobSizes.length; ++i) {
//     bob += bobSizes[i];
//   }
//   let diff = (alice - bob) / 2;

//   let cache = new Map();
//   for (let i = 0; i < aliceSizes.length; ++i) {
//     cache.set(aliceSizes[i] - diff, aliceSizes[i]);
//   }
//   for (let i = 0; i < bobSizes.length; ++i) {
//     if (cache.has(bobSizes[i])) {
//       return [cache.get(bobSizes[i]), bobSizes[i]];
//     }
//   }

//   return [];
// };