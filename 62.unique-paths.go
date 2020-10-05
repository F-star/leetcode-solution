/*
 * @lc app=leetcode id=62 lang=golang
 *
 * [62] Unique Paths
 */
package main

// @lc code=start
func uniquePaths(m int, n int) int {
	// 特征：走的步数相同。向下（向右）的步数都是相同的
	// 其实就是 1 和 0 的组合：n-1 个 0 和 m-1 个 1 的所有组合方式的数量
	total := (m - 1) + (n - 1)
	sub := m - 1
	return getCombination(sub, total)
}

// 计算排列数
func getCombination(m, n int) int {
	// n! / (m! * (n-m)!)
	large := m
	small := n - m
	if n-m > large {
		large = n - m
		small = m
	}

	s := 1
	for i := large + 1; i <= n; i++ {
		s *= i
	}

	p := 1
	for i := 1; i <= small; i++ {
		p *= i
	}

	return s / p
}

// @lc code=end
