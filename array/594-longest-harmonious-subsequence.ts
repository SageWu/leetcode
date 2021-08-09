/**
 * 找出最长序列，其中数值最大最小相差1
 */
function findLHS(nums: number[]): number {
  let cache = new Map();
  for (let i = 0; i < nums.length; ++i) {
    cache.set(nums[i], (cache.get(nums[i]) || 0) + 1);
  }

  let keys = Array.from(cache.keys());
  let res = 0;
  for (let i = 0; i < keys.length; ++i) {
    if (cache.has(keys[i] + 1)) {
      res = Math.max(res, cache.get(keys[i]) + cache.get(keys[i] + 1));
    }
  }

  return res;
};