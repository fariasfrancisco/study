'use strict'

/*
 *                    Best |   Avg  | Worst
 * Time Complexity:   Ω(n) | Θ(n^2) |	O(n^2)
 * Space Complexity:       |        | O(1)
 */
function bubbleSort (array) {
  const l = array.length - 1
  let swapped = true

  while (swapped) {
    swapped = false

    for (let i = 0; i < l; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
  }

  return array
}

function test () {
  console.log('Build unsorted array')
  const array = [1, 3, 6, 2, 4, 6, 9, 0, 1, 4]
  console.log(array)
  console.log('Sorting Array', bubbleSort(array))
}

test()
