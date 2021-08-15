/**
 * 找出矩阵中包含1最少的k行
 */
function kWeakestRows(mat: number[][], k: number): number[] {
  const tmp = mat.map((row, index) => (
    {
      one: row.filter((value) => value).length,
      index
    }
  )).sort((a, b) => {
    if (a.one === b.one) {
      return a.index - b.index;
    } else {
      return a.one - b.one;
    }
  });

  let res = [];
  for (let i = 0; i < k; ++i) {
    res.push(tmp[i].index);
  }

  return res;
};