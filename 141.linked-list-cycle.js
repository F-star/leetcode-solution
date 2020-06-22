/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 解法1：将经过的节点的 val 赋予特殊值
  // p 表示当前指针，
  // 当然可以直接用 head 作为当前指针，但会迷惑阅读者，可读性不好。
  /* let spVal = Symbol();
  let p = head; 
  while (p) {
    if (p.val === spVal) return true;
    p.val = spVal;
    p = p.next;
  }
  return false; */

  // solution 2: fast pointer and slow pointer.
  let slowP = head,
      fastP = head;
  while (slowP) {
    slowP = slowP.next;
    fastP = fastP.next;
    if (fastP && fastP.next) fastP = fastP.next;
    else break;

    if (slowP === fastP) return true;
  }
  return false
};
// @lc code=end

