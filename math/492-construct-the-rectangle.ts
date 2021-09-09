/**
 * 给定矩形面积，计算宽和高，两者之差尽量小
 */
function constructRectangle(area: number): number[] {
  let w = Math.floor(Math.sqrt(area));
  while (area % w !== 0) {
    --w;
  }

  return [area / w, w];
};