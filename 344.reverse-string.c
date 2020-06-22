/*
 * @lc app=leetcode id=344 lang=c
 *
 * [344] Reverse String
 */

// @lc code=start


void reverseString(char* s, int sSize){
  int low = 0, high = sSize - 1;
  int tmp;
  while (low < high) {
    tmp = s[high];
    s[high] = s[low];
    s[low] = tmp;
    low++;
    high--;
  }
}

// @lc code=end

