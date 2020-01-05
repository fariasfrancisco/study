'use strict'

function oneAway (s1, s2) {
  const l1 = s1.length
  const l2 = s2.length
  const m1 = new Map()
  const m2 = new Map()
  const set = new Set()

  if (Math.abs(l1 - l2) > 1) return false

  for (let i = 0; i < l1; i++) {
    m1.set(s1[i], (m1.get(s1[i]) || 0) + 1)
    set.add(s1[i])
  }

  for (let i = 0; i < l2; i++) {
    m2.set(s2[i], (m2.get(s2[i]) || 0) + 1)
    set.add(s2[i])
  }

  const tolerance = l1 === l2 ? 2 : 1

  let diff = 0

  for (const [_, char] of set.entries()) {
    if (diff > tolerance) return false

    if (m1.has(char) && m2.has(char)) diff += Math.abs(m1.get(char) - m2.get(char))
    else diff += m1.has(char) ? m1.get(char) : m2.get(char)
  }

  return diff <= tolerance
}

function test () {
  const t0 = ['asd', 'asd']
  const t1 = ['asd', 'asdf']
  const t2 = ['asd', 'asf']
  const t3 = ['asd', 'asfg']
  const t4 = ['asd', 'asdfe']
  const t5 = ['asdf', 'adf']
  const t6 = ['asdfgh', 'asdfgj']
  console.log(`t=[${t0}], exprected=true, result=${oneAway(t0[0], t0[1])}`)
  console.log(`t=[${t1}], exprected=true, result=${oneAway(t1[0], t1[1])}`)
  console.log(`t=[${t2}], exprected=true, result=${oneAway(t2[0], t2[1])}`)
  console.log(`t=[${t3}], exprected=false, result=${oneAway(t3[0], t3[1])}`)
  console.log(`t=[${t4}], exprected=false, result=${oneAway(t4[0], t4[1])}`)
  console.log(`t=[${t5}], exprected=true, result=${oneAway(t5[0], t5[1])}`)
  console.log(`t=[${t6}], exprected=true, result=${oneAway(t6[0], t6[1])}`)
}

test()
