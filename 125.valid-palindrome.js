/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let code1 = s.charCodeAt(i);
    if (!inRange(code1)) {
      i++;
      continue;
    }

    let code2 = s.charCodeAt(j);
    if (!inRange(code2)) {
      j--;
      continue;
    }

    // 是否需要大小写转换
    if (isUpperCase(code1)) code1 += 32;
    if (isUpperCase(code2)) code2 += 32;

    if (code1 !== code2) return false;
    else {
      i++;
      j--;
    }
  }
  return true;

  //  A-Z: 65,90  a - z: 97 - 122 大小写转换差：32
  // 0-9: 48-57
  function inRange(code) {
    if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90) || (code >= 48 && code <= 57)) return true;
    else return false;
  }

  function isUpperCase(code) {
    if (code >= 65 && code <= 90) return true;
    else return false;
  }
};
// @lc code=end

