/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
var deleteDuplicates = function (head) {
  if (head == null) return head;
  let prev = head;
  let p = head.next;
  while (p != null) {
    if (p.val == prev.val) {
      prev.next = p.next;
    } else {
      prev = p;
    }
    p = p.next;
  }
  return head;
};
// @lc code=end

