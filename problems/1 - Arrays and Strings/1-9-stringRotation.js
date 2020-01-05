'use strict'

function stringRotation (s1, s2) {
  const l1 = s1.length
  const l2 = s2.length

  if (l1 !== l2) return false
  const char = s1[l1 - 1]
  let index = s2.indexOf(char) + 1

  while (index > -1) {
    if (s1 === s2.slice(index) + s2.slice(0, index)) return true

    index = s2.indexOf(char, index) + 1
  }

  return false
}

function test () {
  console.log('asdfgh', 'fghasd', stringRotation('asdfgh', 'fghasd'))
  console.log('asdfgha', 'fghasd', stringRotation('asdfgha', 'fghasd'))
  console.log('franciscofarias', 'fariasfrancisco', stringRotation('franciscofarias', 'fariasfrancisco'))
}

test()
