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
 * 根节点到叶子节点最小距离
 * 深度优先遍历
 */
// function minDepth(root: TreeNode | null): number {
//   if (!root) return 0;

//   let res = Number.MAX_SAFE_INTEGER;
//   function dfs(node: TreeNode | null, level: number) {
//     if (!node) return;

//     if (!node.left && !node.right) {
//       res = Math.min(res, level)
//       return;
//     }
//     dfs(node.left, level + 1);
//     dfs(node.right, level + 1);
//   }
//   dfs(root, 1);

//   return res;
// };

/**
 * 宽度优先遍历
 */
function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let queue = [root];
  let level = 1;
  while (queue.length) {
    let tmp = queue;
    queue = [];
    for (let i = 0; i < tmp.length; ++i) {
      if (!tmp[i].left && !tmp[i].right) {
        return level;
      } else {
        tmp[i].left && queue.push(tmp[i].left);
        tmp[i].right && queue.push(tmp[i].right);
      }
    }
    ++level;
  }

  return 0;
}