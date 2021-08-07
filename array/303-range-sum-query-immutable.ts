/**
 * 查询数组某个范围内元素的和，会频繁查询
 * 预先计算累加和
 */
class NumArray {
  private _sums;

  constructor(nums: number[]) {
    this._sums = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; ++i) {
      this._sums[i] = this._sums[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this._sums[right + 1] - this._sums[left];
  }
}