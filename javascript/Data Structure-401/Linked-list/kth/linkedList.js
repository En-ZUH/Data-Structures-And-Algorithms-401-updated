'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {

    try {

      if (!value) {
        throw new Error('Please enter a value');
      }
      let newNode = this.head;
      this.head = new Node(value, newNode);
      this.length++;
    }
    catch (error) {
      console.log('Error: insert method', error);
    }
  }

  includes(value) {
    try {

      if (!value) {
        throw new Error('Please enter a value');
      }

      let current = this.head;

      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    } catch (error) {
      console.log('Error: includes method', error);
    }
  }

  toString() {
    try {
      let linkedList = '';
      let current = this.head;
      while (current) {
        if (current.next === null) {
          linkedList += `{${current.value}} -> NULL`;
        } else {
          linkedList += `{ ${current.value} } -> `;
        }
        current = current.next;
      }
      return linkedList;
    } catch (error) {
      console.log(`Error: toString method`, error);
    }
  }


  append(value) {
    var newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
    return this;
  }

  //insert
  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        this.length++;
        let temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      }
      current = current.next;
    }
    return 'exception';
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    if (this.head) {
      let current = this.head;
      if (current.value === value) {
        newNode.next = current;
        this.head = newNode;
        return;
      }
      while (current.next) {
        if (current.next.value === value) {
          let temp = current.next;
          current.next = newNode;
          newNode.next = temp;

          return current.value;
        }
        current = current.next;
      }
    } else {
      return `Exception`;
    }
  }

  kthFromEnd(k) {
    if (typeof k !== typeof 1 || k < 0) {
      return 'Exception';
    }
    let index = 0;
    if (this.head) {
      let current = this.head;
      index++;
      while (current.next) {
        current = current.next;
        index++;
      }
      if (index === 1) {
        return (k === 0) ? current.value : 'Exception';
      }
      if (k <= index) {
        current = this.head;
        for (let i = 1; i < index - k; i++) {
          current = current.next;
        }
        return current.value;
      }
    } else {
      return 'Exception';
    }
  }
}



module.exports = LinkedList;