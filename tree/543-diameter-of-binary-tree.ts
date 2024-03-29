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
 * 计算任意两个节点最长路径
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;

  function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    res = Math.max(res, left + right);

    return Math.max(left, right) + 1;
  }
  dfs(root);

  return res;
};