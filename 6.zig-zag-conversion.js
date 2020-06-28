/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;

  const a = new Array(numRows);
  // 初始化
  for (let i = 0; i < numRows; i++) {
      a[i] = [];
  }

  // 0 -> 1 -> 2 -> 1 -> 0;
  let row = 0;
  let dir = 1;
  for (let i = 0, len = s.length; i < len; i++) {
      a[row].push(s[i]);
      if (row === numRows - 1) dir = -1;
      else if (row === 0) dir = 1;
      row += dir;
  }

  let r = '';
  for (let i = 0; i < numRows; i++) {
      const itemArr = a[i];
      for (let j = 0, len = itemArr.length; j < len; j++) {
          r += itemArr[j];
      }
  }
  return r;
};
// @lc code=end

