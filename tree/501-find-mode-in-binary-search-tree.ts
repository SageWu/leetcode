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
 * 给定一个二叉排序树，找出出现次数最多的数字
 */
function findMode(root: TreeNode | null): number[] {
  let set = new Set<number>();
  let countMap = new Map();
  let max = 0;

  function dfs(node: TreeNode | null) {
    if (!node) return;
    
    let newCount = (countMap.get(node.val) || 0) + 1;
    countMap.set(node.val, newCount);
    if (newCount > max) {
      max = newCount;
      set.clear();
      set.add(node.val);
    } else if (newCount === max) {
      set.add(node.val);
    }

    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);

  return Array.from(set);
};