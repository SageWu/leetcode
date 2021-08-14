class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

/**
 * 计算二叉树每层的平均值
 */
function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  let res = [];
  let queue = [root];
  while (queue.length) {
    let tmp = queue;
    queue = [];
    let sum = 0;
    for (let i = 0; i < tmp.length; ++i) {
      sum += tmp[i].val;
      tmp[i].left && queue.push(tmp[i].left);
      tmp[i].right && queue.push(tmp[i].right);
    }
    res.push(sum / tmp.length);
  }

  return res;
};