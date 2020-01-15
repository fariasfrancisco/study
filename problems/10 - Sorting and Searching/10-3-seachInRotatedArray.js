'use strict'

function find (array, target) {
  function search (left, right) {
    let middle

    while (left <= right) {
      middle = Math.floor((left + right) / 2)

      if (array[middle] === target) return middle

      if (array[left] === array[right]) {
        return search(left, middle - 1) || search(middle + 1, right)
      } else if (array[middle] > target) {
        if (array[middle] > array[left]) right = middle - 1
        else left = middle + 1
      } else {
        if (array[middle] > array[right]) right = middle - 1
        else left = middle + 1
      }
    }
  }

  return search(0, array.length - 1)
}

function test () {
  const arr0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const arr1 = [5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4]
  const arr2 = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
  const arr3 = [5, 7, 10, 14, 15, 16, 19, 20, 25, 1, 3, 4]
  const arr4 = [2, 2, 2, 2, 3, 4, 5]
  const arr5 = [2, 2, 2, 3, 4, 5, 2]
  let x = find(arr0, 5)
  console.log('find 5 in ', arr0, x, arr0[x])
  x = find(arr1, 5)
  console.log('find 5 in ', arr1, x, arr1[x])
  x = find(arr2, 5)
  console.log('find 5 in ', arr2, x, arr2[x])
  x = find(arr3, 5)
  console.log('find 5 in ', arr3, x, arr3[x])
  x = find(arr4, 5)
  console.log('find 5 in ', arr4, x, arr4[x])
  x = find(arr5, 5)
  console.log('find 5 in ', arr5, x, arr5[x])
}

test()
