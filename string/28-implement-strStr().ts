/**
 * 寻找某个字符串在另外一个字符串中第一次出现的位置
 */
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  let next = kmp(needle);
  let j = 0;
  for (let i = 0; i < haystack.length;) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      } else {
        ++i;
        ++j;
      }
    } else {
      if (j === 0) {
        ++i;
      } else {
        j = next[j - 1];
      }
    }
  }

  return -1;
}

function kmp(str: string): number[] {
  let next = new Array(str.length).fill(0);
  let j = 0;
  for (let i = 1; i < next.length;) {
    if (str[i] !== str[j]) {
      if (j === 0) {
        ++i;
      } else {
        j = next[j - 1];
      }
    } else {
      ++j;
      next[i] = j;
      ++i;
    }
  }

  return next;
}

// function strStr(haystack: string, needle: string): number {
//   let hLen = haystack.length;
//   let nLen = needle.length;
//   if (nLen === 0) return 0;

//   let i = 0, j = 0;
//   while (i < hLen && j < nLen) {
//     if (haystack[i] === needle[j]) {
//       ++j;
//     } else {
//       i = i - j;
//       j = 0;
//     }
//     ++i;
//   }

//   return j === nLen? i - j: -1;
// };