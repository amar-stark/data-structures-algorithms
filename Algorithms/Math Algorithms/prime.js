// Prime Number
// A number is called prime if no two small natural numbers product gives the number


/* === Traditional method === */

function isPrime(n) {
    if (n < 2) return false;

    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}


console.log(isPrime(0)) // false
console.log(isPrime(3)) // true
console.log(isPrime(9)) // false


// Time complexity: O(n)


/* === Optimised solution === */

/* 
  Integers larger than the square root do not need to be checked because, whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
 
  n=24, a=4 and b=6
  The square root of 24 is 4.89
  4 is less than 4.89
  a is less than the square root of n
*/

function isPrimeOptimised(n) {
    if (n < 2) return false;

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}


console.log(isPrimeOptimised(0)) // false
console.log(isPrimeOptimised(3)) // true
console.log(isPrimeOptimised(9)) // false


// Time complexity: O(sqrt(n))