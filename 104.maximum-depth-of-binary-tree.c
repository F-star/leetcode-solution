/*
 * @lc app=leetcode id=104 lang=c
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */


int maxDepth(struct TreeNode* root){
  if (root == NULL) return 0;
  int l = maxDepth(root->left);
  int r = maxDepth(root->right);
  return (l > r ? l : r) + 1;
}


// @lc code=end

