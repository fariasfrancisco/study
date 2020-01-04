'use strict';

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class CircledList {
  constructor(data) {
    this.HEAD = new Node(data);
    this.HEAD.next = this.HEAD;

    const l = arguments.length;
    let currentNode = this.HEAD;
    let node;

    for (let i = 1; i < l; i++) {
      node = new Node(arguments[i], this.HEAD);
      currentNode.next = node;
      currentNode = node;
    }
  }

  getElementAt(index) {
    let currentNode = this.HEAD;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;

      if (currentNode === this.HEAD) return undefined;
    }

    return currentNode;
  }

  getLast() {
    let currentNode = this.HEAD;

    while (currentNode.next !== this.HEAD) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  findElement(data) {
    let currentNode = this.HEAD;

    while (currentNode.next !== this.HEAD && currentNode.data !== data) {
      currentNode = currentNode.next;
    }

    return currentNode.data === data ? currentNode : undefined
  }

  printList() {
    let currentNode = this.HEAD;
    let print = `${currentNode.data}[HEAD] -> `;

    while (currentNode.next !== this.HEAD) {
      currentNode = currentNode.next;

      print += `${currentNode.data} -> `;
    }

    console.log(`${print}${currentNode.next.data}[HEAD]`);
  }

  insertLast(data) {
    const last = this.getLast();

    last.next = new Node(data, this.HEAD);

    return last.next;
  }

  insertAt(index, data) {
    if (index === 0) {
      const node = new Node(data, this.HEAD);
      const last = this.getLast();

      last.next = node;
      this.HEAD = node;

      return node;
    }

    const node = this.getElementAt(index - 1);

    if (node == null) throw Error('Cannot insert in that index');

    node.next = new Node(data, node.next);

    return node.next;
  }

  deleteLast() {
    let currentNode = this.HEAD;
    let previousNode;

    while (currentNode.next !== this.HEAD) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode === this.HEAD) this.HEAD = undefined;
    else previousNode.next = this.HEAD;
  }

  deleteAt(index) {
    let currentNode = this.HEAD;
    let previousNode;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;

      if (currentNode === this.HEAD) throw new Error('Cannot delete at that index');
    }

    if (previousNode == null && this.HEAD != null) this.HEAD = this.HEAD.next;
    else previousNode.next = currentNode.next;
  }

  get size() {
    let count = 1;
    let currentNode = this.HEAD;

    while (currentNode.next !== this.HEAD) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }
}

function testSuite() {
  console.log('Creating Circled List');
  const list = new CircledList(0, 1, 2, 3, 4);
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
