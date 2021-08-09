/**
 * 找出可以由单行按键输出的单词
 */
function findWords(words: string[]): string[] {
  let firstRow = "qwertyuiop";
  let secondRow = "asdfghjkl";
  let thirdRow = "zxcvbnm";

  let res = [];
  for (let i = 0; i < words.length; ++i) {
    let word = words[i].toLowerCase();
    let row = "";
    if (firstRow.includes(word[0])) {
      row = firstRow;
    } else if (secondRow.includes(word[0])) {
      row = secondRow;
    } else if (thirdRow.includes(word[0])) {
      row = thirdRow;
    }
    if (!row) continue;

    let flag = true;
    for (let j = 1; j < word.length; ++j) {
      if (!row.includes(word[j])) {
        flag = false;
        break;
      }
    }
    if (flag) res.push(words[i]);
  }

  return res;
};