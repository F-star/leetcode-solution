/*
 * @lc app=leetcode id=102 lang=golang
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
	ret := [][]int{}

	if root == nil {
		return ret
	}

	curptrs := []*TreeNode{root}
	nextptrs := []*TreeNode{}
	a := []int{}

	for len(curptrs) != 0 {
		for _, p := range curptrs {
			a = append(a, p.Val)

			if p.Left != nil {
				nextptrs = append(nextptrs, p.Left)
			}
			if p.Right != nil {
				nextptrs = append(nextptrs, p.Right)
			}
		}
		if len(a) != 0 {
			ret = append(ret, a)
		}

		a = []int{}
		curptrs = nextptrs
		nextptrs = []*TreeNode{}
	}

	return ret
}

// @lc code=end

