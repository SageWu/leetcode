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
 * 收集二叉树的所有路径
 */
function binaryTreePaths(root: TreeNode | null): string[] {
  let res = [];

  function dfs(node: TreeNode | null, path: string) {
    if (!node) return;
    let newPath = path? path + '->' + node.val: path + node.val;
    if (!node.left && !node.right) {
      res.push(newPath);
      return;
    }
    dfs(node.left, newPath);
    dfs(node.right, newPath);
  }
  dfs(root, '');

  return res;
};