/**
 * 字符串中最后一个单词的长度
 */
function lengthOfLastWord(s: string): number {
  let res = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === " ") {
      if (res) return res;
    } else {
      ++res;
    }
  }

  return res;
};