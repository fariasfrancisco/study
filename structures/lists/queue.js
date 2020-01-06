'use strict'

class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor (data) {
    this.HEAD = new Node(data)
    this.TAIL = this.HEAD

    const l = arguments.length
    let node

    for (let i = 1; i < l; i++) {
      node = new Node(arguments[i])
      this.TAIL.next = node
      this.TAIL = node
    }
  }

  print () {
    let currentNode = this.HEAD
    let print = `[HEAD]${currentNode.data} -> `

    while (currentNode.next !== this.TAIL) {
      currentNode = currentNode.next

      print += `${currentNode.data} -> `
    }

    console.log(`${print}${currentNode.next.data}[TAIL]`)
  }

  isEmpty () {
    return this.HEAD == null
  }

  peek () {
    if (!this.isEmpty()) return this.HEAD
  }

  add (data) {
    const node = new Node(data)

    if (this.isEmpty()) this.HEAD = node
    else this.TAIL.next = node

    this.TAIL = node
  }

  remove () {
    const node = this.HEAD

    this.HEAD = this.HEAD.next

    if (this.HEAD == null) this.TAIL = undefined

    return node
  }
}

function testSuite () {
  console.log('Creating Queue')
  const queue = new Queue(0, 1, 2, 3, 4)
  queue.print()
  console.log('Peeking ', queue.peek())
  console.log('Adding 5')
  queue.add(5)
  queue.print()
  console.log('Removing ', queue.remove())
  queue.print()
}
