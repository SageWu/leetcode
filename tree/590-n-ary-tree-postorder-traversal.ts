class TreeNode {
  val: number;
  children: TreeNode[];

  constructor(val?: number, children?: TreeNode[]) {
    this.val = (val===undefined ? 0 : val);
    this.children = (children===undefined ? [] : children)
  }
}

/**
 * n叉树后序遍历
 */
function postorder(root: TreeNode | null): number[] {
  let res = [];

  function traverse(node: TreeNode | null) {
    if (!root) return;

    for (let i = 0; i < node.children.length; ++i) {
      traverse(node.children[i]);
    }
    res.push(node.val);
  }
  traverse(root);

  return res;
};