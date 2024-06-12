const obj = {
    name: 'Amar',
    age: 26,
    height: 5.9,
    bio: function () {
        console.log(this.name);
    }
};

// Access properties using . notation
// returns value of the property or undefined and original object is not-modified.
console.log(obj.name);

// Access properties using [] notation
// returns value of the property or undefined and original object is not-modified.
console.log(obj['age']);

// Add properties using . notation
// returns value we are assigning and original object is modified.
obj.city = 'Vizianagaram';

// Add properties using [] notation
// returns value we are assigning and original object is modified.
obj['state'] = 'Andhra Pradesh';

console.log(obj);

// delete -> Deletes a property from an object.
// returns true always and original object is modified.
delete obj.age;

// print all object keys
// returns keys of the object or empty array and original object is not-modified.
console.log(Object.keys(obj));

// print all object values
// returns values of the object or empty array and original object is not-modified.
console.log(Object.values(obj));

// print all object entries
// returns entries of the object or empty array and original object is not-modified.
console.log(Object.entries(obj));

// Object.assign(target, ...sources) -> Copies all enumerable own properties from one or more source objects to a target object.
// returns new object and original object is modified.
Object.assign(obj, { 'ax': 1 });