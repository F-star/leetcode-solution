/*
 * @lc app=leetcode id=1347 lang=golang
 *
 * [1347] Minimum Number of Steps to Make Two Strings Anagram
 */
// @lc code=start
func minSteps(s string, t string) int {
	hash := make(map[rune]int)
	for _, c := range s {
		hash[c]++
	}

	n := 0
	for _, c := range t {
		if hash[c] == 0 {
			n++
		} else {
			hash[c]--
		}
	}
	return n
}

// @lc code=end
