/**
 * 获取两个数组的交集
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  let res = new Set<number>();
  if (nums1.length > nums2.length) {
    let tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }
  let nums2Set = new Set(nums2)
  for (let i = 0; i < nums1.length; ++i) {
    if (nums2Set.has(nums1[i])) {
      res.add(nums1[i]);
    }
  }
  return Array.from(res);
};