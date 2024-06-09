/* 
In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted A×B, is the set of all ordered pairs (a, b) where a is in A and b is in B
const A = [1, 2]
const B = [3, 4]
AxB = [ [1, 3], [1, 4], [2, 3], [2, 4]] 
*/

function cartesianProduct(arr1, arr2) {
    let cartesianProductArray = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            cartesianProductArray.push([arr1[i], arr2[j]])
        }
    }

    return cartesianProductArray;
}

const a = [1, 2]
const b = [3, 4]

console.log(cartesianProduct(a, b))

// Time complexity: O(mn)