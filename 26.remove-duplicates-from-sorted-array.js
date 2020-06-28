/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  const len = nums.length;
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i - 1] === nums[i]) count++;
    else nums[i - count] = nums[i];
  }
  return len - count;
};
// @lc code=end

