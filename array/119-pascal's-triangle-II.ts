function generate(numRows: number): number[][] {
  let res = [];
  for (let i = 0; i < numRows; ++i) {
    let tmp = [1];
    for (let j = 1; j < i + 1; ++j) {
      tmp.push(res[i - 1][j - 1] + (res[i - 1][j] || 0));
    }
    res.push(tmp);
  }
  return res;
};

function getRow(rowIndex: number): number[] {
  return generate(rowIndex + 1)[rowIndex]
};