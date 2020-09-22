
var f = function(num) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pgrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const ret = []

  const r = function(i, s) {
    const chars = map[num[i]]
    for (let j = 0; j < chars.length; j++) {
      if (i === num.length - 1) { // end condition
        ret.push(s + chars[j])
        return
      }
      r(i + 1, s + chars[j])
    }
  }

  r(0, '')
  return ret
}
