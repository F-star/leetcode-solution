/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length <= 1) return nums

  for (let i = nums.length - 1; i > 0; i--) {
    const prevnum = nums[i - 1]
    const num = nums[i]
    if (prevnum < num) {
      for (let j = nums.length - 1; j >= i; j--) {
        if (nums[j] > prevnum) {
          [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]]
          reverse(nums, i, nums.length - 1)
          return
        }
      }
    }
  }
  reverse(nums, 0, nums.length - 1)
};

function reverse(a, start, end) {
  const len = Math.floor((end - start + 1) / 2)
  for (let i = 0; i < len; i++) {
    [a[start + i], a[end - i]] = [a[end - i], a[start + i]] 
  }
}
// @lc code=end

