/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // row
  let row
  let hash = {}
  for (let i = 0; i < 9; i++) {
    hash = {}
    row = board[i]
    for (let j = 0; j < 9; j++) {
      const num = row[j]
      if (num === '.') continue
      if (hash[num]) return false
      hash[num] = true
    }
  }
  // column
  for (let i = 0; i < 9; i++) {
    hash = {}
    for (let j = 0; j < 9; j++) {
      const num = board[j][i]
      if (num === '.') continue
      if (hash[num]) return false
      hash[num] = true
    }
  }
  // 3x3
  for (let i = 0; i < 9; i+=3) {
    for (let j = 0; j < 9; j+=3) {
      // (i, j) is left top of small rect
      hash = {}
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          // (i + m, j + n)
          const num = board[i + m][j + n]
          if (num === '.') continue
          if (hash[num]) return false
          hash[num] = true
        }
      }
    }
  }
  return true 
};

// @lc code=end

