/**
 * 找出数组中第三大数字
 * 排序处理
 */
function thirdMax(nums: number[]): number {
  nums = Array.from(new Set(nums)).sort((a, b) => b - a);
  if (nums.length >= 3) {
    return nums[2];
  } else {
    return nums[0];
  }
};