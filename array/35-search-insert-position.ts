/**
 * 给定一个排好序的数组，查找特定数字在数组中插入的位置
 * 使用二分查找
 */
function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  let m;

  while (left <= right) {
    m = Math.floor((right + left) / 2);
    let num = nums[m];
    if (num === target) {
      return m;
    } else if (num < target) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }

  if (target > nums[m]) {
    return m + 1;
  } else {
    return m;
  }
};