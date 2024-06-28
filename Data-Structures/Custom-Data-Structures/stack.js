// Stack class definition
class Stack {
    constructor() {
        this.items = [];
    }

    // This method adds a new element to the top of the stack.
    push(element) {
        this.items.push(element);
    }

    // This method removes and returns the element at the top of the stack.
    pop() {
        return this.items.pop();
    }

    // This method allows you to inspect the element at the top of the stack without removing it.
    peek() {
        return this.items[this.items.length - 1];
    }

    // This method checks if the stack is empty and returns a boolean value (true if empty, false otherwise).
    isEmpty() {
        return this.items.length === 0;
    }

    // This method returns the current number of elements in the stack.
    size() {
        return this.items.length;
    }

    // This method prints the stack contents
    print() {
        console.log(this.items.toString());
    }
}

// New Stack class instance
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(5);

stack.print();

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());

console.log(stack.isEmpty());