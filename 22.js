    const n = 3
    const ret = []
    // lcount 和 rcount 分别为左右括号数量
    const r = (i, lcount, rcount, s) => {
      // if (end)
      if (lcount === 3) {
        ret.push(s.padEnd(n * 2, '}'))
        return
      }
      // 这里要做判断，处理 '())(()' 的情况
      if (rcount < lcount) {

      }
      r(i + 1, lcount + 1, s + '{')
      r(i + 1, lcount, s + '}')
    }

    r(0, 0, '')
