/**
 * 给定一个递增数组，移除其中重复的数字
 * 将唯一的数字不断往前移动
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }

  let k = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[k]) {
      nums[++k] = nums[i]
    }
  }
  return k + 1;
};