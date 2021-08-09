/**
 * 存在两个数组，数组一是数组二的子集。找出数组一元素在数组二中大于的数字，尽可能靠近
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let res = [];

  for (let i = 0; i < nums1.length; ++i) {
    let index = nums2.indexOf(nums1[i]);
    let tmp = -1;
    for (let j = index + 1; j < nums2.length; ++j) {
      if (nums2[j] > nums1[i]) {
        tmp = nums2[j];
        break;
      }
    }
    res.push(tmp);
  }

  return res;
};