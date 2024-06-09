/* 
Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)
Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted 
*/

let arr = [8, 20, -2, 4, -6, 7, 10, -1, 1, -20];

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    let midIndex = Math.floor(arr.length / 2),
        leftArray = arr.slice(0, midIndex),
        rightArray = arr.slice(midIndex);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    let sortedArray = []

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rightArray.shift())
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort(arr));

// Time complexity: O(nlogn) because we have 1 loop O(n) and recursion log(n)