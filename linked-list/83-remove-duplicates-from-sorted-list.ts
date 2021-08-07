class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 给定一个排好序的链表，删除重复的元素
 * 双指针
 */
// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   if (!head) return head;

//   let prev = head;
//   let cur = head.next;
//   while (cur) {
//     if (cur.val !== prev.val) {
//       prev.next = cur;
//       prev = cur;
//     }
//     cur = cur.next;
//   }
//   prev.next = null;

//   return head;
// };

/**
 * 单指针方案
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};