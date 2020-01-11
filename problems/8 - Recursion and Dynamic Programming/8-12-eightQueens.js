'use strict'

function printArrangements () {
  const x = 8
  const placements = []

  function checkDiagonal (a, b) {
    return Math.abs(a[0] - b[0]) === Math.abs(a[1] - b[1])
  }

  function placeQueen (r, queens) {
    if (r > 7) {
      if (queens.length === 8) placements.push(queens)

      return
    }

    let q

    for (let i = 0; i < x; i++) {
      let aux = false

      for (const [j, q] of queens.entries()) {
        if (q === i || checkDiagonal([r, i], [j, q])) aux = true
      }

      if (aux) continue

      q = [...queens]

      q.push(i)
      placeQueen(r + 1, q)
    }
  }

  placeQueen(0, [])

  return placements
}

console.log(printArrangements())
