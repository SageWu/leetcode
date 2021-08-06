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
 * 获取二叉树的最大深度
 * 递归获取树的深度，也可以是深度优先遍历
 */
function maxDepth(root: TreeNode | null): number {
  return depth(root);
};

function depth(root: TreeNode | null): number {
  if (!root) return 0;

  return Math.max(depth(root.left), depth(root.right)) + 1;
}

/**
 * 宽度优先遍历
 */
// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;

//   let queue = [root];
//   let depth = 0;
//   while (queue.length) {
//     let len = queue.length;
//     for (let i = 0; i < len; ++i) {
//       let node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     ++depth;
//   }

//   return depth;
// };