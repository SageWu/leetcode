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
 * 计算所有节点左子树与右子树的差之和
 */
function findTilt(root: TreeNode | null): number {
  let sum = 0;

  function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    sum += Math.abs(left - right);

    return left + right + root.val;
  }
  dfs(root);

  return sum;
};