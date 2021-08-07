/**
 * 存在某个范围0-n，数组中只存在n个，找出缺失的那一个数字
 * 范围总和减去数组总和即可得到
 */
function missingNumber(nums: number[]): number {
  let all = 0;
  let have = 0;

  for (let i = 0; i <= nums.length; ++i) {
    all += i;
    have += nums[i] || 0;
  }

  return all - have;
};

// function missingNumber(nums: number[]): number {
//   let range = new Set<number>(
//     new Array(nums.length + 1)
//     .fill(true)
//     .map((_, index) => index)
//   );
//   for (let i = 0; i < nums.length; ++i) {
//     range.delete(nums[i]);
//   }
//   return Array.from(range)[0];
// };