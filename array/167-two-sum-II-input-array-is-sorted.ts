/**
 * 给定一个排好序的数组，找出两个数字相加等于目标值
 * 由于已经排好序，则可以使用双指针
 */
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum > target) {
      --right;
    } else if (sum < target) {
      ++left;
    } else {
      break;
    }
  }
  return [left + 1, right + 1];
};