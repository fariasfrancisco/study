'use strict';

class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.HEAD = new Node(data);

    const l = arguments.length;
    let currentNode = this.HEAD;
    let node;

    for (let i = 1; i < l; i++) {
      node = new Node(arguments[i], undefined, currentNode);
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

  printList() {
    let currentNode = this.HEAD;
    let print = '';

    while (currentNode.next != null) {
      print += `${currentNode.data} <=> `;

      currentNode = currentNode.next;
    }

    console.log(`${print}${currentNode.data}`);
  }

  findElement(data) {
    let currentNode = this.HEAD;

    while (currentNode != null && currentNode.data !== data) {
      currentNode = currentNode.next;
    }

    return currentNode
  }

  insertLast(data) {
    const last = this.getLast();

    last.next = new Node(data, undefined, last);

    return last.next;
  }

  insertAt(index, data) {
    const node = this.getElementAt(index);

    if (node == null) throw new Error('Cannot insert in that index');

    if (node.prev == null) {
      this.HEAD = new Node(data, node);
      node.prev = this.HEAD;

      return this.HEAD;
    } else {
      const newNode = new Node(data, node, node.prev);

      node.prev = newNode;
      newNode.prev.next = newNode;

      return newNode;
    }
  }

  deleteLast() {
    let last = this.getLast();

    if (last.prev == null) this.HEAD = undefined;
    else last.prev.next = undefined;
  }

  deleteAt(index) {
    let node = this.getElementAt(index);

    if (node == null) throw Error('Cannot delete that element');

    if (node.prev == null) {
      if (this.HEAD != null) {
        if (this.HEAD.next != null) {
          this.HEAD = this.HEAD.next;
          this.HEAD.prev = undefined;
        }

        this.HEAD = undefined;
      }
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
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
  console.log('Creating Doubly Linked List');
  const list = new DoublyLinkedList(0, 1, 2, 3, 4);
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
