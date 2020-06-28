/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//大概意思是从中间往两边遍历吧。。让时间复杂度变小
var findMin = function (nums) {
  // TODO: to finish
  var len = nums.length;
  if (len == 1) { return nums[0] }
  if (len == 2) {
    return nums[0] < nums[1] ? nums[0] : nums[1]
  }

  var mid = Math.floor(len / 2);
  var i = 1;
  //下列循环不能解决nums[0]nums[l]
  while (mid > 0 && mid < len - 1) {
    if (nums[mid] < mid[mid - 1] && nums[mid] < mid[mid + 1]) {
      return nums[mid];
    }
    console.log(mid);
    mid = -1 * i;
    i++;
  }
  if (nums[0] < nums[1]) return nums[0];
};
// @lc code=end

