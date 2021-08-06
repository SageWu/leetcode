/**
 * 整合数组中数值的范围
 */
function summaryRanges(nums: number[]): string[] {
  let res = [];
  if (!nums.length) return res;

  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] - nums[i - 1] > 1) {
      res.push(
        min === max? '' + min: min + '->' + max
      )
      min = max = nums[i];
    } else {
      max = nums[i];
    }
  }
  if (min !== undefined) {
    res.push(
      min === max? '' + min: min + '->' + max
    )
  }

  return res;
};