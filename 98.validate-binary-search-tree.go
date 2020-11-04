/*
 * @lc app=leetcode id=98 lang=golang
 *
 * [98] Validate Binary Search Tree
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
// package main

// type TreeNode struct {
// 	Val   int
// 	Left  *TreeNode
// 	Right *TreeNode
// }

func isValidBST(root *TreeNode) bool {
	isBST := true
	if root == nil {
		return true
	}
	f(root, &isBST)
	return isBST
}

func f(node *TreeNode, isBST *bool) (int, int) {
	if *isBST == false {
		return 0, 0
	}

	var min, max int
	if node.Left == nil {
		min = node.Val
	} else {
		leftMin, leftMax := f(node.Left, isBST)
		if node.Val > leftMax {
			min = leftMin
		} else {
			*isBST = false
			return 0, 0
		}
	}

	if node.Right == nil {
		max = node.Val
	} else {
		rightMin, rightMax := f(node.Right, isBST)
		if node.Val < rightMin {
			max = rightMax
		} else {
			*isBST = false
			return 0, 0
		}
	}

	return min, max
}

// @lc code=end
