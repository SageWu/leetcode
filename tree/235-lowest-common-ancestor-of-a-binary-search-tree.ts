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
 * 给定一个二叉排序树，找出两个节点的最小公共父节点
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (p.val > q.val) {
    let tmp = p;
    p = q;
    q = tmp;
  }

	let cur = root;
  while (cur) {
    if (cur.val > q.val) {
      cur = cur.left;
    } else if (cur.val < p.val) {
      cur = cur.right;
    } else {
      return cur;
    }
  }

  return cur;
};