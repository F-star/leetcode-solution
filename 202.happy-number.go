/*
 * @lc app=leetcode id=202 lang=golang
 *
 * [202] Happy Number
 */
// package a

// @lc code=start
func isHappy(n int) bool {
	var v int
	sum := 0
	values := make(map[int]bool)
	for {
		v = n % 10
		sum += v * v
		n = n / 10
		if n == 0 {
			if sum == 1 {
				return true
			}

			if values[sum] {
				return false
			} else {
				values[sum] = true
			}
			n = sum
			sum = 0
		}
	}
	return false
}

// @lc code=end
