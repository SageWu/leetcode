/**
 * 验证数独棋盘是否合法
 */
function isValidSudoku(board: string[][]): boolean {
  let cache = new Map();
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      let char = board[i][j];
      if (char !== '.') {
        let box = 'box-' + Math.floor(i / 3) + '-' + Math.floor(j / 3) + '-' + char;
        let row = 'row-' + i + '-' + char;
        let col = 'col-' + j + '-' + char;
        if (cache.has(box) || cache.has(row) || cache.has(col)) {
          return false;
        }
        cache.set(box, true);
        cache.set(row, true);
        cache.set(col, true);
      }
    }
  }
  return true;
};