/*
 * @lc app=leetcode id=168 lang=golang
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
func convertToTitle(n int) string {
	const BASE = 26
	var r int
	s := ""
	for {
		r = n % BASE // 余数
		n = n / BASE // 商

		if r == 0 && n != 0 {
			s = "Z" + s // 从上一位取数 get val from last pos
			n--
		} else {
			s = string(r+'A'-1) + s // 正常转为对应字符
		}

		if n == 0 {
			break // When n is 0, end.
		}
	}
	return s
}

// @lc code=end
