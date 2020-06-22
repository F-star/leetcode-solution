/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 解法1：哈希表
  /* const len = nums.length;
  const halfLen = Math.floor(len / 2);
  const hashMap = {};
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
    if (hashMap[num] > halfLen) return num;
  } */

  // 解法2：动态规划（大概是）
  let major = nums[0], 
      count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      major = nums[i];
    }
    else if (major === nums[i]) count++;
    else count--;
  }
  return major;
};
// @lc code=end

