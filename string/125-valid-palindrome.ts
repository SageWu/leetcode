/**
 * 判断字符串中字母和数字是否对称
 */
function isPalindrome(s: string): boolean {
  let arr = s.toLocaleLowerCase()
    .split("")
    .filter((c) => (c >= "a" && c <= "z") || (c >= "0" && c <= "9"));
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    ++left;
    --right;
  }

  return true;
};