/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid

  while (left <= right) {
    mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[left] < nums[right]) {
      // 正常二分法
      if (target < nums[mid]) right = mid - 1
      else left = mid + 1
    }
    else {
      if (nums[mid] > nums[right]) { // nums[mid] pos in left of pivot
        if (target > nums[mid]) left = mid + 1
        else {
          if (target >= nums[left]) right = mid - 1
          else left = mid + 1
        }
      } else { // nums[mid] pos in right of pivot
        if (target < nums[mid]) right = mid - 1
        else {
          if (target >= nums[left]) right = mid - 1
          else left = mid + 1
        }
      }
    }
  }
  return -1
};
// @lc code=end

