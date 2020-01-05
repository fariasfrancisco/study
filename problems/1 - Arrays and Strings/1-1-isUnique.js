'use strict'

/*
 * Implement an algorithm to determine if a string has all unique characters. Can't use additional data structures.
 */
function isUnique (string) {
  const l = string.length

  if (l > 128) return false // Or 256 if using extended ASCII

  // Without sorting
  /* O(n * log n)
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (string[i] === string[j]) return false
    }
  }
  */

  // Sorting
  // O(log n)
  string.sort((a, b) => a < b)

  for (let i = 1; i < l; i++) {
    if (string[i] === string[i - 1]) return false
  }

  return true
}

function test () {
  const s1 = 'aassedded'
  const s2 = 'asdqwezxcvbn'
  const s3 = 'aszqwwexddc'

  console.log(`Is ${s1} unique? ${isUnique(s1)}`)
  console.log(`Is ${s2} unique? ${isUnique(s2)}`)
  console.log(`Is ${s3} unique? ${isUnique(s3)}`)
}

test()
