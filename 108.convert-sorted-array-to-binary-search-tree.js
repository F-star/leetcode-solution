/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let len = nums.length;
  if (len == 0) return null;

  let root = new TreeNode(nums[Math.ceil((len - 1) / 2)]);
  recursion(root, undefined, 0, len - 1);

  function recursion(root, type, q, r) {
    if (q > r) return;
    let p = Math.ceil((q + r) / 2);
    let node = new TreeNode(nums[p]);
    if (type) root[type] = node;
    else node = root;

    recursion(node, 'left', q, p - 1);
    recursion(node, 'right', p + 1, r)
  }
  return root
};
// @lc code=end

