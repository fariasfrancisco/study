'use strict'

function countWays (n) {
  const coins = [25, 10, 5, 1]
  const map = new Map()

  function count (amount) {
    if (amount < 1) {
      console.log(amount < 0 ? 'X' : '🗸')
      return amount < 0 ? 0 : 1
    }
    if (map.has(amount)) return map.get(amount)

    let aux = 0

    for (const coin of coins) {
      console.log(amount, coin)
      aux += count(amount - coin)
    }

    map.set(amount, aux)

    return aux
  }

  return count(n)
}

function test () {
  console.log('test',10, countWays(10))
}

test()
