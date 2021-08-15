/**
 * 找出数组最高峰的下标
 */
function peakIndexInMountainArray(arr: number[]): number {
  let left = 1;
  let right = arr.length - 2;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] >= arr[mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};