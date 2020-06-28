/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// TODO: to finish
var isValidBST = function (root) {

};

var f = function (node) {
  // 左子树要给 最大值，右子树要给 最小值。
  // leftVal = 

  // 1. 判断是否符合 left < node && right > node
  /* if (node.left && node.left.val >= node.val) {
    return null; // 不是合法的二叉查找树。
  }
  if (node.right && node.right.val <= node.val) {
    return null; // 不是合法的二叉查找树。
  } */
  

  const leftData = f(node.left);
  const rightData = f(node.right);

  if (!leftData) min = 
  const min = leftData.min;
  const max = rightData.max;
  return {
    min, max
  }

};
// @lc code=end

