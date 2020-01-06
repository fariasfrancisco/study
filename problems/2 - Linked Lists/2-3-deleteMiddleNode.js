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

  deleteMiddleNode () {
    let slow = this.HEAD
    let fast = this.HEAD
    let prev

    while (fast != null && fast.next != null) {
      fast = fast.next
      fast = fast.next
      prev = slow
      slow = slow.next
    }

    if (prev == null) this.HEAD = undefined
    else prev.next = slow.next
  }
}

function test () {
  console.log('Creating list')
  const list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8, 9)
  console.log(list.printList())
  console.log('Deleting middle node')
  list.deleteMiddleNode()
  console.log(list.printList())
}

test()
