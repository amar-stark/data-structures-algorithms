// Binary search
/*
Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

Note: Binary search works only on sorted array. If array is not sorted, we can either sort and then apply binary search or we can use a linear search.

* If the array is empty, return -1 as the element cannot be found.
* If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
* If target is less than the middle element, binary search left half of the array.
* If target is greater than middle element, binary search right half of the array.
*/

arr = [-5, 2, 4, 6, 10];

function binarySearch(t) {
    let leftIndex = 0,
        rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (t === arr[middleIndex]) return middleIndex;

        if (t < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

console.log("Binary Search");
console.log(binarySearch(10)); // 4
console.log(binarySearch(4)); // 2
console.log(binarySearch(20)); // -1

// Time complexity: O(logn)

// Recursive binary search

arr = [-5, 2, 4, 6, 10];

function recursiveBinarySearch(t) {
    return plainSearch(t, 0, arr.length - 1);
}

function plainSearch(t, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (t === arr[middleIndex]) return middleIndex;

    if (t < arr[middleIndex]) return plainSearch(t, leftIndex, middleIndex - 1);

    return plainSearch(t, middleIndex + 1, rightIndex);
}


console.log("Recursive Binary Search");
console.log(recursiveBinarySearch(10)); // 4
console.log(recursiveBinarySearch(4)); // 2
console.log(recursiveBinarySearch(20)); // -1

// Time complexity: O(logn)