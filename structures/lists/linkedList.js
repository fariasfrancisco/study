'use strict';

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    this.HEAD = new Node(data);

    const l = arguments.length;
    let currentNode = this.HEAD;
    let node;

    for (let i = 1; i < l; i++) {
      node = new Node(arguments[i]);
      currentNode.next = node;
      currentNode = node;
    }
  }

  getElementAt(index) {
    let currentNode = this.HEAD;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;

      if (currentNode == null) return undefined;
    }

    return currentNode;
  }

  getLast() {
    let currentNode = this.HEAD;

    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  findElement(data) {
    let currentNode = this.HEAD;

    while (currentNode != null && currentNode.data !== data) {
      currentNode = currentNode.next;
    }

    return currentNode
  }

  printList() {
    let currentNode = this.HEAD;
    let print = '';

    while (currentNode.next != null) {
      print += `${currentNode.data} -> `;

      currentNode = currentNode.next;
    }

    console.log(`${print}${currentNode.data}`);
  }

  insertLast(data) {
    const last = this.getLast();

    last.next = new Node(data);

    return last.next;
  }

  insertAt(index, data) {
    if (index === 0) {
      this.HEAD = new Node(data, this.HEAD);

      return this.HEAD;
    }

    const node = this.getElementAt(index - 1);

    if (node == null) throw new Error('Cannot insert in that index');

    node.next = new Node(data, node.next);

    return node.next;
  }

  deleteLast() {
    let currentNode = this.HEAD;
    let previousNode;

    while (currentNode.next != null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode == null) this.HEAD = undefined;
    else previousNode.next = undefined;
  }

  deleteAt(index) {
    let currentNode = this.HEAD;
    let previousNode;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;

      if(currentNode == null) throw new Error('Cannot delete at that index');
    }

    if (previousNode == null && this.HEAD != null) this.HEAD = this.HEAD.next;
    else previousNode.next = currentNode.next;
  }

  get size() {
    let count = 1;
    let currentNode = this.HEAD;

    while (currentNode.next != null) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }
}

function testSuite() {
  console.log('Creating Linked List');
  const list = new LinkedList(0, 1, 2, 3, 4);
  list.printList();
  console.log('Get Element At 1', list.getElementAt(1));
  console.log('Get Element At 3', list.getElementAt(3));
  console.log('Get Element At 5', list.getElementAt(5));
  console.log('Get Last Element', list.getLast());
  console.log('Search for 3', list.findElement(3));
  console.log('Search for 6', list.findElement(6));
  console.log('Inserting 6 Last');
  list.insertLast(6);
  list.printList();
  console.log('Inserting 5 at 5');
  list.insertAt(5, 5);
  list.printList();
  console.log('Inserting 5 at 5');
  list.insertAt(5, 5);
  list.printList();
  console.log('Deleting Last');
  list.deleteLast();
  list.printList();
  console.log('Deleting at 5');
  list.deleteAt(5);
  list.printList();
  console.log('Get size', list.size);
}
