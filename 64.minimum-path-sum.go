/*
 * @lc app=leetcode id=64 lang=golang
 *
 * [64] Minimum Path Sum
 */
// @lc code=start
func minPathSum(grid [][]int) int {
	// 回溯 + 缓存
	row := len(grid)
	if row == 0 {
		return 0
	}
	col := len(grid[0])
	if col == 0 {
		return 0
	}

	mem := make([][]int, row)
	for i := range mem {
		mem[i] = make([]int, col)
		for j := 0; j < col; j++ {
			mem[i][j] = -1
		}
	}

	return r(row-1, col-1, grid, mem)
}

func r(i int, j int, grid [][]int, mem [][]int) int {
	if i == 0 && j == 0 {
		return grid[0][0]
	}
	if mem[i][j] != -1 {
		return mem[i][j]
	}

	var min int
	if j == 0 {
		min = r(i-1, j, grid, mem)
	} else if i == 0 {
		min = r(i, j-1, grid, mem)
	} else {
		min = getMin(r(i-1, j, grid, mem), r(i, j-1, grid, mem))
	}
	v := grid[i][j] + min
	mem[i][j] = v
	return v
}

func getMin(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// @lc code=end
