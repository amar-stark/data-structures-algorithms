// Problem - Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Linear search

let arr = [-5, 2, 10, 4, 6];

function linearSearch(t) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === t) return i;
    }

    return -1;
}

console.log("Linear Search");
console.log(linearSearch(-5)); // 0
console.log(linearSearch(10)); // 2
console.log(linearSearch(4)); // 3
console.log(linearSearch(24)); // -1

// Time complexity: O(n)