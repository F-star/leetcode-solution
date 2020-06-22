/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = new Stack();
  let a, b, d;
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t === '+') {
      b = stack.pop();
      a = stack.pop();
      stack.push(a + b);
    } else if (t === '-') {
      b = stack.pop();
      a = stack.pop();
      stack.push(a - b);
    } else if (t === '*') {
      b = stack.pop();
      a = stack.pop();
      stack.push(a * b);
    } else if (t === '/') {
      b = stack.pop();
      a = stack.pop();
      d = a / b;
      d = (d > 0) ? Math.floor(d) : Math.ceil(d);
      stack.push(d);
    } else {
      stack.push(parseInt(t));
    }
  }
  return stack.pop();
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(val) {
    const node = new ListNode(val);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }
  pop() {
    if (this.top === null) return undefined;
    const val = this.top.val;
    this.top = this.top.next;
    return val;
  }
}
// @lc code=end

