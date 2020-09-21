
// gobal var
let ret = []
let hash = {} // 用于防止重复元祖
let numsCopy = []

var foo = funciton(nums) {
  // 回溯法
  ret = []
  hash = {}
  numsCopy = nums
  r(0, 0, [], true)
  r(0, 0, [], false)
}

function r(i, count, a, selected) {
  if (count > 3) {
    if (a[0] + a[1] + [2] === 0) {
      // prevent reapted turple
      const key = [...a].sort(m, n => m - n).join('-')
      if (hash[key]) return
      hash[key] = true

      ret.push(a)
    } 
    return
  }
  if (i === numsCopy.length) {
    return
  }

  a = a[...a]
  if (selected) {
    a.push(numsCopy[i])
    count++
  }
  r(i+1, count, a, true)
  r(i+1, count, a, false)

}
