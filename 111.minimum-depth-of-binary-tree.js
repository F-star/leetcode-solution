/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
  function f(node) {
    if (!node) return 0;
    let leftDepth = f(node.left),
      rightDepth = f(node.right);
    if (leftDepth === 0) return rightDepth + 1;
    if (rightDepth === 0) return leftDepth + 1;
    return Math.min(leftDepth, rightDepth) + 1;
  }
  return f(root);
};
// @lc code=end

