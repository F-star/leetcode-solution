/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 这个时间复杂不是线性。。有待优化
  let len = nums.length;
  for (let i = 0; i < len; i += 2) {
    const num = nums[i];

    if (i == len - 1) return num

    let j = i + 1;  // 越界
    let findNot = true;  // 假设找不到两个相同的。
    for (; j < len; j++) {
      if (num == nums[j]) {
        [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];
        findNot = false;
        break;
      }
    }
    if (findNot) return num;
  }
};
// @lc code=end

