/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let flag = true;
  function c(node) {
      if (!flag || !node) {
          return 0;
      }
      let left = c(node.left);
      let right = c(node.right);
      let level = Math.max(left, right) + 1;
      if (Math.abs(left - right) > 1) {
          flag = false;   
          return 0;
      }
      return level;
  }
  c(root);
  return flag;
};
// @lc code=end

