class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

/**
 * 获取链表代表的二进制数据表示的十进制数字
 */
function getDecimalValue(head: ListNode | null): number {
  let res = 0;
  let bits = [];
  
  while (head) {
    bits[bits.length] = head.val;
    head = head.next;
  }
  let base = 1;
  for (let i = bits.length - 1; i >= 0; --i) {
    res += bits[i] * base;
    base *= 2;
  }

  return res;
};