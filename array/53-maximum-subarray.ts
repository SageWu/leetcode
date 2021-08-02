/**
 * 给定一个数组，寻找连续子数组，相加和最大。
 * 使用贪心策略。
 */

// function maxSubArray(nums: number[]): number {
//   let res = nums[0];
//   let prevMax = nums[0];

//   for (let i = 1; i < nums.length; ++i) {
//     prevMax = Math.max(prevMax + nums[i], nums[i]);
//     if (prevMax > res) {
//       res = prevMax;
//     }
//   }

//   return res;
// };

function maxSubArray(nums: number[]): number {
  let res = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    nums[i] = Math.max(nums[i - 1] + nums[i], nums[i]);
    res = Math.max(res, nums[i]);
  }

  return res;
};