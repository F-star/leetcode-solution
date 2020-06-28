/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let resArr = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    let a = new Array(i + 1);
    a[0] = a[i] = 1;
    for (let j = 1; j < i; j++) {
      a[j] = resArr[i - 1][j - 1] + resArr[i - 1][j];
    }
    resArr[i] = a;
  }
  return resArr;
};
// @lc code=end

