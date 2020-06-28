/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return '';
  if (strs.length == 1) return strs[0];
  let len = strs.length;
  let prefix = '';

  let i = 0;
  while (true) {
    for (let j = 1; j < len; j++) {
      if (strs[j][i] != strs[j - 1][i] ||
        (strs[j][i] == strs[j - 1][i] && strs[j][i] == undefined)
      ) {
        return prefix;
      }
    }
    prefix += strs[0][i];
    i++;
  }
};
// @lc code=end

