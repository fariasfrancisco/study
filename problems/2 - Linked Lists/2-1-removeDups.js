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

  removeDups () {
    // with buffer
    /*
    const set = new Set()
    let node = this.HEAD
    let prev

    while (node != null) {
      if (set.has(node.data)) {
        prev.next = node.next
      } else {
        set.add(node.data)
        prev = node
      }

      node = node.next
    }
    */

    // without buffer
    let current = this.HEAD
    let next
    let prev

    while (current != null) {
      next = current.next
      prev = current

      while (next != null) {
        if (next.data === current.data) {
          prev.next = next.next
        } else {
          prev = next
        }

        next = next.next
      }

      current = current.next
    }
  }
}

function test () {
  console.log('Creating list')
  const list = new LinkedList(0, 1, 1, 2, 3, 3, 4, 5, 6, 6)
  console.log(list.printList())
  console.log('Removing dupes')
  list.removeDups()
  console.log(list.printList())
}

test()
