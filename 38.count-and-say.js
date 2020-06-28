/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) return '1';
  let s = countAndSay(n - 1);
  let retStr = '';
  let count = 1;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i + 1] === s[i]) {
      count++;
    } else {
      retStr += count + s[i];
      count = 1;
    }
  }
  return retStr;
};
// @lc code=end

