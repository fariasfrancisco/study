'use strict'

function stringCompression (string) {
  const l = string.length
  let count = 1
  let out = `${string[0]}`

  for (let i = 1; i < l; i++) {
    if (string[i] === out[out.length - 1]) {
      count++
    } else {
      out += `${count}`
      count = 1
      out += `${string[i]}`
    }
  }

  out += `${count}`

  if (l > out.length) return out

  return string
}

function test () {
  const s1 = 'aassddaaaa'
  const s2 = 'asdqwe'
  const s3 = 'aaassdffggg'
  const s4 = 'assddd'

  console.log(`s=${s1}, expected='a2s2d2a4', result='${stringCompression(s1)}'`)
  console.log(`s=${s2}, expected='asdqwe', result='${stringCompression(s2)}'`)
  console.log(`s=${s3}, expected='a3s2d1f2g3', result='${stringCompression(s3)}'`)
  console.log(`s=${s4}, expected='assddd', result='${stringCompression(s4)}'`)
}

test()
