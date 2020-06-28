/*
 * @lc app=leetcode id=98 lang=c
 *
 * [98] Validate Binary Search Tree
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
#include<stdio.h>

bool found = false;

// TODO: to finish
bool isValidBST_(struct TreeNode* node, struct TreeNode* parent){
  // [2,1,3]
  if (found == 1) return 0;
  if (node == NULL) return 1;

  bool leftBool = isValidBST_(node->left, node);
  if (!leftBool) {
    found = 1;
    return 0;
  }
  bool rightBool = isValidBST_(node->right, node);
  if (!rightBool) {
    found = 1;
    return 0;
  }

  bool val = 1;
  if (parent->left == node && parent->val < node->val) { // node is left node
    val = 0;
  } else if (parent->right == node && parent->val > node->val) { // node is right node
    val = 0;
  } 
  return val;

  // return isValidBST(root->left) && isValidBST(root->right);
}

bool isValidBST(struct TreeNode* root){
  if (root == NULL) return 1;
  if (root->left && root->left->val >= root->val) return 0;
  if (root->right && root->right->val <= root->val) return 0;
  return isValidBST_(root->left, root) && isValidBST_(root->right, root);
}

// @lc code=end

