/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = '' + x;
  let start = 0,
    end = x.length - 1;

  while (start <= end) {
    if (x[start] != x[end]) return false;
    start++;
    end--;
  }
  return true;
};
// @lc code=end

