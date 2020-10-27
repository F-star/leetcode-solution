/*
 * @lc app=leetcode id=172 lang=golang
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
func trailingZeroes(n int) int {
	count := 0
	for i := 5; i <= n; i += 5 {
		count++
		d := i / 5
		for {
			if d%5 == 0 {
				count++
			} else {
				break
			}
			d = d / 5
		}

	}
	return count
}

// @lc code=end

