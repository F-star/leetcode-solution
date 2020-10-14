/*
 * @lc app=leetcode id=74 lang=golang
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
func searchMatrix(matrix [][]int, target int) bool {
	rowsize := len(matrix)
	if rowsize == 0 {
		return false
	}
	colsize := len(matrix[0])
	if colsize == 0 {
		return false
	}
	size := rowsize * colsize

	low := 0
	high := size - 1
	mid := 0
	x := 0
	y := 0
	for low <= high {
		mid = (low + high) / 2
		x = mid / colsize
		y = mid % colsize
		if target < matrix[x][y] {
			high = mid - 1
		} else if target > matrix[x][y] {
			low = mid + 1
		} else {
			return true
		}
	}
	return false
}

// @lc code=end

