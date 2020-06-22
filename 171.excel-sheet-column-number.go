/*
 * @lc app=leetcode id=171 lang=golang
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
func titleToNumber(s string) int {
	r := 0
	for _, c := range s {
		r = r*26 + int(c-'A') + 1
	}
	return r
}

// @lc code=end
