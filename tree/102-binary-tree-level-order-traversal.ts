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
 * 二叉树按层级获取数据
 * 宽度优先遍历
 */
function levelOrder(root: TreeNode | null): number[][] {
  let res = [];
  if (!root) return res;

  let queue = [root];
  while (queue.length) {
    let tmpQueue = queue;
    queue = [];
    let level = [];
    for (let i = 0; i < tmpQueue.length; ++i) {
      level.push(tmpQueue[i].val);
      tmpQueue[i].left && (queue[queue.length] = tmpQueue[i].left);
      tmpQueue[i].right && (queue[queue.length] = tmpQueue[i].right);
    }
    res.push(level);
  }

  return res;
};