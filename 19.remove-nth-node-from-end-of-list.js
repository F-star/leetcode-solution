/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 一共用到三个指针。p 负责走到链表的尾部。p2 指向要删除的节点。 pp2为p2的前一个节点，用于删除p2.
  if (n == 0) return head;
  let p = head;

  for (let i = 0; i < n - 1; i++) {
    p = p.next;
    if (p == null) return head;
  }

  let p2 = head;
  let pp2 = { next: p2 };      // p2的前一个节点。
  while (p.next) {
    p = p.next;
    pp2 = p2;
    p2 = p2.next;
  }
  if (p2 == head) {
    return head.next;
  }
  else {
    pp2.next = p2.next;
    return head;
  }
};
// @lc code=end

