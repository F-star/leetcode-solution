/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // TODO: to finish
  // [-2, 0, 5, 3]

  // 思路一：直接三重循环。（长数组会超时）
  /* const len = nums.length;
  if (len < 3) return [];
  const map = {};
  const arr = [];
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const item = [nums[i], nums[j], nums[k]]
          const key = item
                      .sort((a,b) => a - b)
                      .join()
          if (!map[key]) {
            arr.push(item)
            map[item] = true;
          }
        }
      }
    }
  }
  return arr */

  // 思路二：尝试使用哈希
  // 特征：两个数的和为第三个数的相反数。
  // 或许可以用一个哈希表，保存每个数及其对应的数量。
  /* 
    { 
      -4: 1
      -1: 2,
      0: 1,
      1: 1，
      2: 1
    }
    -1 0 1
    -1 -1 2（这个如何搞。）

    0 -1 1（和第一个重复 -1 0 1）。方案是不要往前走。
    // 用一个数组按顺序保存用到的值，

    特殊：-8 4 4
    -2 -6 8
  */
  const len = nums.length;
  if (len < 3) return [];
  let arr = [];
  let map = {};
  let val;
  for (let i = 0; i < len; i++) {
    val = nums[i]
    if (!map[val]) {
      map[val] = 1;
      arr.push(val)
    } else {
      map[val]++;
    }
  }
  arr.sort((a,b) => a - b);

  for (let i = 0, len = arr.length; i < len; i++) {

  }
};
// @lc code=end

