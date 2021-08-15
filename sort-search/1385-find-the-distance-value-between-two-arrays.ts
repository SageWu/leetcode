/**
 * 找出数组arr1中有多少个数字与arr2中的数字差大于d
 */
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  arr2.sort((a, b) => a - b);

  let min, max, left, right;
  let res = 0;
  for (let i = 0; i < arr1.length; ++i) {
    min = arr1[i] - d;
    max = arr1[i] + d;
    left = 0;
    right = arr2.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr2[mid] >= min && arr2[mid] <= max) {
        break;
      } else if (arr2[mid] > max) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (left > right) {
      ++res;
    }
  }

  return res;
};