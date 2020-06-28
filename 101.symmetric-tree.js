/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  if (root === null) return true
  return check(root.left, root.right);

  function check(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.val !== node2.val) return false;

    return check(node1.left, node2.right) && check(node2.left, node1.right)
  }
};
// @lc code=end

