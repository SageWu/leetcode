class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 寻找链表中点
 * 使用快慢指针
 */
function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};