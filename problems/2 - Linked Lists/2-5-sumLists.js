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

  static sumLists (l1, l2) {
    function buildNumber (list) {
      let i = 1
      let number = 0
      let node = list.HEAD

      while (node != null) {
        number += node.data * i
        i *= 10
        node = node.next
      }

      return number
    }

    function buildNumberFollowUp (list) {
      let number = 0
      let node = list.HEAD

      while (node != null) {
        number *= 10
        number += node.data
        node = node.next
      }

      return number
    }

    return buildNumberFollowUp(l1) + buildNumberFollowUp(l2) //buildNumber(l1) + buildNumber(l2)
  }
}

function test () {
  console.log('Creating lists')
  const l1 = new LinkedList(1, 2, 3)
  const l2 = new LinkedList(2, 5, 0)
  console.log(l1.printList(), l2.printList())
  console.log('Summing lists')
  console.log(LinkedList.sumLists(l1, l2))
}

test()
