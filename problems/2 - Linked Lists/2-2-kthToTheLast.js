'use strict'

class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor (data) {
    this.HEAD = new Node(data)

    const l = arguments.length
    let currentNode = this.HEAD
    let node

    for (let i = 1; i < l; i++) {
      node = new Node(arguments[i])
      currentNode.next = node
      currentNode = node
    }
  }

  printList () {
    let currentNode = this.HEAD
    let print = ''

    while (currentNode.next != null) {
      print += `${currentNode.data} -> `

      currentNode = currentNode.next
    }

    console.log(`${print}${currentNode.data}`)
  }

  kthToTheLast (index) {
    const l = this.size

    if (index > l) return undefined

    const times = l - index
    let node = this.HEAD

    for (let i = 0; i < times; i++) {
      node = node.next
    }

    return node
  }

  get size () {
    let count = 1
    let currentNode = this.HEAD

    while (currentNode.next != null) {
      currentNode = currentNode.next
      count++
    }

    return count
  }
}

function test () {
  console.log('Creating list')
  const list = new LinkedList(0, 1, 1, 2, 3, 3, 4, 5, 6, 6)
  console.log(list.printList())
  console.log('Getting kth node to the last (4)', list.kthToTheLast(4))
}

test()
