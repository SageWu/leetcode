/**
 * 找出第一个坏版本，类似扔鸡蛋问题
 * 采用二分查找
 */
var solution = function(isBadVersion: any) {
  return function(n: number): number {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};