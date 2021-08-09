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
 * 计算二叉树所有左叶子节点的和
 */
function sumOfLeftLeaves(root: TreeNode | null): number {
  let res = 0;
  function dfs(node: TreeNode | null, isLeft: boolean) {
    if (!node) return;
    if (!node.left && !node.right && isLeft) {
      res += node.val;
      return;
    }
    dfs(node.left, true);
    dfs(node.right, false);
  }
  dfs(root, false);

  return res;
};