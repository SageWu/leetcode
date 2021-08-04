class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 删除倒数第n个节点
 * 使用双指针
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let before = head;
  for (let i = 0; i < n; ++i) {
    before = before.next;
  }
  if (!before) {
    return head.next
  }

  let after = head;
  while (before.next) {
    before = before.next;
    after = after.next;
  }

  after.next = after.next.next;
  return head;
};