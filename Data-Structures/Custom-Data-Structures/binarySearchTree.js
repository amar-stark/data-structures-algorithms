class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            // if tree is empty, make the new node as the root
            this.root = newNode;
        } else {
            // else, call another method to add the new node
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        // if node value is more than parent node, append at left (check this recursively)
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) return false;

        if (root.value === value) return true;

        if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    preOrder(root) {
        // read node value, visit left, and then visit right
        if (root) {
            console.log(root.value)
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        // visit left, read node value, and then visit right
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        // visit left, visit right, and then read node value
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // Go levels wise (from root to bottom)
    levelOrder() {
        let queue = [];

        queue.push(this.root);

        while (queue.length) {
            const curr = queue.shift();

            console.log(curr.value);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    min(root) {
        if (!root.left) return root.value;

        return this.min(root.left);
    }

    max(root) {
        if (!root.right) return root.value;

        return this.max(root.right);
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) return root;

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) return null;

            if (!root.left) return root.right;
            if (!root.right) return root.left;

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }

        return root;
    }
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
// bst.insert(7);

console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 11));

console.log('==== Pre-Order ====');
bst.preOrder(bst.root);

console.log('==== In-Order ====');
bst.inOrder(bst.root);

console.log('==== Post-Order ====');
bst.postOrder(bst.root);

console.log('==== Level-Order ====');
bst.levelOrder();

console.log('Min: ', bst.min(bst.root));
console.log('Max: ', bst.max(bst.root));

bst.delete(10);
console.log('==== Level-Order ====');
bst.levelOrder();