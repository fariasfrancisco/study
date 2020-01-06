'use strict'

class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor (data) {
    this.TOP = new Node(data)

    const l = arguments.length

    for (let i = 1; i < l; i++) {
      this.TOP = new Node(arguments[i], this.TOP)
    }
  }

  print () {
    let currentNode = this.TOP
    let print = `[TOP]${currentNode.data}`

    while (currentNode.next != null) {
      currentNode = currentNode.next

      print += ` -> ${currentNode.data}`
    }

    console.log(print)
  }

  isEmpty () {
    return this.TOP == null
  }

  peek () {
    if (!this.isEmpty()) return this.TOP
  }

  push (data) {
    this.TOP = new Node(data, this.TOP)
  }

  pop () {
    const node = this.TOP

    this.TOP = this.TOP.next

    return node
  }
}

function testSuite () {
  console.log('Creating Stack')
  const stack = new Stack(0, 1, 2, 3, 4)
  stack.print()
  console.log('Peeking ', stack.peek())
  console.log('Pushing 5')
  stack.push(5)
  stack.print()
  console.log('Popping ', stack.pop())
  stack.print()
}
