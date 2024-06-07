// Bubble sort
// Poor sorting technique
/*
* Compare adjacent elements in the array and swap the positions if they are not in the intended order
* Repeat the instruction as you step through each element in the array
* Once you step through the whole array with no swaps, the array is sorted
*/

function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i] + arr[i + 1]
                arr[i + 1] = arr[i] - arr[i + 1]
                arr[i] = arr[i] - arr[i + 1]
                swapped = true;
            }
        }
    } while (swapped)

}

let arr = [8, 20, -2, 4, -6, 7, 10, -1];
bubbleSort(arr)
console.log(arr);

// Time complexity: O(n^2) because of the nested loop