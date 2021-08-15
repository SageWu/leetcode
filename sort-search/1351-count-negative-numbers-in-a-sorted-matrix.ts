/**
 * 计算矩阵中有多少个负数，行和列都是有序的
 */
function countNegatives(grid: number[][]): number {
  let row = 0;
  let col = grid[0].length;

  let res = 0;
  while (col > 0 && row < grid.length) {
    let index = grid[row].findIndex((value) => value < 0);
    if (~index) {
      res += (col - index) * (grid.length - row);
      col = index;
    }
    ++row;
  }

  return res;
};