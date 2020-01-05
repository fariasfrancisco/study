'use strict'

// Time Complexity O(log n)
function binarySearch (array, target) {
  let left = 0
  let right = array.length - 1
  let mid = Math.floor((left + right) / 2)

  while (left <= right) {
    if (array[mid] === target) return mid

    if (array[mid] > target) right = mid - 1
    else left = mid + 1

    mid = Math.floor((left + right) / 2)
  }

  return -1
}

function test () {
  console.log('Creating sorted array')
  const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  console.log(array)
  console.log('Find index for 21', binarySearch(array, 21))
  console.log('Find index for 14', binarySearch(array, 14))
}

test()
