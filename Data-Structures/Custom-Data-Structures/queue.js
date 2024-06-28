// Queue class definition using Arrays
class Queue {
    constructor() {
        this.items = [];
    }

    // This method adds a new element to the back (end) of the queue.
    enqueue(elem) {
        this.items.push(elem);
    }

    // This method removes and returns the element at the front of the queue.
    dequeue() {
        return this.items.shift();
    }

    // This method allows you to inspect the element at the front of the queue without removing it.
    peek() {
        return this.items[0];
    }

    // This method checks if the queue is empty and returns a boolean value (true if empty, false otherwise).
    isEmpty() {
        return this.items.length === 0;
    }

    // This method returns the current number of elements in the queue.
    size() {
        return this.items.length;
    }

    // This method prints the stack contents
    print() {
        console.log(this.items.toString());
    }
}

// New Stack class instance
const queue = new Queue();

console.log(queue);

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.size());

queue.print();

console.log(queue.isEmpty());

console.log(queue.peek());

console.log(queue.dequeue());

console.log(queue.peek());

queue.print();


// Optimised solution
// Queue class definition using Objects
class QueueObj {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    // This method adds a new element to the back (end) of the queue.
    enqueue(elem) {
        this.items[this.rear] = elem;
        
        this.rear++;
    }

    // This method removes and returns the element at the front of the queue.
    dequeue() {
        const first = this.items[this.front];
        
        delete this.items[this.front];

        this.front++;

        return first;
    }

    // This method allows you to inspect the element at the front of the queue without removing it.
    peek() {
        return this.items[this.front];
    }

    // This method checks if the queue is empty and returns a boolean value (true if empty, false otherwise).
    isEmpty() {
        return (this.rear - this.front) === 0;
    }

    // This method returns the current number of elements in the queue.
    size() {
        return (this.rear - this.front);
    }

    // // This method prints the stack contents
    print() {
        console.log(this.items);
    }

}

// New Stack class instance
const queueObj = new QueueObj();

console.log(queueObj);

console.log(queueObj.isEmpty());

queueObj.enqueue(1);
queueObj.enqueue(2);
queueObj.enqueue(3);

console.log(queueObj.size());

queueObj.print();

console.log(queueObj.isEmpty());

console.log(queueObj.peek());

console.log(queueObj.dequeue());

console.log(queueObj.peek());

queueObj.print();