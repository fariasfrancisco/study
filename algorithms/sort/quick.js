'use strict'

/*
 *                       Best     |     Avg     |   Worst
 * Time Complexity:   Ω(n log(n))	| Θ(n log(n))	| O(n^2)
 * Space Complexity:              |             | O(n)
 */
function quickSort (arr) {
  function sort (array, left, right) {
    if (left >= right) return

    // Pick pivot
    const pivot = array[Math.floor((left + right) / 2)]
    // Go through array swapping numbers and get the point of partition of the array
    const index = partition(array, left, right, pivot)

    // Repeat the sorting through both halves
    sort(array, left, index - 1)
    sort(array, index, right)
  }

  function partition (array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++
      }

      while (array[right] > pivot) {
        right--
      }

      // If both pointers met, then we found an element to the left that is greater than the pivot and one to the right
      // that is smaller than the pivot. We swap then, move pointers and repeat
      if (left <= right) {
        [array[left], array[right]] = [array[right], array[left]]
        left++
        right--
      }
    }

    // Once pointers have met, we return the left one as a point of partition
    return left
  }

  sort(arr, 0, arr.length - 1)
}

function test () {
  console.log('Build unsorted array')
  const array = [1, 3, 6, 2, 4, 6, 9, 0, 1, 4]
  console.log(array)
  console.log('Sorting Array')
  console.log(quickSort(array))
}

test()
