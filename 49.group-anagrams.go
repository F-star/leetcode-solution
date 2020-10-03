/*
 * @lc app=leetcode id=49 lang=golang
 *
 * [49] Group Anagrams
 */
package main

import (
	"fmt"
	"strings"
)

// @lc code=start
func groupAnagrams(strs []string) [][]string {
	hash := make(map[string][]string)

	for _, s := range strs {
		letterNums := [26]int{}
		for _, c := range s {
			i := c - 'a'
			letterNums[i]++
		}
		// convert [1,5] to "1-5"
		key := strings.Trim(strings.Join(strings.Fields(fmt.Sprint(letterNums)), "-"), "[]")
		hash[key] = append(hash[key], s)
	}
	// convert hash table to slice
	groups := [][]string{}
	for _, value := range hash {
		groups = append(groups, value)
	}
	return groups
}

// @lc code=end
