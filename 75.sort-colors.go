/*
 * @lc app=leetcode id=75 lang=golang
 *
 * [75] Sort Colors
 */

// @lc code=start
func sortColors(nums []int) {
	redCount := 0
	whiteCount := 0
	blueCount := 0
	for i := 0; i < len(nums); i++ {
		n := nums[i]
		if n == 0 {
			redCount++
		} else if n == 1 {
			whiteCount++
		} else {
			blueCount++
		}
	}

	i := 0
	for j := 0; j < redCount; j++ {
		nums[i] = 0
		i++
	}
	for j := 0; j < whiteCount; j++ {
		nums[i] = 1
		i++
	}
	for j := 0; j < blueCount; j++ {
		nums[i] = 2
		i++
	}
}

// @lc code=end

