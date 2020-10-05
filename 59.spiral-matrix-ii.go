/*
 * @lc app=leetcode id=59 lang=golang
 *
 * [59] Spiral Matrix II
 */
// @lc code=start
func generateMatrix(n int) [][]int {
	matrix := make([][]int, n)
	for i := 0; i < n; i++ {
		matrix[i] = make([]int, n)
	}

	dx := 0 // direction vetor
	dy := 1
	step := n
	modDirectCount := 0
	count := step
	x := 0
	y := -1
	for i, size := 1, n*n+1; i < size; i++ {
		if count == 0 {
			dx, dy = dy, -dx

			modDirectCount++
			if modDirectCount%2 == 1 { //	odd count mod direction, step increase 1.
				step--
			}
			count = step
		}

		x += dx
		y += dy
		matrix[x][y] = i

		count--
	}
	return matrix
}

// @lc code=end
