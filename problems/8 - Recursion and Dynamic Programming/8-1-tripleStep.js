'use strict'

function tripleStep (steps) {
  function recursive (n) {
    if (n < 2) return n < 0 ? 0 : 1

    return recursive(n - 1) + recursive(n - 2)
  }

  function memoization (n) {
    const store = []

    function recursive (m) {
      if (m < 2) return m < 0 ? 0 : 1
      if (store[m] == null) store[m] = recursive(m - 1) + recursive(m - 2)

      return store[m]
    }

    return recursive(n)
  }

  return memoization(steps)
}

function test () {
  console.log('3 steps', tripleStep(3))
  console.log('4 steps', tripleStep(4))
  console.log('7 steps', tripleStep(7))
  console.log('10 steps', tripleStep(10))
}

test()
