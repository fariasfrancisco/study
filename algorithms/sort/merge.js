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

    // while one of the pointers hasn't reached the end of it's half
    while (i < l && j < r) {
      // Compare values of both halves and place the smaller one on the array
      if (left[i] < right[j]) {
        array[k] = left[i]
        i++
      } else {
        array[k] = right[j]
        j++
      }

      k++
    }

    // Deal with leftovers of the left array, if there are any
    while (i < l) {
      array[k] = left[i]
      i++
      k++
    }

    // Deal with leftovers of the right array, if there are any
    while (j < r) {
      array[k] = right[j]
      j++
      k++
    }
  }

  function sort (array) {
    const l = array.length

    // Stop repeating when we have a single element array
    if (l < 2) return

    // Find mid point and get two arrays by splitting the original
    const mid = Math.floor(l / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)

    // Repeat process to the left until we can't split more
    sort(left)

    // Repeat process to the right until we can't split more
    sort(right)

    // Merge both halves
    merge(left, right, array)
  }

  sort(arr)
}

function test () {
  console.log('Build unsorted array')
  const array = [1, 3, 6, 2, 4, 6, 9, 0, 1, 4]
  console.log(array)
  console.log('Sorting Array')
  console.log(mergeSort(array))
}

test()
