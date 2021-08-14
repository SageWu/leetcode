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
 * 获取二叉排序树中数字的最小差值
 */
function getMinimumDifference(root: TreeNode | null): number {
  let nums = [];
  function dfs(root: TreeNode | null): void {
    if (!root) return;
    dfs(root.left);
    nums.push(root.val);
    dfs(root.right);
  }
  dfs(root);
  
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length; ++i) {
    min = Math.min(min, Math.abs(nums[i] - nums[i - 1]));
  }

  return min;
};