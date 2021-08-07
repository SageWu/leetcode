/**
 * 计算岛屿的周长
 */
function islandPerimeter(grid: number[][]): number {
  let row = grid.length;
  let col = grid[0].length;
  let res = 0;

  for (let r = 0; r < row; ++r) {
    for (let c = 0; c < col; ++c) {
      if (grid[r][c] === 1) {
        if (grid[r - 1] === undefined || grid[r - 1][c] === 0) ++res;
        if (grid[r + 1] === undefined || grid[r + 1][c] === 0) ++res;
        if (grid[r][c - 1] === undefined || grid[r][c - 1] === 0) ++res;
        if (grid[r][c + 1] === undefined || grid[r][c + 1] === 0) ++ res;
      }
    }
  }

  return res;
};