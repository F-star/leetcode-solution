/*
 * @lc app=leetcode id=367 lang=golang
 *
 * [367] Valid Perfect Square
 */
// package app

// @lc code=start
func isPerfectSquare(num int) bool {
	// 使用 “二分法”
	left := 0
	right := num
	mid := (left + right) / 2
	var product int
	for left <= right {
		product = mid * mid
		if product == num {
			return true
		}
		if product < num {
			left = mid + 1
		} else {
			right = mid - 1
		}
		mid = (left + right) / 2
	}
	return false
}

// @lc code=end
