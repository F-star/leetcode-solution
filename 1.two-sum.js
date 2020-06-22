/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    let otherVal = target - nums[i];
    if (map[otherVal] != undefined) {
      return [map[otherVal], i]
    }
    map[nums[i]] = i;
  }
};
// @lc code=end

