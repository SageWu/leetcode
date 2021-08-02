/**
 * 在数组中寻找两个数字，相加之和等于目标值，返回其下标。
 * 使用Map记录数字与目标值的差值，及其下标
 */
function twoSum(nums: number[], target: number): number[] {
  let remainToIndex = new Map<number, number>();
  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i];
    if (remainToIndex.has(num)) {
      return [remainToIndex.get(num), i]
    }
    
    remainToIndex.set(target - num, i);
  }
  return []
};