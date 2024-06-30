const LinkedList = require('./linkedListWithTail');

class LinkedListQueue {
    constructor() {
        this.queue = new LinkedList();
    }

    enqueue(value) {
        return this.queue.append(value)
    }

    dequeue() {
        return this.queue.removeFromFront();
    }

    peek() {
        return this.queue.head.value;
    }

    isEmpty() {
        return this.queue.isEmpty();
    }

    getSize() {
        return this.queue.getSize();
    }

    print() {
        return this.queue.print();
    }
}

let linkedListQueue = new LinkedListQueue();

console.log(linkedListQueue.isEmpty());

linkedListQueue.enqueue(10);
linkedListQueue.enqueue(20);
linkedListQueue.enqueue(30);

linkedListQueue.print();

console.log(linkedListQueue.dequeue());
console.log(linkedListQueue.peek());

linkedListQueue.print();
console.log(linkedListQueue.getSize());


linkedListQueue.dequeue();

linkedListQueue.print();

console.log(linkedListQueue.isEmpty());
