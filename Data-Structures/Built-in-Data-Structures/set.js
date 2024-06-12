const set = new Set([1, 2, 3]);

// returns elements of set
for (var i of set) {
    console.log(i);
}

// for in is not-iterable.

// size -> Returns the number of elements in the set.
// returns the number of elements in the set and original set is not-modified.
console.log(set.size);

// has(value) -> check if set has given element
// returns true if set has given element else false and original set is not-modified.
console.log(set.has(3));

// add(value) -> Adds a value to the set.
// returns the new set and original set is modified.
set.add(4);
console.log(set);

// delete(value) -> Removes a value from the set.
// returns true if set has given element else false and original set is modified.
set.delete(2);
console.log(set);

// clear() -> Removes all elements from the set.
// returns undefined and original set is modified.
set.clear();
console.log(set);

// keys() -> Returns an iterator object containing the values in the set.
// and original set is not-modified.
console.log(set.keys());

// values() -> Returns an iterator object containing the values in the set.
// and original set is not-modified.
console.log(set.values());

// entries() -> Returns an iterator object containing [value, value] pairs for each element in the set.
// and original set is not-modified.
console.log(set.entries());