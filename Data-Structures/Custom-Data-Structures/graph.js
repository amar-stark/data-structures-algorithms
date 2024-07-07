// Adjacency Matrix of a Graph
const adjacencyMatrix = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]

console.log(adjacencyMatrix[0][1]);

// Adjacency List of a Graph
const adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B'],
}

console.log(adjacencyList['B']);

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) this.addVertex[vertex1];
        if(!this.adjacencyList[vertex2]) this.addVertex[vertex2];

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertext(vertex) {
        if(!this.adjacencyList[vertex]) return;

        for (let adjEdges of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjEdges);
        }

        delete this.adjacencyList[vertex];
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1, vertex2) {
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1));
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

// graph.display();
// console.log(graph.hasEdge('A', 'C'));

// graph.removeEdge('A', 'B');
graph.removeVertext('B');
graph.display();
