/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;

  let i = s.length - 1;
  for (; i >= 0; i--) {
    if (s[i] !== ' ') break;
  }
  for (; i >= 0; i--) {
    if (s[i] !== ' ') count++;
    else break;
  }
  return count;
};

// @lc code=end

