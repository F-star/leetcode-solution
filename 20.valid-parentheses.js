/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) return false;

  const stack = new Array(len);
  let si = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === ')') {
      if (stack[si - 1] === '(') si--;
      else return false;
    }
    else if (s[i] === '}') {
      if (stack[si - 1] === '{') si--;
      else return false;
    }
    else if (s[i] === ']') {
      if (stack[si - 1] === '[') si--;
      else return false;
    }
    else {
      stack[si] = s[i];
      si++;
    }
  }
  return si === 0;
};
// @lc code=end

