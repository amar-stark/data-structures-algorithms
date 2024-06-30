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
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // O(1) -> Constant time complexity
    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    // O(n) -> Linear time complexity
    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;

            while (prev.next) {
                prev = prev.next;
            }

            prev.next = node;
        }

        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.prepend(value);
            return
        }

        let node = new Node(value),
            prev = this.head,
            ix = 0;

        while (ix < index - 1) {
            prev = prev.next;
            ix++;
        }

        node.next = prev.next;

        prev.next = node;

        this.size++;
    }

    removeFrom(index) {
        if (index < 0 || index > this.size || this.isEmpty()) return null;

        let removedNode;

        if (index === 0) {
            removedNode = this.head;

            this.head = this.head.next;
        } else {
            let prev = this.head,
                ix = 0;

            while (ix < index - 1) {
                prev = prev.next;
                ix++;
            }

            removedNode = prev.next;

            prev.next = removedNode.next;
        }

        this.size--;

        return removedNode.value;
    }

    removeValue(value) {
        // Removing a node from empty list
        if (this.isEmpty()) return null;

        // Removing a node from head
        if (this.head.value === value) {

            this.head = this.head.next;

            this.size--;

            return value;
        }

        // Removing a node from anywhere other than head
        let prev = this.head;

        while (prev.next && prev.next.value !== value) {
            prev = prev.next;
        }

        if (prev.next) {
            const removedNode = prev.next;

            prev.next = removedNode.next;

            this.size--;

            return value;
        }

        return null;
    }

    search(value) {
        // Return -1 of list is empty
        if (this.isEmpty()) return -1;

        let index = 0, curr = this.head;

        while (curr) {
            if (curr.value === value) return index;

            curr = curr.next;

            index++;
        }

        return -1;
    }

    reverse() {
        let prev = null, curr = this.head;

        while (curr) {
            let next = curr.next;

            curr.next = prev;

            prev = curr;

            curr = next;
        }

        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Linked list is empty!')
        } else {
            let curr = this.head,
                printList = '';

            while (curr) {
                printList += `${curr.value} `;

                curr = curr.next
            }

            console.log(printList)
        }
    }
}

const linkedList = new LinkedList();

console.log('Is Linked list empty? ', linkedList.isEmpty());
console.log('Linked list size? ', linkedList.getSize());

linkedList.print();

linkedList.prepend(10);

linkedList.print();

linkedList.prepend(20);
linkedList.prepend(30);

linkedList.print();

const list = new LinkedList();

list.print();

list.append(10);

list.print();

list.append(20);
list.append(30);

list.print();


list.insert(10, 0)

list.print()
list.insert(20, 0)
list.print()
list.insert(30, 1)
list.print()
list.insert(40, 2)
list.print()
console.log(list.getSize())


list.removeFrom(2)