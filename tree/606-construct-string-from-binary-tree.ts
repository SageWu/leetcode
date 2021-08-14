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
 * 二叉树转为字符串
 */
function tree2str(root: TreeNode | null): string {
  function preorder(node: TreeNode | null) {
    if (!node) return '';

    let tmp = '' + node.val;
    if (node.left || node.right) {
      tmp += '(' + preorder(node.left) + ')';
    }
    if (node.right) {
      tmp += '(' + preorder(node.right) + ')';
    }

    return tmp;
  }

  return preorder(root);
};