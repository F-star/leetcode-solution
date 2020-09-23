/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head // size is 0 or 1.

  let p = head
  let p2
  let pp = { next: p }
  head = p.next

  while (p && p.next) {
    p2 = p.next // pp->p->p2->p3
    p.next = p2.next // p->p3 p2->p3
    p2.next = p // p2->p->p3
    pp.next = p2 // pp->p2->p->p3

    pp = p // reset pp
    p = p.next // reset p，make p = p3
  }
  return head
};
// @lc code=end

