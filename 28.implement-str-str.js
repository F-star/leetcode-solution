/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 这个是字符串匹配的实现。。
  // 主要有 BF、RK（BF算法的优化版）、BM（最高效最常用）、KMP（非常著名） 这几种匹配算法。。手写实现实在不是很简单（除了BF）。。
  // 这里我就不实现了。。。
  if (needle === '') return 0;
  return haystack.indexOf(needle);
};
// @lc code=end

