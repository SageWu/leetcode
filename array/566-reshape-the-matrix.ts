/**
 * 改变矩阵二维信息
 */
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let or = mat.length;
  let oc = mat[0].length;
  if (r === or && c === oc) return mat;
  if (or * oc !== r * c) return mat;

  let tmp = mat.flat();
  let res = [];
  for (let i = 0; i < r; ++i) {
    res.push(tmp.splice(0, c))
  }

  res;
};