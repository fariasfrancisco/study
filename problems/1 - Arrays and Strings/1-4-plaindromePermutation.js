'use strict'

function palindromePermutation (string) {
  const map = new Map()
  const l = string.length

  for (let i = 0; i < l; i++) {
    map.set(string[i], (map.get(string[i]) || 0) + 1)
  }

  let hasOdd = false

  for (const [_, count] of map.entries()) {
    if (count % 2 !== 0) {
      if (!hasOdd) hasOdd = true
      else return false
    }
  }

  return true
}

function test () {
  const s1 = 'tactcoapapa'
  const s2 = 'asddsassad'
  const s3 = 'asddsassa'
  const s4 = 'anitalavalatina'

  console.log(s1, palindromePermutation(s1))
  console.log(s2, palindromePermutation(s2))
  console.log(s3, palindromePermutation(s3))
  console.log(s4, palindromePermutation(s4))
}

test()
