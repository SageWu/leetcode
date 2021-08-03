/**
 * 给定一个数组，除了一个唯一的数字，其他都是成对存在，找到那个唯一的数字
 * 两个相同数字异或会抵消掉
 */
function singleNumber(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; ++i) {
    res ^= nums[i];
  }

  return res;
};