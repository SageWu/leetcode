/**
 * 分发饼干，经可能满足更多小朋友
 * 采用贪心策略
 */
function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let c = 0;
  while (i < s.length) {
    if (s[i] >= g[j]) {
      ++j;
      ++c;
    }
    ++i;
  }

  return c;
};