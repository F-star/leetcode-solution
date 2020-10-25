/*
 * @lc app=leetcode id=105 lang=golang
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
func buildTree(preorder []int, inorder []int) *TreeNode {
	// 优化：使用 哈希表，提高在 inorder 数组中的查询速度（注意前提是题目说明：不存在重复元素）
	// 使用这种方法的话，就不能截断 preorder 和 inorder 了。
	hash := make(map[int]int)
	for i, val := range inorder {
		hash[val] = i
	}
	// leetcode 的 golang 不能用全局变量是真的难受。。3 个本来是全局的变量，都只能作为参数进行传递
	// preorder, inorder, hash 为全局变量
	return r(preorder, inorder, hash, 0, len(preorder)-1, 0, len(inorder)-1)
}

func r(preorder []int, inorder []int, hash map[int]int, p_start, p_end, i_start, i_end int) *TreeNode {
	if p_start > p_end {
		return nil
	}

	root := &TreeNode{Val: preorder[p_start]}
	i := hash[preorder[p_start]]

	leftSize := i - i_start
	// 难点：找 inorder 的子数组的 endindex
	root.Left = r(preorder, inorder, hash, p_start+1, p_start+leftSize, i_start, i-1)
	root.Right = r(preorder, inorder, hash, p_start+leftSize+1, p_end, i+1, i_end)

	return root
}

// @lc code=end
