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
 * 二叉树先序遍历
 */
function preorderTraversal(root: TreeNode | null): number[] {
  let res = [];
  traverse(root, res);
  return res;
};

function traverse(root: TreeNode | null, nums: number[]) {
  if (!root) return;

  nums.push(root.val);
  traverse(root.left, nums);
  traverse(root.right, nums);
}