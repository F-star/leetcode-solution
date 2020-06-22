/*
 * @lc app=leetcode id=506 lang=java
 *
 * [506] Relative Ranks
 */

// @lc code=start
class Solution {
  public String[] findRelativeRanks(int[] nums) {
    // TODO: optimize time complexity（runtime only beats 6%）
    int size = nums.length;
    String[] ranks = new String[size];
    int lastMax = Integer.MAX_VALUE;

    for (int i = 0; i < size; i++) {
      
      int max = -1;
      int maxIndex = -1;
      for (int j = 0; j < size; j++) {
        if (nums[j] >= lastMax) continue;

        if (nums[j] > max) {
          max = nums[j];
          maxIndex = j;
          if (max == lastMax - 1) break;
        }
      }
      // System.out.println(maxIndex);
      if (i < 3) {
        if (i == 0) ranks[maxIndex] = "Gold Medal";
        else if (i == 1) ranks[maxIndex] = "Silver Medal";
        else ranks[maxIndex] = "Bronze Medal";
      } else {
        ranks[maxIndex] = String.valueOf(i + 1);
      }
      
      lastMax = max;
    }

    return ranks;
  }
}
// @lc code=end
