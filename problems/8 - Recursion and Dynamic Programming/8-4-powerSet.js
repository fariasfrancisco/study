'use strict'

function getSets (set) {
  const out = [[]]

  function branchOut (s, a) {
    if (s.size < 1) return

    let _a
    let _s

    s.forEach(entry => {
      _s = new Set(s)
      _a = [...a]

      _s.delete(entry)
      _a.push(entry)
      out.push(_a)
      branchOut(_s, _a)
    })
  }

  branchOut(new Set(set), [])

  return out.sort((a, b) => a.length - b.length)
}

function test () {
  const set0 = [0, 1]
  const set1 = [0, 1, 2]
  const set2 = [0, 1, 2, 3,]
  console.log(set0, getSets(set0))
  console.log(set1, getSets(set1))
  console.log(set2, getSets(set2))
}

test()
