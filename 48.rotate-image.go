/*
 * @lc app=leetcode id=48 lang=golang
 *
 * [48] Rotate Image
 */
// @lc code=start
func rotate(matrix [][]int) {
	size := len(matrix)
	// 顺时针旋转 90 度
	cx := float32(size-1) / 2.0
	cy := cx

	for i, rowSize := 0, size/2; i < rowSize; i++ {
		for j, colSize := 0, (size+1)/2; j < colSize; j++ {

			tx := i
			ty := j
			cur := matrix[i][j]
			for m := 0; m < 4; m++ {
				tx, ty = getTargetPos(float32(tx), float32(ty), cx, cy)
				next := matrix[tx][ty]
				matrix[tx][ty] = cur
				cur = next
			}
		}
	}
}

// transform matrix
func getTargetPos(x, y, cx, cy float32) (int, int) {
	// translate
	x -= cx
	y -= cy
	// rotate
	nx := y
	ny := -x
	// translate
	nx += cx
	ny += cy
	return int(nx), int(ny)
}

// @lc code=end
