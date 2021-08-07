/**
 * 存在一个范围1-n，找出数组中不存在该范围内的数字
 * 使用Set表示范围，出现的则移除，剩下的即没有出现
 * 也可先排序，然后数值和下标不对应的即不存在
 */
function findDisappearedNumbers(nums: number[]): number[] {
  let n = nums.length;
  let range = new Set(new Array(n).fill(true).map((_, index) => index + 1));
  for (let i = 0; i < nums.length; ++i) {
    range.delete(nums[i]);
  }
  return Array.from(range);
};