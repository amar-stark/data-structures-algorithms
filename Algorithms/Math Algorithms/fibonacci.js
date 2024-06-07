// Fibonacci Sequence
// Fibonacci is a sequence where each number is the sum of its two preceding numbers

/* === Traditional method === */

function fibonacci(n) {
    let fibArray = [0, 1];

    if (n === 0) return value;
    if (n === 1) return [0];
    if (n === 2) return fibArray;

    for (var i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray;
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

// Time complexity: O(n)


/* === Recursion method === */
// Logic => recursion(n) = recursion(n-1) + recursion(n-2)

function recursiveFibonacci(n) {
    if (n < 2) return n;

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(7)); // 13

// Time complexity: O(2^n)
// recursion is not recommened for Fibonacci because of the exponential time complexity  