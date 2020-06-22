/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // solution 1：Time complexity: O(k*m).
  /* const len = lists.length;
  const head = new ListNode();
  let p = head; 

  while (true) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIdx = -1;
    for (let i = 0; i < len; i++) {
      if (lists[i] === null) continue;
      if (lists[i].val < min) {
        min = lists[i].val;
        minIdx = i;
      }
    }
    if (minIdx === -1) break; 
    p.next = lists[minIdx];
    p = p.next;
    lists[minIdx] = lists[minIdx].next;
  }
  return head.next; */

  // solution 2：optimize the solution 1.
  const head = new ListNode();
  let p = head; 

  // 将数组中值为 null 的元素，放到数组的最右边，并修改 size。
  let size = lists.length;
  let offset = 0;
  for (let i = 0; i < size; i++) {
    for (let j = i + offset; lists[j] === null; j++) {
      offset++;
      size = lists.length - offset;
    }
    lists[i] = lists[i + offset];
  }

  while (true) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIdx = -1;
    for (let i = 0; i < size; i++) {
      if (lists[i].val < min) {
        min = lists[i].val;
        minIdx = i;
      }
    }
    if (minIdx === -1) break; 
    p.next = lists[minIdx];
    p = p.next;
    lists[minIdx] = lists[minIdx].next;
    if (lists[minIdx] === null) {
      lists[minIdx] = lists[size - 1];
      size--;
    }
  }
  return head.next;
};
// @lc code=end

