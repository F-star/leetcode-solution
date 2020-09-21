/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let ret = []
let numsCopy = []

var subsets = function(nums) {
  if (nums.length === 0) return [[]]
  ret = []
  numsCopy = nums

  r(0, [], true)
  r(0, [], false)
  return ret
};

function r(i, item, selected) {
  if (i === numsCopy.length) {
    ret.push(item)
    return
  }
  if (selected) {
    item.push(numsCopy[i])
  }
  r(i+1, [...item], true)
  r(i+1, [...item], false)
}
