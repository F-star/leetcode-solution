/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 提取最小元素要 O(1)，。。。
  // 用个指针指向
  // 连取两个最小值怎么办？？？
  this.stack = [];
  this.min = undefined;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  // 找出最小元素。
  if (this.stack.length == 1) this.min = x;
  else if (x < this.min) this.min = x;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  const val = this.stack.pop();
  if (this.stack.length == 0) {
    this.min = undefined;
    return;
  }
  if (val == this.min) {
    // 数组中找最小值
    this.min = this.stack[0];
    for (let i = 1; i < this.stack.length; i++) {
      if (this.stack[i] < this.min) {
        this.min = this.stack[i];
      }
    }
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

