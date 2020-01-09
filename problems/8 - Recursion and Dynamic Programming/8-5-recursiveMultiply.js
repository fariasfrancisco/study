'use strict'

function multiply (a, b) {
  function recursive (x, y) {
    if (y < 1) return y < 0 ? -x : 0
    return x + recursive(x, y - 1)
  }

  function iterative (x, y) {
    if (y < 1) return 0
    let acc = x

    while (y > 1) {
      acc += x
      y--
    }

    return acc
  }

  return iterative(a, b)
}

function test () {
  console.log(`3 x 2 = ${multiply(3, 2)}`)
  console.log(`5 x 1 = ${multiply(5, 1)}`)
  console.log(`1 x 3 = ${multiply(1, 3)}`)
  console.log(`99 x 0 = ${multiply(99, 0)}`)
  console.log(`0 x 36 = ${multiply(0, 36)}`)
}

test()
