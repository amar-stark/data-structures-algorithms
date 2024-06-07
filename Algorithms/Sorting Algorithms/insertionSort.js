// Insertion sort
/*
    * Virtually split the array into a sorted and an unsorted part.
    * Assume that the first element is already sorted and remaining elements are unsorted.
    * Select an unsorted element and compare with all elements in the sorted part (go from left to right).
    * If the elements in the sorted part is greater than the selected element, shift that larger elements towards the right, else proceed.
    * Keep track of index where ur doing shifts and at the end when you find there are no more switches, Insert the selected element at that index.
    * Repeat till all the unsorted elements are placed in the right order.
*/

let arr = [8, 20, -2, 4, -6, 7, 10, -1, 1, 2, 2, -20];

function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {

        let numToInsert = arr[i], lastId;

        for (j = i - 1; j >= 0; j--) {

            if (arr[j] > numToInsert) {
                arr[j + 1] = arr[j];
                lastId = j;
            }
        }

        if (lastId >= 0) arr[lastId] = numToInsert;
    }
}

insertionSort(arr);

console.log(arr);

// Time complexity: O(n^2) because of the nested loop