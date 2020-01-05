'use strict'

/*
 *                       Best     |     Avg     |   Worst
 * Time Complexity:   Ω(n log(n))	| Θ(n log(n))	| O(n log(n))
 * Space Complexity:              |             | O(n)
 */
function mergeSort (arr) {
  function merge (left, right, array) {
    const l = left.length
    const r = right.length
    let i = 0
    let j = 0
    let k = 0

    while (i < l && j < r) {
      if (left[i] < right[j]) {
        array[k] = left[i]
        i++
      } else {
        array[k] = right[j]
        j++
      }

      k++
    }

    while (i < l) {
      array[k] = left[i]
      i++
      k++
    }

    while (j < r) {
      array[k] = right[j]
      j++
      k++
    }
  }

  function sort (array) {
    const l = array.length

    if (l < 2) return

    const mid = Math.floor(l / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)

    sort(left)
    sort(right)
    merge(left, right, array)
  }

  sort(arr)

  return arr
}

function test () {
  console.log('Build unsorted array')
  const array = [1, 3, 6, 2, 4, 6, 9, 0, 1, 4]
  console.log(array)
  console.log('Sorting Array', mergeSort(array))
}

test()
