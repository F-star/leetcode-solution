/*
 * @lc app=leetcode id=82 lang=golang
 *
 * [82] Remove Duplicates from Sorted List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	var q *ListNode = nil
	var qHead *ListNode = nil
	count := 0

	var pp *ListNode = nil
	for p := head; p != nil; {
		if p != head && p.Val != pp.Val {
			if count == 1 {
				if q == nil { // 如果 q 不存在，初始化 q，并记录 qhead
					q = pp
					qHead = q
				} else {
					q.Next = pp
					q = q.Next
				}
			}
			count = 0
		}
		count++
		pp = p
		p = p.Next
	}

	if count == 1 {
		if q != nil {
			q.Next = pp
		} else {
			return pp
		}
	} else {
		if q != nil {
			q.Next = nil
		}
	}

	return qHead
}

// @lc code=end
