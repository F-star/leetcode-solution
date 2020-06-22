/*
 * @lc app=leetcode id=112 lang=c
 *
 * [112] Path Sum
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
bool recurHasPathSum(struct TreeNode* root, int preSum, int sum){
  int curSum = preSum + root->val;
  if (root->left == NULL && root->right == NULL && curSum == sum ) {
    return true;
  }
  if (root->left && recurHasPathSum(root->left, curSum, sum)) return true;
  if (root->right && recurHasPathSum(root->right, curSum, sum)) return true;
  return false;
}

bool hasPathSum(struct TreeNode* root, int sum){
  if (root == NULL) return false;
  return recurHasPathSum(root, 0, sum);
}

// @lc code=end

