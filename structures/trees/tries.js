'use strict';

class Node {
  constructor(children = {}, isWord = false) {
    this.children = children;
    this.isWord = isWord;
  }

  hasChild(character) {
    return this.children[character] != null;
  }

  setChild(character, isWord = false) {
    if (!this.hasChild(character)) this.children[character] = new Node({}, isWord);
    else if (isWord) this.children[character].isWord = true;

    return this.children[character]
  }
}

class Trie {
  constructor() {
    this.ROOT = new Node();
  }

  addWord(word) {
    const l = word.length - 1;
    let node = this.ROOT;

    for (let i = 0; i < l; i++) {
      node = node.setChild(word[i]);
    }

    node.setChild(word[l], true);
  }

  isValidPrefix(word) {
    const l = word.length;
    let node = this.ROOT;

    for (let i = 0; i < l; i++) {
      if (!node.hasChild(word[i])) return false;

      node = node.children[word[i]];
    }

    return true;
  }

  isCompleteWord(word) {
    const l = word.length;
    let node = this.ROOT;

    for (let i = 0; i < l; i++) {
      if (!node.hasChild(word[i])) return false;

      node = node.children[word[i]];
    }

    return node.isWord;
  }
}

function testSuite() {
  console.log('Creating Trie');
  const trie = new Trie();
  console.log('Adding "hola"');
  trie.addWord('hola');
  console.log('Is "hola" a word?', trie.isCompleteWord('hola'));
  console.log('Is "hol" a valid prefix?', trie.isValidPrefix('hol'));
  console.log('Is "hol" a word?', trie.isCompleteWord('hol'));
  console.log('Is "sup" a valid prefix?', trie.isValidPrefix('sup'));
}
