'use strict'

class Box {
  constructor (width, height, depth) {
    this.width = width
    this.height = height
    this.depth = depth
  }
}

function stackBoxes (boxes) {
  let max = 0

  function createStack (baseBox, stackHeight, set) {
    let s
    let stacked = false

    set.forEach(box => {
      if (baseBox == null || baseBox.width >= box.width && baseBox.height >= box.height && baseBox.depth >= box.depth) {
        stacked = true
        s = new Set(set)

        s.delete(box)

        createStack(box, stackHeight + box.height, s)
      }
    })

    if (!stacked || set.size < 1) max = max < stackHeight ? stackHeight : max
  }

  createStack(null, 0, new Set(boxes))

  return max
}

function test () {
  const boxes = [
    new Box(1, 1, 1),
    new Box(1, 2, 1),
    new Box(3, 1, 3),
    new Box(1, 4, 4),
    new Box(6, 7, 8),
    new Box(6, 6, 6)
  ]

  console.log(boxes)
  console.log('Biggest stack: ', stackBoxes(boxes))
}

test()
