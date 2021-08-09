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
 * 中序遍历二叉树
 * 递归实现
 */
function inorderTraversal(root: TreeNode | null): number[] {
  let res = [];
  traverse(root, res);
  return res;
};

function traverse(root: TreeNode | null, nums: number[]) {
  if (!root) return;

  traverse(root.left, nums);
  nums.push(root.val);
  traverse(root.right, nums);
}

/**
 * 循环实现
 */
// function inorderTraversal(root: TreeNode | null): number[] {
//   let res = [];
//   let s = [];
//   let cur = root;
//   while (s.length || cur) {
//     if (cur) {
//       s.push(cur);
//       cur = cur.left;
//     } else {
//       cur = s.pop();
//       res.push(cur.val);
//       cur = cur.right;
//     }
//   }

//   return res;
// };