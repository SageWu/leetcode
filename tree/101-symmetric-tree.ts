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
 * 判断二叉树是否对称
 * 宽度优先遍历实现方案
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  let queue = [root];
  while (queue.length) {
    let tmpQueue = queue.splice(0, queue.length);
    let nums = tmpQueue.map((value) => value? value.val: undefined);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] === nums[right]) {
        ++left;
        --right;
      } else {
        return false;
      }
    }

    for (let i = 0; i < tmpQueue.length; ++i) {
      if (tmpQueue[i]) {
        queue[queue.length] = tmpQueue[i].left;
        queue[queue.length] = tmpQueue[i].right
      }
    }
  }

  return true;
};

/**
 * 递归实现方案
 */
// function isSymmetric(root: TreeNode | null): boolean {
//   return check (root.left, root.right);
// }

// function check(left: TreeNode | null, right: TreeNode | null): boolean {
//   if (!left && !right) return true;
//   if (left && right) {
//     return left.val === right.val && check(left.left, right.right) &&  check(left.right, right.left);
//   }
//   return false;
// }