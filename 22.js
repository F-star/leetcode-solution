const n = 3
const ret = []
// lcount 左括号数量
// rcout 有括号数量
function r(i, lcount, rcount, s) {
  if (lcount === n) { // 结束条件
    ret.push(s.padEnd(2 * n, ')'))
    return
  }
  if (rcount > lcount) {
    return
  }
  r(i + 1, lcount + 1, rcount, s + '(')
  r(i + 1, lcount, rcount + 1, s + ')')
}

r(0, 0, 0, '')
