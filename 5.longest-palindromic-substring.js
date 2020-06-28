/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var length = s.length;

  //字符串长度为1，直接返回str
  if (length <= 1) return s;
  //字符串长度为2，且它们相等，返回str，不相等则返回第0个字符
  else if (length == 2) {
    if (s[0] == s[1])
      return s;
    else if (s[0] != s[1])
      return s[0];
  }

  else if (length >= 3) {
    var max = 0;
    var longest = s[0];
    var tem_longest = s[0];
    for (var ctr = 1; ctr < length; ctr++) {
      //var l ;
      //var r ;
      extend_palindrome(ctr - 1, ctr);//偶数。如abba
      extend_palindrome(ctr - 1, ctr + 1);//奇数：如bab     
      //l和r不能越界，同时一旦发现不对称，就跳出，此时的tem_longest即当前位置的倒序子字符串        
      //这部分代码有毒
      function extend_palindrome(l, r) {
        while (l >= 0 && r <= length - 1) {
          if (!(s[l] === s[r])) {
            break;
          }
          tem_longest = s.slice(l, r + 1);
          l--;
          r++;
        }
        //其实在上面的loop中，tem_longest一直在变，所以不得不用max来确定一个最大值。
        if (tem_longest.length > max) {
          longest = tem_longest;
          max = longest.length;
        }
      }//function end
    }//loop end
    return longest;
  }
};
// @lc code=end

