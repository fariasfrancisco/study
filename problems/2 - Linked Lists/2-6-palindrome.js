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

  isPalindrome () {
    let slow = this.HEAD
    let fast = this.HEAD
    const arr = []

    while (fast != null && fast.next != null) {
      arr.push(slow.data)
      slow = slow.next
      fast = fast.next
      fast = fast.next
    }

    if (fast != null) slow = slow.next

    while (arr.length > 0) {
      if (slow.data !== arr.pop()) return false

      slow = slow.next
    }

    return true
  }
}

function test () {
  console.log('Creating lists')
  const l1 = new LinkedList(1, 2, 3, 4, 3, 2, 1)
  const l2 = new LinkedList(1, 2, 3, 3, 2, 1)
  const l3 = new LinkedList(1, 2, 3, 3, 3, 1)
  const l4 = new LinkedList(1, 2, 3, 4, 3, 3, 1)
  console.log(l1.printList(), l2.printList())
  console.log('is l1 palindrome?', l1.isPalindrome())
  console.log('is l2 palindrome?', l2.isPalindrome())
  console.log('is l3 palindrome?', l3.isPalindrome())
  console.log('is l4 palindrome?', l4.isPalindrome())
}

test()
