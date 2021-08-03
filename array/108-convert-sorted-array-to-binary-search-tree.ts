class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * 将给定排好序数组转换成平衡二叉树
 * 采用中分递归方式
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
  function doIt(left: number, right: number): TreeNode | null {
    if (left > right) {
      return null;
    }

    let m = Math.floor((left + right) / 2);
    return new TreeNode(
      nums[m],
      doIt(left, m - 1),
      doIt(m + 1, right)
    );
  }

  return doIt(0, nums.length - 1);
};