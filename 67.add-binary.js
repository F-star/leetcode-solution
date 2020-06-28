/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const alen = a.length,
    blen = b.length,
    maxlen = Math.max(alen, blen);
  let str = '';
  let valAdd = 0;

  for (let i = 0; i < maxlen; i++) {
    let val1 = 0,
      val2 = 0;

    if (a[alen - 1 - i]) val1 = parseInt(a[alen - 1 - i]);
    if (b[blen - 1 - i]) val2 = parseInt(b[blen - 1 - i]);

    let sum = val1 + val2 + valAdd;
    let currChar = sum % 2;
    valAdd = (sum >= 2) ? 1 : 0;

    str = currChar + str;
  }
  if (valAdd == 1) str = '1' + str;

  return str
};
// @lc code=end

