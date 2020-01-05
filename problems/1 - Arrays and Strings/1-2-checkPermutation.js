'use strict'

function checkPermutation (s1, s2) {
  //Assuming lowercase is different from uppercase. Spaces count
  const l1 = s1.length
  const l2 = s2.length

  if (l1 !== l2) return false

  const m1 = new Map()
  const m2 = new Map()

  for (let i = 0; i < l1; i++) {
    m1.set(s1[i], (m1.get(s1[i]) || 0) + 1)
  }

  for (let i = 0; i < l1; i++) {
    m2.set(s2[i], (m2.get(s2[i]) || 0) + 1)
  }

  for (const [char, count] of m1.entries()) {
    if (!m2.has(char) || m2.get(char) !== count) return false
  }

  return true
}

function test () {
  const t1 = ['asdqweasdqwe', 'asdqwezxcasd']
  const t2 = ['asdaasd', 'asdasd']
  const t3 = ['asd123', '321dsa']
  const t4 = ['aasddeszwxqqc', 'qweasdzxcadqs']

  console.log(`Are ${t1} permutations?`, checkPermutation(t1[0], t1[1]))
  console.log(`Are ${t2} permutations?`, checkPermutation(t2[0], t2[1]))
  console.log(`Are ${t3} permutations?`, checkPermutation(t3[0], t3[1]))
  console.log(`Are ${t4} permutations?`, checkPermutation(t4[0], t4[1]))
}

test()
