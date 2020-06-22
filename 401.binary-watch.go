/*
 * @lc app=leetcode id=401 lang=golang
 *
 * [401] Binary Watch
 */
// package a

import (
	"fmt"
	"strconv"
)

// @lc code=start
func readBinaryWatch(num int) []string {
	// 回溯法·
	var a []string
	r(0, 0, num, [10]int{}, &a)
	r(0, 1, num-1, [10]int{}, &a)
	return a
}

// count: 目前 1 的数量
// num: 为剩余的 1 的数量
func r(pos int, bitNum int, num int, bits [10]int, a *[]string) {
	bits[pos] = bitNum
	if num == 0 {
		// int[] 转 string，保存到 a 里。
		s := toStr(&bits)
		if s != "" {
			*a = append(*a, s)
		}
		return
	}
	if pos == 9 {
		return
	}
	r(pos+1, 0, num, bits, a)
	r(pos+1, 1, num-1, bits, a)
}

func toStr(nums *[10]int) string {
	// fmt.Println(nums)
	// 取前4个转分钟数
	m := 0
	for i := 0; i < 4; i++ {
		m = m*2 + nums[i]
	}
	if m > 11 {
		return ""
	}
	s := 0
	for i := 4; i < 10; i++ {
		s = s*2 + nums[i]
	}
	if s > 59 {
		return ""
	}

	mStr := strconv.Itoa(m)
	sStr := strconv.Itoa(s)
	if len(sStr) == 1 {
		sStr = "0" + sStr
	}
	return mStr + ":" + sStr
}

// @lc code=end
