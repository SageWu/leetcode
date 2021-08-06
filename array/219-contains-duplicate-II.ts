
/**
 * 判断数组中是否存在相邻位置小于k的重复元素
 * 使用Map
 */
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   let cache = new Map();

//   for (let i = 0; i < nums.length; ++i) {
//     if (cache.has(nums[i])) {
//       if (Math.abs(cache.get(nums[i]) - i) <= k) {
//         return true;
//       }
//     }

//     cache.set(nums[i], i);
//   }

//   return false;
// };

/**
 * 使用Set以及滑动窗口，性能更好
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let win = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (win.has(nums[i])) return true;
    win.add(nums[i]);
    if (i >= k) win.delete(nums[i - k]);
  }
  return false;
}