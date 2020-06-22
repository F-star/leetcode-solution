/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let low = 0;
  let high = x;
  let mid, product;
  while (true) {
    mid = Math.floor((low + high) / 2);
    product = mid * mid;
    if (product === x) return mid;
    if (product > x) high = mid - 1;
    else { // product is lower than x
      if ((mid + 1) * (mid + 1) > x) return mid
      else low = mid + 1
    }
  }
};
// @lc code=end

