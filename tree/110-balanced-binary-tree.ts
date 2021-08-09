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
 * 判断二叉树是否平衡
 */
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  if (!isBalanced(root.left)) return false;
  if (!isBalanced(root.right)) return false;
  return Math.abs(depth(root.left) - depth(root.right)) <= 1;
};

function depth(root: TreeNode | null): number {
  if (!root) return 0;

  return Math.max(depth(root.left), depth(root.right)) + 1;
}