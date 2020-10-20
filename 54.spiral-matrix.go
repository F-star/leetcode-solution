/*
 * @lc app=leetcode id=54 lang=golang
 *
 * [54] Spiral Matrix
 */
// @lc code=start
func spiralOrder(matrix [][]int) []int {
	ret := []int{}

	rowSize := len(matrix)
	if rowSize == 0 {
		return ret
	}
	colSize := len(matrix[0])
	if colSize == 0 {
		return ret
	}

	left := 0
	right := colSize - 1
	top := 0
	bottom := rowSize - 1

	x := 0
	y := 0
	dx := 1
	dy := 0

	for i, size := 0, rowSize*colSize; i < size; i++ {
		fmt.Print(y, x, "|")
		ret = append(ret, matrix[y][x])

		x += dx
		y += dy
		if x > right {
			x = right
			dx = 0
			dy = 1
			y += dy
			top++
		} else if x < left {
			x = left
			dx = 0
			dy = -1
			y += dy
			bottom--
		} else if y > bottom {
			y = bottom
			dx = -1
			dy = 0
			x += dx
			right--
		} else if y < top {
			y = top
			dx = 1
			dy = 0
			x += dx
			left++
		}
	}
	return ret
}

// @lc code=end
