class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 找出两个链表的交集
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let cache = new Set();

  while (headA) {
    cache.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (cache.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};