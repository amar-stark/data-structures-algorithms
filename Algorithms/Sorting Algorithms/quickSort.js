/* 
Identify the pivot element in the array
    • Pick first element as pivot
    • Pick last element as pivot (Our approach)
    • Pick a random element as pivot
    • Pick median as pivot
Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array
Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition 
*/

let arr = [8, 20, -2, 4, -6, 7, 10, -1, 1, -20];


function quickSort(arr) {
    if (arr.length === 1) return arr;

    let pivotElement = arr[arr.length - 1], leftArray = [], rightArray = [];
    
    for (var i = 0; i < arr.length - 1; i++) {
        
        if (arr[i] < pivotElement) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }

    return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
}

console.log(quickSort(arr));

// Time complexity: O(n^2) because of the nested loop - Worst
// Time complexity: O(nlogn) because we have 1 loop O(n) and recursion log(n) - Average