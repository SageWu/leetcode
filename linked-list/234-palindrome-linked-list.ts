class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 判断链表是否回文
 * 使用快慢指针定位中心节点，旋转后半段，再将两段进行比较
 */
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;
  while (fast && slow) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }

  return true;
};

function reverse(head: ListNode): ListNode {
  let prev = null;
  let cur = head;

  while (cur) {
    let tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }

  return prev;
}