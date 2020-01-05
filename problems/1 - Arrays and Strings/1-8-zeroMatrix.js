'use strict'

function zeroMatrix (matrix) {
  const n = matrix.length
  const m = matrix[0].length
  const zeros = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) zeros.push([i, j])
    }
  }

  for (const [i, j] of zeros) {
    matrix[i].fill(0)
    for (let k = 0; k < m; k++) {
      matrix[k][j] = 0
    }
  }

  return matrix
}

function test () {
  console.log([[1, 2, 0], [4, 5, 6], [7, 8, 9]])
  console.log(zeroMatrix([[1, 2, 0], [4, 5, 6], [7, 8, 9]]))
  console.log([[1, 1, 1, 2], [4, 0, 0, 2], [4, 0, 0, 2], [4, 3, 3, 3]])
  console.log(zeroMatrix([[1, 1, 1, 2], [4, 0, 0, 2], [4, 0, 0, 2], [4, 3, 3, 3]]))
  console.log([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 0, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
  console.log(zeroMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 0, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
}

test()
