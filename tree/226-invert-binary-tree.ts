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
 * 反转二叉树
 */
// function invertTree(root: TreeNode | null): TreeNode | null {
//   if (!root) return null;
//   let tmp = root.left;
//   root.left = root.right;
//   root.right = tmp;
//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// };

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    let node = queue.pop();
    if (node.left || node.right) {
      [node.left, node.right] = [node.right, node.left];
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}