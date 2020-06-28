/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let p = { next: null },
    head = p;

  let val;
  while (l1 && l2) {

    if (l1.val > l2.val) {
      val = l2.val;
      l2 = l2.next;
    } else {
      val = l1.val;
      l1 = l1.next;
    }
    p.next = new ListNode(val);
    p = p.next;
  }
  if (l1) {
    p.next = l1;
  }
  else if (l2) {
    p.next = l2
  }
  return head.next;
};
// @lc code=end

