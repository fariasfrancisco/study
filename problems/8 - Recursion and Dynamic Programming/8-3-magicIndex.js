'use strict'

function findMagicIndex (array) {
  const l = array.length

  let left = 0
  let right = l - 1
  let mid

  while (left <= right) {
    mid = Math.floor((left + right) / 2)

    if (array[mid] === mid) return mid
    else if (array[mid] > mid) left = mid + 1
    else right = mid - 1
  }

  return undefined
}

function test () {
  const arr1 = [0, 3, 3, 3, 3, 3, 8, 8, 8, 10]
  const arr2 = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]
  console.log(arr1, findMagicIndex(arr1))
  console.log(arr2, findMagicIndex(arr2))
}

test()
