/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length

  let max = 0
  const hash = {}
  let left = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    // vaild index range is [left, i]
    if (hash[c] !== undefined && hash[c] >= left) {
      max = Math.max(max, i - left)
      left = hash[c] + 1
    }
    hash[c] = i
  }
  max = Math.max(max, s.length - left)
  return max
};
// @lc code=end

