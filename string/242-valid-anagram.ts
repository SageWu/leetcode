/**
 * 判断两个字符串，字符出现的次数是否相等
 */
function isAnagram(s: string, t: string): boolean {
  let cache = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    let index = s[i].charCodeAt(0) - 97;
    ++cache[index];
  }
  for (let i = 0; i < t.length; ++i) {
    let index = t[i].charCodeAt(0) - 97;
    --cache[index];
  }
  for (let i = 0; i < cache.length; ++i) {
    if (cache[i] !== 0) {
      return false;
    }
  }

  return true;
};