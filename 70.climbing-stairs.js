/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// loop solution
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let ret;
  let prev = 2;
  let pprev = 1;
  for (let i = 3; i <= n; i++) {
    ret = prev + pprev;
    pprev = prev;
    prev = ret;
  }
  return ret;
}

// recursion solution
/* var climbStairs = (function () {
  const hash = {
    1: 1,
    2: 2
  };
  return function(n) {
    // if (n === 1) return 1;
    // if (n === 2) return 2;
    if (hash[n]) {
      return hash[n]
    }
    const ret = climbStairs(n - 1) + climbStairs(n - 2);
    hash[n] = ret;
    return ret;
  }
})() */
// @lc code=end

