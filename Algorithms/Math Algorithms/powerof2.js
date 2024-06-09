// Power of 2

/* 
Problem - Give a positive integer 'n', determine if the number is a power of 2 or not.
An integer is a power of two if there exists an integer 'x' such that 'n' === 2x isPowerOfTwo (1) = true (2º)
isPowerOfTwo(2) = true (2^1)
isPowerOfTwo(8) = true (2^3)
isPowerOfTwo(5) = false

IDEA
-----------
If n is not completely divisible by 2 (%2), its not 2^x
*/


/* === Traditional method === */

function isPowerOfTwo(n) {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }

    return true;
}


console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(1)) // true


// Time complexity: O(n)


/* === Optimised solution === */

function isPowerOfTwoBitWise(n) {
    if (n < 1) return false;

    return (n & (n - 1)) === 0;
}


console.log(isPowerOfTwoBitWise(2)) // true
console.log(isPowerOfTwoBitWise(5)) // false
console.log(isPowerOfTwoBitWise(1)) // true


// Time complexity: O(1)