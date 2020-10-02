/*
 * @lc app=leetcode id=46 lang=golang
 *
 * [46] Permutations
 */
package permute

// @lc code=start
func permute(nums []int) [][]int {
	// init
	list := [][]int{}
	r(0, nums, &list)
	return list
}

// recursion func
func r(index int, nums []int, list *[][]int) {
	if index == len(nums)-1 {
		numsCopy := make([]int, len(nums))
		copy(numsCopy, nums)
		*list = append(*list, numsCopy)
		return
	}
	for m := index; m < len(nums); m++ {
		swap(nums, index, m)
		r(index+1, nums, list)
		swap(nums, index, m)
	}
}

func swap(arr []int, i int, j int) {
	tmp := arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}

// @lc code=end
