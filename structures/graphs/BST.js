'use strict'

class Node {
  constructor (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor (data) {
    this.ROOT = new Node(data)
  }

  static buildTreeFromArray (array) {
    const tree = new BinarySearchTree(0)

    array.sort((a, b) => a - b)
    tree.balanceTree(array)

    return tree
  }

  static buildTreeFromList (list) {
    const array = []
    let node = list.HEAD

    while (node != null) {
      array.push(node.data)

      node = node.next
    }

    return this.buildTreeFromArray(array)
  }

  insert (data) {
    function insertNode (node) {
      if (data <= node.data) {
        if (node.left == null) node.left = new Node(data)
        else insertNode(node.left)
      } else {
        if (node.right == null) node.right = new Node(data)
        else insertNode(node.right)
      }
    }

    insertNode(this.ROOT, data)
  }

  contains (data) {
    function containsNode (node) {
      if (node.data === data) return true

      if (data < node.data) {
        if (node.left == null) return false
        else return containsNode(node.left)
      } else {
        if (node.right == null) return false
        else return containsNode(node.right)
      }
    }

    return containsNode(this.ROOT)
  }

  printInOrder () {
    let print = ''

    function traverseAndPrint (node) {
      if (node.left != null) traverseAndPrint(node.left)

      print += `${node.data} `

      if (node.right != null) traverseAndPrint(node.right)
    }

    traverseAndPrint(this.ROOT)

    return print
  }

  printPreOrder () {
    let print = ''

    function traverseAndPrint (node) {
      print += `${node.data} `

      if (node.left != null) traverseAndPrint(node.left)
      if (node.right != null) traverseAndPrint(node.right)
    }

    traverseAndPrint(this.ROOT)

    return print
  }

  printPostOrder () {
    let print = ''

    function traverseAndPrint (node) {
      if (node.left != null) traverseAndPrint(node.left)
      if (node.right != null) traverseAndPrint(node.right)

      print += `${node.data} `
    }

    traverseAndPrint(this.ROOT)

    return print
  }

  isBST () {
    function checkNodes (node, min, max) {
      if (node == null) return true

      if (node.data < min || node.data > max) return false

      return checkNodes(node.left, min, node.data) && checkNodes(node.right, node.data, max)
    }

    return checkNodes(this.ROOT, Number.MIN_VALUE, Number.MAX_VALUE)
  }

  balanceTree (nodes = []) {
    function traverse (node) {
      if (node.left != null) traverse(node.left)

      nodes.push(node.data)

      if (node.right != null) traverse(node.right)
    }

    function getMiddleIndex (start, end) {
      return Math.floor((start + end) / 2)
    }

    function insertElement (start, end) {
      if (start > end) return

      const mid = getMiddleIndex(start, end)
      const left = insertElement(start, mid - 1)
      const right = insertElement(mid + 1, end)

      return new Node(nodes[mid], left, right)
    }

    if (nodes.length < 1) traverse(this.ROOT)

    this.ROOT = insertElement(0, nodes.length - 1)
  }
}

function testSuite () {
  console.log('Creating BST')
  const bst = new BinarySearchTree(4)
  console.log('Inserting')
  bst.insert(3)
  bst.insert(2)
  bst.insert(1)
  bst.insert(5)
  bst.insert(6)
  bst.insert(7)
  console.log('Print In Order: ', bst.printInOrder())
  console.log('Print Pre Order: ', bst.printPreOrder())
  console.log('Print Post Order: ', bst.printPostOrder())
  console.log('Balancing')
  bst.balanceTree()
  console.log(bst.ROOT)
  console.log('Contains 5?', bst.contains(5))
  console.log('Contains 0?', bst.contains(0))
  console.log('Is BST?', bst.isBST())
}
