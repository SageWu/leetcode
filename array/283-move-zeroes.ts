/**
 * 将数组中的数组往前移动，填充掉0
 */
function moveZeroes(nums: number[]): void {
  let zero = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      ++zero;
    } else if (zero > 0) {
      nums[i - zero] = nums[i];
      nums[i] = 0;
    }
  }
};