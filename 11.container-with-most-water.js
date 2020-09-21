/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 双重遍历法
  /* let max = 0;
  for (let i = 1; i < height.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      const w = i - j;
      const h = Math.min(height[j], height[i]);
      max = Math.max(max, w * h);
    }
  }
  return max; */

  // 双指针法 (缩减搜索空间)
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const h = Math.min(height[i], height[j]);
    const w = j - i;
    max = Math.max(max, h * w);
    if (height[i] == h) {
      i++;
    } else {
      j--;
    }
  }
  return max
};
// @lc code=end

