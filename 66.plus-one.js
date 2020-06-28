/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let add = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    sum = digits[i] + add;
    if (sum === 10) {
      sum = 0;
      add = 1;
    } else {
      add = 0;
    }
    digits[i] = sum;
  }
  if (add === 1) digits.unshift(1);
  return digits;
};
// @lc code=end

