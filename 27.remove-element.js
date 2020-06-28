/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 奇怪，一直都是 时间复杂度打败了 99%，就是不 100%
  const len = nums.length;

  let dist = 0;  // 向前覆盖的步长。
  for (let i = 0; i < len; i++) {
    if (nums[i] == val) {
      dist++;
      continue;
    }
    if (dist != 0) {
      nums[i - dist] = nums[i];
    }
  }
  return len - dist;
};
// @lc code=end

