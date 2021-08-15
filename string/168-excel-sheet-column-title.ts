/**
 * 将excel列数转成字符串
 */
function convertToTitle(columnNumber: number): string {
  let res = "";
  while (columnNumber > 0) {
    let tmp = columnNumber % 26;
    if (tmp === 0) {
      res = "Z" + res;
    } else {
      res = String.fromCharCode(64 + tmp) + res;
    }
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return res;
};