/**
 * 给定一个数组，将数组元素向前移动k步，溢出部分填充到前面
 */
function rotate(nums: number[], k: number): void {
  if (nums.length <= 1) return;

  k = k % nums.length;
  if (k > 0) {
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
  }
};

function reverse(array: number[], left: number, right: number): void {
  if (left >= right) return;

  while (left < right) {
    let tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
    ++left;
    --right;
  }
}