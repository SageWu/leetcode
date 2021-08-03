/**
 * 给定一个数组，其中有个数字重复出现过一半以上，找出该数字
 * 边统计边判断是否找到
 */
// function majorityElement(nums: number[]): number {
//   let c = {};
//   let tmp = Math.floor(nums.length / 2);
//   for (let i = 0; i < nums.length; ++i) {
//     let num = nums[i];
//     if (c[num]) {
//       ++c[num];
//     } else {
//       c[num] = 1;
//     }

//     if (c[num] > tmp) {
//       return num;
//     }
//   }
// };

function majorityElement(nums: number[]): number {
  let res = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; ++i) {
    if (count === 0) {
      res = nums[i];
    }
    count = nums[i] === res? count + 1: count - 1;
  }

  return res;
}