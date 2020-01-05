'use strict'

class Node {
  constructor (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinaryHeap {
  constructor (array, comparator) {
    this.items = array
    this.comparator = comparator || ((a, b) => a > b)
  }

  static getLeftChildIndex (index) {
    return 2 * index + 1
  }

  static getRightChildIndex (index) {
    return 2 * index + 2
  }

  static getParentIndex (index) {
    return (index - 1) / 2
  }

  getLeftChild (index) {
    return this.items[BinaryHeap.getLeftChildIndex(index)]
  }

  getRightChild (index) {
    return this.items[BinaryHeap.getRightChildIndex(index)]
  }

  getParent (index) {
    return this.items[BinaryHeap.getParentIndex(index)]
  }

  swapValues (i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
  }

  peek () {
    if (this.items == null || this.items.length < 1) throw new Error('Empty Heap')

    return this.items[0]
  }

  poll () {
    const value = this.peek()

    this.items[0] = this.items[this.items.length - 1]
    this.items.pop()

    this.heapifyDown()

    return value
  }

  heapifyUp () {
    let i = this.items.length - 1
    let parent = this.getParent(i)
    let parentIndex = BinaryHeap.getParentIndex(i)

    while (parent != null && this.comparator(parent, this.items[i])) {
      this.swapValues(i, parentIndex)

      i = parentIndex
      parent = this.getParent(i)
      parentIndex = BinaryHeap.getParentIndex(i)
    }
  }

  heapifyDown () {
    let i = 0
    let left = this.getLeftChild(i)
    let right = this.getRightChild(i)
    let childIndex

    while (left != null) {
      childIndex = right != null && this.comparator(left, right) ? BinaryHeap.getRightChildIndex(i) : BinaryHeap.getLeftChildIndex(i)

      if (this.comparator(this.items[childIndex], this.items[i])) break

      this.swapValues(childIndex, i)

      i = childIndex
      left = this.getLeftChild(i)
      right = this.getRightChild(i)
    }
  }

  add (value) {
    this.items.push(value)
    this.heapifyUp()
  }
}
