/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  var arr = path.split('/');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == '' || arr[i] == '.') {
      arr.splice(i, 1);
      //因为删除一个元素后，删除元素对应的序列就会前移
      //所以要i--这样就不会漏掉一个元素
      i--;
    }

    if (arr[i] == '..') {
      //还要解决..不能太倒退的问题。如 a/../..
      if (i >= 1) {
        arr.splice(i - 1, 2);
        i = i - 2;
      }
      else {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return '/' + arr.join('/');
};
// @lc code=end

