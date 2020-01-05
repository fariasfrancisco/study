'use strict'

function rotateMatrix (matrix) {
  // with auxiliary matrix
  // const n = matrix.length
  // const aux = []
  //
  // for (let i = 0; i < n; i++) {
  //   aux.push(new Array(n).fill(0))
  // }
  //
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     aux[i][j] = matrix[n - 1 - j][i]
  //   }
  // }
  //
  // return aux

  // in place
  const n = matrix.length
  let end = n - 1
  let start = 0

  while (start < end) {
    for (let i = start; i < end; i++) {
      // [A, B, C, D] = [D, A, B, C] 90deg rotation
      [matrix[start][start + i], matrix[start + i][end], matrix[end][end - i], matrix[end - i][start]] =
        [matrix[end - i][start], matrix[start][start + i], matrix[start + i][end], matrix[end][end - i]]
    }

    start++
    end--
  }

  return matrix
}

function test () {
  console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  console.log([[1, 1, 1, 2], [4, 0, 0, 2], [4, 0, 0, 2], [4, 3, 3, 3]])
  console.log(rotateMatrix([[1, 1, 1, 2], [4, 0, 0, 2], [4, 0, 0, 2], [4, 3, 3, 3]]))
  console.log([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
  console.log(rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
}

test()
