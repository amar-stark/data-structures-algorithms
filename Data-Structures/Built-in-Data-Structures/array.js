const arr = [1, 2, 3, 'A', 'B'];

// for of -> Returns elements of array
// returns elements of array
for (var i of arr) {
    console.log(i);
}

// for in -> Returns element IDs of array
// returns element IDs of array
for (var i in arr) {
    console.log(i);
}

// *** length is the only property of an array and remaining are methods.

// length -> The number of elements in the array.
// returns number of elements in the array.
console.log(arr.length);

// push(item) -> Adds an item to the end of the array.
// returns the length of new array
arr.push(0);
console.log(arr);

// unshift(item) -> Adds an item to the beginning of the array.
// returns the length of new array
arr.unshift(7);
console.log(arr);

// pop() -> Removes and returns the last item from the array.
// returns the removed element and original array is modified.
arr.pop();
console.log(arr);

// shift() -> Removes and returns the first item from the array.
// returns the removed element and original array is modified.
arr.shift();
console.log(arr);

// Access element of array using index
// returns the element we are trying to access and original array is not-modified.
console.log(arr[2]);

// concat(array) -> Merges two or more arrays and returns a new array.
// returns the new array and original array is not-modified.
console.log(arr.concat([9, 8, 7]))

// slice(start, end) -> Extracts a section of the array and end element is not included.
// returns new array and original array is not-modified.
console.log(arr.slice(3, 6))

// join(separator) -> Joins all elements of the array into a string, separated by the specified separator.
// returns new string and original array is not-modified.
console.log(arr.join('-'))

// indexOf(item) -> Returns the first index at which a given element can be found in the array, or -1 if it's not found.
// returns first index of found element and original array is not-modified.
console.log(arr.indexOf('A'))

// lastIndexOf(item) -> Returns the last index at which a given element can be found in the array, or -1 if it's not found.
// returns last index of found element and original array is not-modified.
console.log(arr.lastIndexOf('A'))

// forEach(callback) -> Executes a provided function once for each array element.
// returns


// map(callback) -> Creates a new array with the results of calling a provided function on every element in the array.
// returns


// filter(callback) -> Creates a new array with elements that pass the test implemented by the provided function.
// returns


// reduce(callback, initialValue) -> Applies a function against an accumulator and each element in the array to reduce it to a single value.
// returns


// sort(compareFunction) -> Sorts the elements of an array in place and returns the sorted array. (Optional compare function allows custom sorting logic)
// returns

