/**
 * 判断字符串是否符合给定规律
 */
function wordPattern(pattern: string, s: string): boolean {
  let arr = s.split(" ");
  if (pattern.length !== arr.length) return false;

  let hash1 = new Map(), hash2 = new Map();
  for (let i = 0; i < pattern.length; ++i) {
    if (!hash1.has(pattern[i])) {
      hash1.set(pattern[i], i);
    }
    if (!hash2.has(arr[i])) {
      hash2.set(arr[i], i);
    }
    if (hash1.get(pattern[i]) !== hash2.get(arr[i])) return false;
  }

  return true;
};