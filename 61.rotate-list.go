/*
 * @lc app=leetcode id=61 lang=golang
 *
 * [61] Rotate List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	p := head
	tail := head
	size := 0
	for {
		size++
		if p.Next == nil {
			tail = p
			break
		}
		p = p.Next
	}

	k = k % size
	if k == 0 {
		return head
	}

	p = head
	for i := size - k - 1; i > 0; i-- {
		p = p.Next
	}
	tail.Next = head
	head = p.Next
	p.Next = nil

	return head
}

// @lc code=end
