// Factorial of a number
// Factorial is the product of all integers less than or equal to n.

/* === Traditional method === */

function factorial(n) {
    if (n < 2) return 1;

    let factorial = 1;

    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

console.log(factorial(0)); // 1
console.log(factorial(3)); // 6
console.log(factorial(7)); // 5040

// Time complexity: O(n)

/* === Recursion method === */
// Logic => n!= n * (n-1)!

function recursionFactorial(n) {
    if (n < 2) return 1;

    return n * recursionFactorial(n - 1);
}

console.log(recursionFactorial(0)); // 1
console.log(recursionFactorial(3)); // 6
console.log(recursionFactorial(7)); // 5040

// Time complexity: O(n)
// best case complexity