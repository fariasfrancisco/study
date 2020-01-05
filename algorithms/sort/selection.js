'use strict'

/*
 *                    Best   |   Avg  | Worst
 * Time Complexity:   Ω(n^2) | Θ(n^2) |	O(n^2)
 * Space Complexity:         |        | O(1)
 */
function selectionSort (array) {
  const l = array.length
  let aux

  for (let i = 0; i < l; i++) {
    aux = i

    for (let j = i; j < l; j++) {
      if (array[aux] > array[j]) aux = j
    }

    array.splice(i, 0, array[aux])
    array.splice(aux + 1, 1)
  }

  return array
}

function test () {
  console.log('Build unsorted array')
  const array = [1, 3, 6, 2, 4, 6, 9, 0, 1, 4]
  console.log(array)
  console.log('Sorting Array', selectionSort(array))
}

test()
