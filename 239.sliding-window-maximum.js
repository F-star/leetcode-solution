/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 要求时间复杂度：O(n)
  const len = nums.length;
  if (k === 1 || len === 0) return nums;

  const result = [];
  // js 没有自带双端队列，这里我们简单实现双端队列，
  // 如果想可读性更好，基于接口而非实现编程：可以把 641 的实现直接拿过来。
  const deque = new Array(len);
  deque[0] = nums[0];
  let head = 0;
  let tail = 0;
  // 初始化
  for (let i = 1; i < k; i++) {
    let j;
    for (j = tail; j >= head; j--) {
      // j 走到我们想要的位置。
      if (deque[j] >= nums[i]) break;
    }
    tail = j + 1;
    deque[tail] = nums[i];
  }
  result.push(deque[head])
  // 入队和必要时出队。
  for (let i = k; i < len; i++) {
    if (nums[i - k] === deque[head]) {
      head++;
    }
    let j;
    for (j = tail; j >= head; j--) {
      if (deque[j] >= nums[i]) break;
    }
    tail = j + 1;
    deque[tail] = nums[i];
    result.push(deque[head]);
  }
  return result;
};
// @lc code=end

