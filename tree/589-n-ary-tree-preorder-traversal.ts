class TreeNode {
  val: number;
  children: TreeNode[];

  constructor(val?: number, children?: TreeNode[]) {
    this.val = (val===undefined ? 0 : val);
    this.children = (children===undefined ? [] : children)
  }
}

/**
 * n叉树先序遍历
 */
function preorder(root: TreeNode | null): number[] {
  let res = [];
  function traverse(root: TreeNode | null) {
    if (!root) return;

    res.push(root.val);
    for (let i = 0; i < root.children.length; ++i) {
      traverse(root.children[i]);
    }
  }
  traverse(root);

  return res;
};