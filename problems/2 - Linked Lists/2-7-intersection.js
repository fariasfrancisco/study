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

  get size () {
    let count = 1
    let currentNode = this.HEAD

    while (currentNode.next != null) {
      currentNode = currentNode.next
      count++
    }

    return count
  }

  static areIntersecting (l1, l2) {
    let n1 = l1.HEAD
    let n2 = l2.HEAD

    while (n1.next != null || n2.next != null) {
      if (n1.next != null) n1 = n1.next
      if (n2.next != null) n2 = n2.next
    }

    return n1 === n2
  }

  static getIntersectionPoint (l1, l2) {
    if (!this.areIntersecting(l1, l2)) return undefined

    let diff = l1.size - l2.size
    let n1 = l1.HEAD
    let n2 = l2.HEAD

    if (diff > 0) {
      while (diff > 0) {
        n1 = n1.next
      }
    } else if (diff < 0) {
      while (diff < 0) {
        n2 = n2.next
      }
    }

    while (n1 !== n2) {
      n1 = n1.next
      n2 = n2.next
    }

    return n1
  }
}

function test () {
}

test()
