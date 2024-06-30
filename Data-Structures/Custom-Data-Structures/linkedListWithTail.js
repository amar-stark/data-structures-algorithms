// Node is a individual entity of a linked list
// So, it will have a value and pointer to the next node.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Linked list is a collection of Nodes.
// It will have head and size (number of nodes)
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Linked list is empty!')
        } else {
            let curr = this.head,
                printList = '';

            while (curr) {
                printList += `${curr.value} `;

                curr = curr.next;
            }

            console.log(printList);
        }
    }

    // O(1) -> Constant time complexity
    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    // O(1) -> Constant time complexity
    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    // O(1) -> Constant time complexity
    removeFromFront() {
        if (this.isEmpty()) return null;

        const removedItem = this.head;

        this.head = this.head.next;

        this.size--;

        return removedItem.value;
    }

    // O(n) -> linear time complexity
    removeFromEnd() {
        if (this.isEmpty()) return null;

        const removedItem = this.tail;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;

            while (prev.next !== this.tail) {
                prev = prev.next
            }

            prev.next = null;
            this.tail = prev;
        }

        this.size--;

        return removedItem.value;
    }
}

// const linkedList = new LinkedList();

// console.log('Is Linked list empty? ', linkedList.isEmpty());
// console.log('Linked list size? ', linkedList.getSize());

// linkedList.print();

// linkedList.prepend(10);
// linkedList.prepend(20);
// linkedList.prepend(30);
// linkedList.append(100);
// linkedList.append(200);
// linkedList.append(300);

// linkedList.print();

// linkedList.removeFromFront();

// linkedList.print();

// linkedList.removeFromEnd();

// linkedList.print();

module.exports = LinkedList;