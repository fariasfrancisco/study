'use strict'

function buildPermutations (string) {
  const permutations = []

  function build (set, permutation) {
    if (set.size < 1) {
      permutations.push(permutation)

      return
    }

    set.forEach(char => {
      const s = new Set(set)

      s.delete(char)

      return build(s, permutation + char)
    })
  }

  build(new Set(string), '')

  return permutations
}

function test () {
  const s0 = 'a'
  const s1 = 'as'
  const s2 = 'asd'
  const s3 = 'asdf'
  const s4 = 'asdfg'
  console.log(s0, buildPermutations(s0))
  console.log(s1, buildPermutations(s1))
  console.log(s2, buildPermutations(s2))
  console.log(s3, buildPermutations(s3))
  console.log(s4, buildPermutations(s4))
}

test()
