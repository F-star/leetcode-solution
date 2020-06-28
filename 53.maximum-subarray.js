/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 如果用穷举法，时间复杂度太高，会导致  leetCode 超时了

  // 动态规划
  let len = nums.length;
  let max = nums[0];
  let prevSum = nums[0];

  for (let i = 1; i < len; i++) {
    prevSum = Math.max(nums[i], prevSum + nums[i]);
    max = Math.max(max, prevSum);
  }
  return max;
};
// @lc code=end

