/**
 * 最小操作（n-1个元素加1）使得数组所有元素相等
 * 反过来想，操作可以为某个元素减1,这样的话，就只需要将超出最小底座部分的数值进行减1
 */
function minMoves(nums: number[]): number {
  let sum = nums[0];
  let min = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < min) {
      min = nums[i];
    }
    sum += nums[i];
  }

  return sum - min * nums.length;
};