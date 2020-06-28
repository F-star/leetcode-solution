/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 最无脑的穷举法
  /* let len = prices.length;
  let max = 0;
  for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
          if (prices[i] < prices[j]) {
              max = Math.max(max, prices[j] - prices[i]);
          }
      }
  }
  return max */

  // 我佛了，比穷举法还慢。不可能啊。难道因为多了几个赋值语句。。。。。
  // 使用 修改 max 时得到的购买金额 作为基准，后面的必须比它小。
  /* let len = prices.length;
  let max = 0;
  let pivot = Number.MAX_VALUE;
  for (let i = 0; i < len - 1; i++) {
      if (prices[i] < pivot) {
          for (let j = i + 1; j < len; j++) {
              const res = prices[j] - prices[i];
              if (res > max) {
                  max = res;
                  pivot = prices[i];
              }
          }
      }
  }
  return max */


  // 参考答案：
  // 用的动态规划。。。。（动态规划好难啊。。）
  // 先找出从左往右遍历过程中的 **最小值**，
  // 同时，计算这个最小值和遍历的这个值的差值，是否大于 max。如果大于，就更新 max。
  let min = Number.MAX_SAFE_INTEGER; 
  let max = 0;
  for (let i = 0, len = prices.length; i < len; i++) {
      min = Math.min(min, prices[i]);
      max = Math.max(max, prices[i] - min);
  } 
  return max
};
// @lc code=end

