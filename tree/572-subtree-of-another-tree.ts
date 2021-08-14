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
 * 判断某颗二叉树是否是子树
 */
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function toString(node: TreeNode | null): string {
    if (!node) return 'null';
    return ',' + node.val + ',' + toString(node.left) + ',' + toString(node.right);
  }
  let s1 = toString(root);
  let s2 = toString(subRoot);

  return s1.includes(s2);
};