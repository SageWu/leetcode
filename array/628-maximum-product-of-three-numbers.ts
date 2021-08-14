/**
 * 找出数组中三个数字乘积最大
 */
function maximumProduct(nums: number[]): number {
  let max1, max2, max3, min1, min2;
  max1 = max2 = max3 = Number.MIN_SAFE_INTEGER;
  min1 = min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i];
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}

// function maximumProduct(nums: number[]): number {
//   nums.sort((a, b) => a - b);
//   let len = nums.length;
//   let res1 = nums[0] * nums[1] * nums[len - 1];
//   let res2 = nums[len - 1] * nums[len - 2] * nums[len - 3]
//   return Math.max(res1, res2);
// };