class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 移除链表特定值元素
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;

  while (head && head.val === val) {
    head = head.next;
  }

  let cur = head;
  if (!cur) return cur;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};