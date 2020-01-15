'use strict'

function merge (arrA, arrB) {
  let i = arrA.length - 1
  let j = arrB.length - 1
  let k = i + j + 1

  while (k > -1) {
    if (i > -1 && j > -1) {
      if (arrA[i] > arrB[j]) {
        arrA[k] = arrA[i]
        i--
      } else {
        arrA[k] = arrB[j]
        j--
      }

      k--
    } else {
      while (i > -1) {
        arrA[k] = arrA[i]
        i--
        k--
      }

      while (j > -1) {
        arrA[k] = arrB[j]
        j--
        k--
      }
    }
  }

  return arrA
}

function test () {
  console.log('arrA = [0, 2, 4]; arrB = [1, 2, 3]')
  console.log(merge([0, 2, 4], [1, 2, 3]))
}

test()
