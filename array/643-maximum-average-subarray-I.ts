/**
 * 找出数组中连续长度为k的子数组，平均数最大
 */
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < k; ++i) {
    sum += nums[i];
  }
  max = sum;

  for (let i = k; i < nums.length; ++i) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }

  return max / k;
};