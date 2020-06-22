/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1, // two pointer pointing two linked list
    p2 = l2;
  // head is a sentinel node（哨兵节点）. (https://en.wikipedia.org/wiki/Sentinel_node)
  let head = new ListNode(null);
  let p = head;

  let add = 0; // decide whether next node add extra 1
  let v1, v2;
  while (p1 || p2) {
    v1 = p1 ? p1.val : 0;
    v2 = p2 ? p2.val : 0;

    let sum = v1 + v2 + add;
    add = sum > 9 ? 1 : 0;
    sum %= 10;
    p.next = new ListNode(sum);
    p = p.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  if (add === 1) {
    p.next = new ListNode(1);
  }
  return head.next;
};
// @lc code=end

