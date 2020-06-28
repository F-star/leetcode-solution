/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let a = new Array(rowIndex + 1);
  a[0] = 1;
  for (let i = 1; i < rowIndex + 1; i++) {
    a[i] = 1;
    for (let j = i - 1; j > 0; j--) {
      a[j] = a[j] + a[j - 1];
    }
  }
  return a
};
// @lc code=end

