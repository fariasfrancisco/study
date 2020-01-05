'use strict'

/*
 *                    Best |   Avg  | Worst
 * Time Complexity:   Ω(n) | Θ(n^2) |	O(n^2)
 * Space Complexity:       |        | O(1)
 */
function insertionSort (array) {
  const l = array.length

  for (let i = 1; i < l; i++) {
    if (array[i - 1] > array[i]) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[i]) {
          array.splice(j, 0, array[i])
          array.splice(i + 1, 1)

          break
        }
      }
    }
  }

  return array
}

function test () {
  console.log('Build unsorted array')
  const array = [1, 3, 6, 2, 4, 6, 9, 0, 1, 4]
  console.log(array)
  console.log('Sorting Array', insertionSort(array))
}

test()
