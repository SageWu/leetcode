/**
 * 给定一系列点，求组成的最大三角形的面积
 */
function largestTriangleArea(points: number[][]): number {
  let max = 0;

  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      for (let k = j + 1; k < points.length; ++k) {
        max = Math.max(max, getArea(points[i], points[j], points[k]));
      }
    }
  }

  return max;
};

function getArea(a: number[], b: number[], c: number[]): number {
  const [ax, ay] = a;
  const [bx, by] = b;
  const [cx, cy] = c;

  const sideA = ax * (by - cy);
  const sideB = bx * (cy - ay);
  const sideC = cx * (ay - by);

  return Math.abs((sideA + sideB + sideC) / 2);
}