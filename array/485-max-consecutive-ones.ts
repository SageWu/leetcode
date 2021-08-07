/**
 * 找出最长的连续1段
 * 贪心策略
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let res = 0;
  let c = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) {
      ++c;
      res = Math.max(res, c);
    } else {
      c = 0;
    }
  }

  return res;
};