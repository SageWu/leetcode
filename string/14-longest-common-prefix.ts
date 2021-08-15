/**
 * 找出最长公共前缀
 */
function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  for (let i = 0; i < strs[0].length; ++i) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
}

// function longestCommonPrefix(strs: string[]): string {
//   let res = "";
//   for (let i = 0; i < strs[0].length; ++i) {
//     let tmp = strs[0][i];
//     for (let j = 1; j < strs.length; ++j) {
//       if (strs[j][i] !== tmp) {
//         return res;
//       }
//     }
//     res += tmp;
//   }

//   return res;
// };