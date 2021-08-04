/**
 * 给定一个数组，是否存在出现多次的数字
 */
// function containsDuplicate(nums: number[]): boolean {
//   let cache = {}
//   for (let i = 0; i < nums.length; ++i) {
//     if (cache[nums[i]]) {
//       return true;
//     }
//     cache[nums[i]] = true;
//   }
//   return false;
// };

function containsDuplicate(nums: number[]): boolean {
  let cache = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (cache.has(nums[i])) {
      return true;
    }
    cache.add(nums[i]);
  }
  return false;
};