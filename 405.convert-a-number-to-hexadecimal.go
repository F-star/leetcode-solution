/*
 * @lc app=leetcode id=405 lang=golang
 *
 * [405] Convert a Number to Hexadecimal
 */
import (
	"strconv"
)

// @lc code=start
func toHex(num int) string {

	if num < 0 {
		const MaxInt int = 0xffffffff
		num = MaxInt + num + 1
	}

	const BASE int = 16
	var r int
	s := ""
	for {
		r = num % BASE
		num = num / BASE
		if r > 9 {
			s = string(r-10+'a') + s
		} else {
			s = strconv.Itoa(r) + s
		}

		if num == 0 {
			break
		}
	}
	return s
}

// @lc code=end
