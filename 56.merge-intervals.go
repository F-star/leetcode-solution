/*
 * @lc app=leetcode id=56 lang=golang
 *
 * [56] Merge Intervals
 */
import "sort"

// @lc code=start
func merge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return intervals
	}

	sort.SliceStable(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	left := intervals[0][0]
	right := intervals[0][1]
	merged := make([][]int, 0)

	for i := 1; i < len(intervals); i++ {
		item := intervals[i]
		start := item[0]
		end := item[1]
		if start > right {
			merged = append(merged, []int{left, right})
			left = start
			right = end
		} else {
			right = getMax(right, end)
		}
	}
	merged = append(merged, []int{left, right})
	return merged
}

func getMax(x, y int) int {
	if x < y {
		return y
	}
	return x
}

// @lc code=end
