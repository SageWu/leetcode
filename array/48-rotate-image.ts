/**
 * 旋转矩阵90度
 */
function rotate(matrix: number[][]): void {
  let size = matrix.length;
  for (let r = 0; r < size; ++r) {
    for (let c = r; c < size; ++c) {
      let tmp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = tmp;
    }
    matrix[r] = matrix[r].reverse();
  }
};