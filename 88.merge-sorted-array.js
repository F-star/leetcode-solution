/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (j >= 0 && i >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }
  // nums2 中如果有元素比 nums1 要小的情况。
  for (let i = 0; i <= j; i++) {
    nums1[i] = nums2[i]
  }
};
// @lc code=end

