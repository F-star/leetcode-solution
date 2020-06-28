/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 二分查找
  if (target < nums[0]) return 0;

  let end = nums.length - 1;
  if (target > nums[end]) return nums.length;

  let start = 0;
  while (true) {
    let mid = Math.floor((end + start) / 2);
    if (nums[mid] == target) {
      return mid;   // 找到了
    }
    // mid end 的重合的情况
    //（start 和 mid 重合的情况 最终会变成 mid 和 end 重合的情况）
    if (end == mid) {
      if (nums[mid] > target) {
        return mid
      }
      if (nums[mid] < target) {
        return mid + 1;
      }
    }
    else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
};
// @lc code=end

