const LinkedList = require('./linkedListWithTail');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        return this.list.prepend(value);
    }

    pop() {
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}

let linkedListStack = new LinkedListStack();

console.log(linkedListStack.isEmpty());

linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);

linkedListStack.print();

console.log(linkedListStack.pop());
console.log(linkedListStack.peek());

linkedListStack.print();
console.log(linkedListStack.getSize());


linkedListStack.pop();

console.log(linkedListStack.isEmpty());
