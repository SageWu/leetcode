/**
 * 在数组中找到大于目标字符的最小字符
 */
function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      if (left === right) {
        return letters[right];
      }
      right = mid;
    }
  }

  return letters[0];
};