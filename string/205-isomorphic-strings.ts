/**
 * 字符串s是否能够通过替换字符，使得和t相等
 */
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let shash = {}, thash = {};
  for (let i = 0; i < s.length; ++i) {
    if (shash[s[i]] === undefined) {
      shash[s[i]] = i;
    }
    if (thash[t[i]] === undefined) {
      thash[t[i]] = i;
    }
    if (shash[s[i]] !== thash[t[i]]) {
      return false;
    }
  }

  return true;
};