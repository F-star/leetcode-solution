/*
 * @lc app=leetcode id=15 lang=golang
 *
 * [15] 3Sum
 */
import "sort"

// @lc code=start
func threeSum(nums []int) [][]int {
	ret := make([][]int, 0)
	size := len(nums)
	if size < 3 {
		return ret
	}

	sort.SliceStable(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	a := 0
	var b, c int
	length := size - 2
	for a < length && nums[a] <= 0 {
		sum := -nums[a] // a + b + c = 0, sum is equal to -a
		b = a + 1
		c = size - 1
		for b < c {
			if nums[b]+nums[c] == sum {
				ret = append(ret, []int{nums[a], nums[b], nums[c]})
			}
			// 注意，这里不是 else if，且用了 <=
			if nums[b]+nums[c] <= sum {
				// b 指向其右侧最近一个不同的值的索引 且不大于 size
				b++
				for b < size && nums[b] == nums[b-1] {
					b++
				}
			} else if nums[b]+nums[c] > sum {
				// c 指向其左侧最近一个不同的值的索引 且不小于 b
				c--
				for c > b && nums[c] == nums[c+1] {
					c--
				}
			}
		}
		// `a` move to point index whose value is not equal to nums[a]
		a++
		for a < length && nums[a] == nums[a-1] {
			a++
		}
	}
	return ret
}

// @lc code=end
