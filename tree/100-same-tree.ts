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
 * 对比两颗二叉树是否相同
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return isSame(p, q);
};

function isSame(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val === q.val) {
    return isSame(p.left, q.left) && isSame(p.right, q.right);
  } else {
    return false;
  }
}