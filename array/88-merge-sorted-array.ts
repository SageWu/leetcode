/**
 * 合并两个已经排好序的数组。
 * 利用数组1后面存在空闲空间，从大到小合并。
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let last = m + n - 1;
  --m;
  --n;
  for (let i = last; i >= 0; --i) {
    if (m < 0) {
      nums1[i] = nums2[n];
      --n;
    } else if (n < 0) {
      break;
    } else {
      if (nums1[m] > nums2[n]) {
        nums1[i] = nums1[m];
        --m;
      } else {
        nums1[i] = nums2[n];
        --n;
      }
    }
  }
};