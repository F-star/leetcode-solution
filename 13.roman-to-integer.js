/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let sum = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    const val = map[s[i]];
    if (i === len - 1) {
      sum += val;
    } else {
      const nextVal = map[s[i + 1]]
      if (nextVal > val) {
        sum += nextVal - val;
        i++;
      }
      else sum += val;
    }
  }
  return sum;
};
// @lc code=end

