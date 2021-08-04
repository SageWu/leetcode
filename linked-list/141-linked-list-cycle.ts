class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 判断链表是否存在环
 * 使用快慢指针
 */
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow = head;
  let fast = head;
  while (fast) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      break;
    }
    if (slow.next) {
      slow = slow.next;
    } else {
      break;
    }
    if (fast === slow) {
      return true;
    }
  }

  return false;
};