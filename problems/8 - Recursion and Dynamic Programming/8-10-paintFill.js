'use strict'

function fill (color, image, x, y) {
  let c = image[x][y]
  const lx = image.length

  function paint (i, j) {
    if (i < 0 || i >= lx || image[i][j] !== c) return

    image[i][j] = color

    for (const coord of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
      paint(...coord)
    }
  }

  paint(x, y)

  return image
}

function test () {
  const img0 = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 2]
  ]
  const img1 = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 2]
  ]

  console.log(fill(3, img0, 0, 1))
  console.log(fill(4, img1, 0, 2))
}

test()
