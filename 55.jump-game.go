/*
 * @lc app=leetcode id=55 lang=golang
 *
 * [55] Jump Game
 */
// @lc code=start
func canJump(nums []int) bool {
	end := len(nums) - 1
	max := nums[0]
	if max >= end {
		return true
	}

	for i := 1; i <= max; i++ {
		max = getMax(i+nums[i], max)
		if max >= end {
			return true
		}
	}
	return false
}

func getMax(x, y int) int {
	if x < y {
		return y
	}
	return x
}

// @lc code=end
