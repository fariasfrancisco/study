'use strict'

class Node {
  constructor (id, children = new Set()) {
    this.id = id
    this.children = children
  }
}

class Graph {
  constructor (nodes) {
    this.nodes = nodes
  }

  hasPathBFS (origin, destination) {
    function hasPath (origin, destination, visitedNodes) {
      if (origin.id === destination.id) return true
      if (visitedNodes.has(origin.id)) return false

      visitedNodes.add(origin.id)

      for (const child of origin.children) {
        if (hasPath(child, destination, visitedNodes)) return true
      }

      return false
    }

    return hasPath(origin, destination, new Set())
  }

  hasPathDFS (origin, destination) {
    const itinerary = [origin]
    const visitedNodes = new Set()
    let node

    while (itinerary.length > 0) {
      node = itinerary.shift()

      if (node.id === destination.id) return true

      visitedNodes.add(node.id)

      for (const child of node.children) {
        if (!visitedNodes.has(child.id)) itinerary.push(child)
      }
    }

    return false
  }
}

function testSuite () {
  const nodes = [
    new Node(0),
    new Node(1),
    new Node(2),
    new Node(3),
    new Node(4),
    new Node(5),
    new Node(6),
  ]

  nodes[0].children = new Set([nodes[1], nodes[2]])
  nodes[1].children = new Set([nodes[2], nodes[4]])
  nodes[2].children = new Set([nodes[3]])
  nodes[4].children = new Set([nodes[5]])

  console.log('Creating Graph')

  const graph = new Graph(nodes)

  console.log('hasPathBFS from 1 to 5', graph.hasPathBFS(nodes[1], nodes[5]))
  console.log('hasPathBFS from 0 to 6', graph.hasPathBFS(nodes[0], nodes[6]))
  console.log('hasPathDFS from 1 to 5', graph.hasPathDFS(nodes[1], nodes[5]))
  console.log('hasPathDFS from 0 to 6', graph.hasPathDFS(nodes[0], nodes[6]))
  console.log(nodes)
}
