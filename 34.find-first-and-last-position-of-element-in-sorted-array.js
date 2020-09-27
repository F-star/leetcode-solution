/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const item = binarySearch(nums, 0, nums.length - 1, target)
  if (!item) return [-1, -1]
  const low = binarySearchLow(nums, item.low, item.mid, target)
  const high = binarySearchHigh(nums, item.mid, item.high, target)
  return [low, high]
};

var binarySearch = function(nums, low, high, target) {
  let mid

  while (low <= high) {
    mid = Math.floor( (low + high) / 2 )
    if (target === nums[mid]) {
      return { low, mid, high }
    }
    if (target < nums[mid]) high = mid - 1
    else low = mid + 1
  }
  return null
}

var binarySearchLow = function(nums, low, high, target) {
  let mid

  while (low <= high) {
    mid = Math.floor( (low + high) / 2 )
    if (target === nums[mid] && target !== nums[mid - 1]) {
      return mid
    }
    if (target <= nums[mid]) high = mid - 1
    else low = mid + 1
  }
  return null
}

var binarySearchHigh = function(nums, low, high, target) {
  let mid

  while (low <= high) {
    mid = Math.floor( (low + high) / 2 )
    if (target === nums[mid] && target !== nums[mid + 1]) {
      return mid
    }
    if (target < nums[mid]) high = mid - 1
    else low = mid + 1
  }
  return null
}
// @lc code=end

