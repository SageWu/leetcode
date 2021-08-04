class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  
  let prev = head;
  let next = head.next;
  while (next) {
    let tmp = next.next;
    next.next = prev;
    prev = next;
    next = tmp;
  }
  head.next = null;
  
  return prev;
};