class TreeNode {
  val: number;
  children: TreeNode[];

  constructor(val?: number, children?: TreeNode[]) {
    this.val = (val===undefined ? 0 : val);
    this.children = (children===undefined ? [] : children)
  }
}

/**
 * n叉树，计算深度
 */
function maxDepth(root: TreeNode | null): number {
  function dfs(root: TreeNode | null): number {
    if (!root) return 0;
    let max = 0;
    for (let i = 0; i < root.children.length; ++i) {
      max = Math.max(max, dfs(root.children[i]));
    }

    return max + 1;
  }

  return dfs(root);
};