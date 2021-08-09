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
 * 检查二叉树是否存在某条路径上面的数字之和等于目标值
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetSum) return true;

  let queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      node.left.val = node.val + node.left.val
      if (!node.left.left &&
        !node.left.right &&
        node.left.val === targetSum
      ) return true;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.val = node.val + node.right.val;
      if (!node.right.left &&
        !node.right.right &&
        node.right.val === targetSum
      ) return true;
      queue.push(node.right);
    }
  }

  return false;
}