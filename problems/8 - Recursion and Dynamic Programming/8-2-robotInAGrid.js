'use strict'

function moveRobot (grid) {
  const goalX = grid.length - 1
  const goalY = grid[0].length - 1
  let path

  function traverse (i, j, visited, k) {
    if (path != null || i > goalX || i < 0 || visited[i][j] > -1 || j > goalY || j < 0 || grid[i][j] === 0) return
    if (i === goalX && j === goalY) {
      path = visited
      return
    }

    const v = Array.from(visited, x => [...x])
    v[i][j] = k

    traverse(i, j + 1, v, k + 1)
    traverse(i + 1, j, v, k + 1)
  }

  function getPath (p) {
    if (p == null) return

    const out = []
    const lx = p.length
    const ly = p[0].length

    for (let i = 0; i < lx; i++) {
      for (let j = 0; j < ly; j++) {
        if (p[i][j] > -1) out[p[i][j]] = [i, j]
      }
    }

    return out
  }

  const arr = []
  for (let i = 0; i < grid.length; i++) {
    arr[i] = new Array(goalY)
    arr[i].fill(-1)
  }

  traverse(0, 0, arr, 0)

  return getPath(path)
}

function test () {
  const grid = [
    [1, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1]
  ]

  console.log('grid', grid)
  console.log('path', moveRobot(grid))
}

test()

