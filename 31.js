// 3421 -> 4123    1234 1243 1324 1342 ... 1432 =>(2431->) 2134
// 1123 ... 2311 ->() 3112
const r = function(nums) {
  if (nums.length <= 0) return nums
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] > nums[i]) {
      nums[i - 1] = nums[nums.length - 1]
      // 后面升序（此时已经是降序，两头交换即可。）
    }
  }
  // 1921
}
