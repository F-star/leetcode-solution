/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let symbol = 1;
  let firstValidCharPos = -1; // -1 表示在第一个有效字符的左边，0为即当前字符，1为右边
  const ascii_0 = '0'.charCodeAt();
  let val = 0;
  let ret = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const c = str[i];

    if (firstValidCharPos === -1) {
      if (c === ' ') continue;
      firstValidCharPos = 0;
    }
    if (firstValidCharPos === 0) {
      if (c === '-') {
        symbol = -1;
      } else if (c === '+') {
        // do nothing
      } else if ((val = c.charCodeAt() - ascii_0) >= 0 && val <= 9) {
        ret = val;
      } else {
        break;
      }
      firstValidCharPos = 1;
    } else {
      if ((val = c.charCodeAt() - ascii_0) >= 0 && val <= 9) {
        ret = ret * 10 + val;
      } else {
        break;
      }
    }
  }
  ret *= symbol;
  if (ret < -2147483648) return -2147483648
  else if (ret > 2147483647) return 2147483647
  return ret;
};
// @lc code=end

