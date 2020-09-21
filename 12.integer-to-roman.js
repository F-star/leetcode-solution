/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // 1. 确定范围
  return intToRomanRecursion('', num)
};

var intToRomanRecursion = function(s, num) {
  /* const map = {
    1: 'I', 5: 'V',  10: 'X', 50: 'L',  100: 'C', 500: 'D', 1000: 'M',
            4: 'IV', 9: 'IX', 40: 'XL', 90: 'XC', 400: 'CD', 900: 'CM',
  } */

  // TODO: 有空优化
  if (num == 0) return s 

  if (num < 5) {
    if (num === 4) return s + 'IV'
    const c = num / 1;
    return s + ''.padEnd(c, 'I')
  }
  if (num < 10) {
    if (num === 9) return s + 'IX'
    // const c = Math.floor( num / 5 ) // 商
    return intToRomanRecursion(s + 'V', num % 5)
  }
  if (num < 50) {
    if (Math.floor(num / 40) == 1) {
      return intToRomanRecursion(s + 'XL', num % 40)
    }
    const c = Math.floor( num / 10) // 商
    return intToRomanRecursion(s + ''.padEnd(c, 'X'), num % 10)
  }

  if (num < 100) {
    if (num >= 90) {
      return intToRomanRecursion(s + 'XC', num % 90)
    }
    const c = Math.floor( num / 50) // 商
    return intToRomanRecursion(s + ''.padEnd(c, 'L'), num % 50)
  }

  if (num < 500) {
    if (Math.floor(num / 400) == 1) {
      return intToRomanRecursion(s + 'CD', num % 400)
    }
    const c = Math.floor( num / 100) // 商
    return intToRomanRecursion(s + ''.padEnd(c, 'C'), num % 100)
  }

  if (num < 1000) {
    if (Math.floor(num / 900) == 1) {
      return intToRomanRecursion(s + 'CM', num % 900)
    }
    const c = Math.floor( num / 500) // 商
    return intToRomanRecursion(s + ''.padEnd(c, 'D'), num % 500)
  }
  const c = Math.floor( num / 1000)
  return intToRomanRecursion(s + ''.padEnd(c, 'M'), num % 1000)
  
};
// @lc code=end

