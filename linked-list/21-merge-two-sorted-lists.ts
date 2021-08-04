class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 合并两条有序链表
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val > l2.val) {
    let tmp = l1;
    l1 = l2;
    l2 = tmp;
  }
  let head = l1;
  let cur = head;
  l1 = l1.next;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      cur = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      cur = l2;
      l2 = l2.next;
    }
  }
  if (l1) {
    cur.next = l1;
  }
  if (l2) {
    cur.next = l2;
  }

  return head;
};