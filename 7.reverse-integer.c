/*
 * @lc app=leetcode id=7 lang=c
 *
 * [7] Reverse Integer
 */

// @lc code=start
#include <math.h>

#define MAX_INT (long long)pow(2, 31) - 1
#define MIN_INT -(long long)pow(2, 31)

int reverse(int x){
  // TODO: find a better way to check integer overflow.
  long long n = 0;
  while (x != 0) {
    n = n * 10 + x % 10;
    if (n < MIN_INT || n > MAX_INT)
      return 0;
    x = x / 10;
  }
  return n;
}


// @lc code=end

