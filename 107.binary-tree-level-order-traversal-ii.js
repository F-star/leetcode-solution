/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let a = [];
  f(root, -1);
  function f(node, level) {
    if (!node) {
      return;
    }
    // 后序遍历：左右根。
    level++;
    f(node.left, level);
    f(node.right, level);
    if (!a[level]) a[level] = [];
    a[level].push(node.val);
  }
  return a.reverse();
};
// @lc code=end

