// // task - 1
// class Node {
//   constructor(value = null) {
//     this.value = value;
//     this.next = null;
//   }
//   toString() {
//     return `Node(${this.value})`;
//   }
// }
// const node1 = new Node(1);
// const node2 = new Node(2);
// node1.next = node2;
// console.log(node1.toString());
// console.log(node1.next.toString());

// task - 2
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addToEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  removeFromEnd() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  display() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
const list = new LinkedList();
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);
list.display();
list.removeFromEnd();
list.display();

// task - 3
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
  peak() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  display() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    console.log(this.items.join(" -> "));
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
console.log(stack.pop());
console.log(stack.peak());

// task - 4
function reverseStr(inputStr) {
  let stack = new Stack();
  for (let char of inputStr) {
    stack.push(char);
  }
  let reverseStr = "";
  while (!stack.isEmpty()) {
    reverseStr += stack.pop();
  }
  return reverseStr;
}
const reversedStr = reverseStr("hello shwetangi");
console.log(reversedStr);

// task - 5
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    console.log(this.items.join(" -> "));
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
console.log(queue.front());
console.log(queue.dequeue());
queue.display();

// task - 6
function printerQueue() {
  const queue = new Queue();
  queue.enqueue("print job 1");
  queue.enqueue("print job 2");
  queue.enqueue("print job 3");
  queue.display();
  while (!queue.isEmpty()) {
    const currentJob = queue.dequeue();
    console.log(currentJob);
  }
  console.log("All job processed queue is empty");
}
printerQueue();

// task - 7
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log(root);

// task - 8
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  inOrderTraversal() {
    this.inOrder(this.root);
  }
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(13);
binaryTree.insert(17);

console.log("In-order traversal:");
binaryTree.inOrderTraversal();
