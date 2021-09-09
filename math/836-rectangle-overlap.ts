/**
 * 判断两个矩形是否重叠
 */
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  return isOverlap(rec1[0], rec1[2], rec2[0], rec2[2]) &&
    isOverlap(rec1[1], rec1[3], rec2[1], rec2[3]);
};

function isOverlap(left1: number, right1: number, left2: number, right2: number): boolean {
  return !(left2 >= right1 || right2 <= left1);
}