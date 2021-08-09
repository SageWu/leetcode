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

function postorderTraversal(root: TreeNode | null): number[] {
  let nums = [];
  traverse(root, nums);
  return nums;
};

function traverse(root: TreeNode | null, nums: number[]) {
  if (!root) return;

  traverse(root.left, nums);
  traverse(root.right, nums);
  nums.push(root.val);
}