/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  /* let isSame = true;
  f(p, q);
  return isSame;

  function f(node1, node2) {
    if (!isSame) return;
    if (!node1 && !node2) return;

    // （因为前面的if判断，node1 和 node2 至少有一个不为 null）
    if (!node1 || !node2 || node1.val !== node2.val) {
      // （1）一个 为 null，另一个不为 null；（2）值不等的情况
      isSame = false;
      return;
    }

    f(node1.left, node2.left);
    f(node1.right, node2.right);
  } */

  return f(p, q);
  // 另一种标准答案的写法，感觉和我写的好像差不多，不过确实更加简洁。
  function f(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.val !== node2.val) return false;
    return f(node1.left, node2.left) && f(node1.right, node2.right);
  }
};
// @lc code=end

