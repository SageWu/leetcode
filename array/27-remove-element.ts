/**
 * 给定一组数字，删除特定的数值
 * 将不等于特定数值的元素往前移动
 */
function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) {
    return 0
  }

  let k = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }

  return k;
};