/*
 * @lc app=leetcode id=114 lang=golang
 *
 * [114] Flatten Binary Tree to Linked List
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
func flatten(root *TreeNode) {
	// 非原地算法
	nodes := []*TreeNode{}
	f(root, &nodes)

	p := &TreeNode{}
	for _, node := range nodes {
		p.Right = node
		p.Left = nil
		p = p.Right
	}
}

func f(node *TreeNode, nodes *[]*TreeNode) {
	if node == nil {
		return
	}
	*nodes = append(*nodes, node)
	f(node.Left, nodes)
	f(node.Right, nodes)

}

// @lc code=end
