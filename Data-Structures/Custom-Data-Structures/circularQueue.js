class CircularQueue {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    // This method checks if the queue is empty and returns a boolean value (true if empty, false otherwise).
    isEmpty() {
        return this.currentLength === 0;
    }

    // This method checks if the queue is full and returns a boolean value (true if full, false otherwise).
    isFull() {
        return this.currentLength === this.capacity;
    }

    // This method allows you to inspect the element at the front of the queue without removing it.
    peek() {
        return this.isEmpty() ? null : this.items[this.front];
    }

    // This method adds a new element to the back (end) of the queue.
    enqueue(elem) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            
            this.items[this.rear] = elem;
            
            this.currentLength++;

            if (this.front === -1) this.front = this.rear;
        }
    }

    // This method removes and returns the element at the front of the queue.
    dequeue() {
        if (this.isEmpty()) return null;

        const item = this.items[this.front];

        this.items[this.front] = null;

        this.front = (this.front + 1) % this.capacity;
        
        this.currentLength--;

        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return item;
    }

    // This method prints the stack contents
    print() {
        if (this.isEmpty()) {
            console.log('Queue is Empty!');
            return
        }

        let str = '', i;

        for (i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
            str += this.items[i] + ' ';
        }

        str += this.items[i];

        console.log(str);
    }
}