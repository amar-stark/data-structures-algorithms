const map = new Map([['a', 1], ['b', 20]]);

console.log(map);

// returns elements of array
for (var [key, value] of map) {
    console.log(`key: ${key}, value: ${value}`);
}

// for in is not-iterable.

// size: Returns the number of key-value pairs in the map.
// and original map is not-modified.
console.log(map.size);

// has(key): Returns true if the key exists in the map, otherwise false.
// and original map is not-modified.
console.log(map.has('a'));

// set(key, value): Stores a key-value pair in the map.
// returns new map and original map is modified.
map.set('c', 3);
console.log(map);

// delete(key): Removes the key-value pair with the specified key from the map.
// returns true if map has given element else false and original map is modified.
map.delete('b');
console.log(map);

// clear() -> Removes all elements from the map.
// returns undefined and original map is modified.
map.clear();
console.log(map);

// get(key): Returns the value associated with the key, or undefined if the key doesn't exist.
// and original map is not-modified.
console.log(map.get('b'));

// keys() -> Returns an iterator object containing the values in the map.
// and original map is not-modified.
console.log(map.keys());

// values() -> Returns an iterator object containing the values in the map.
// and original map is not-modified.
console.log(map.values());

// entries() -> Returns an iterator object containing [value, value] pairs for each element in the map.
// and original map is not-modified.
console.log(map.entries());