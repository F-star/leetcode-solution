/*
 * @lc app=leetcode id=86 lang=golang
 *
 * [86] Partition List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func partition(head *ListNode, x int) *ListNode {

	var left *ListNode = nil
	var right *ListNode = nil

	var leftHead *ListNode = nil
	var rightHead *ListNode = nil

	p := head
	for p != nil {
		if p.Val < x {
			if left == nil {
				left = p
				leftHead = p
			} else {
				left.Next = p
				left = left.Next
			}
		} else {
			if right == nil {
				right = p
				rightHead = p
			} else {
				right.Next = p
				right = right.Next
			}
		}
		p = p.Next
	}

	if leftHead == nil {
		return rightHead
	}
	left.Next = rightHead
	if right != nil {
		right.Next = nil // this is important! otherwise will result a circle
	}
	return leftHead
}

// @lc code=end
