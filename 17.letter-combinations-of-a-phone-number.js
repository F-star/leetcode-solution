/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

var letterCombinations = function(digits) {
  if (digits === '') return []

  const ret = []
  function r(i, s) {
    if (i === digits.length) { // end condition
      ret.push(s)
      return
    }
    const chars = map[digits[i]]
    for (let j = 0; j < chars.length; j++) {
      r(i + 1, s + chars[j])
    }
  }

  r(0, '')
  return ret
};
// @lc code=end

