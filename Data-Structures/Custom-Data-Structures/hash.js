class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // Should return a number indexfor insertion
    hash(key) {
        let total = 0;

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        total = total % this.size;

        return total;
    }

    set(key, value) {
        const index = this.hash(key);

        // commented because, we will implement array of array concept to avoid collision
        // this.table[index] = value;

        const bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameIndexExist = bucket.find(i => i[0] === key);

            if (sameIndexExist) {
                sameIndexExist[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);

        // commented because, we will implement array of array concept to avoid collision
        // return this.table[index];

        const bucket = this.table[index];

        if (!bucket) return undefined;

        const indexExist = bucket.find(i => i[0] === key);

        return indexExist ? indexExist[1] : undefined;
    }

    remove(key) {
        const index = this.hash(key);

        // commented because, we will implement array of array concept to avoid collision
        // this.table[index] = undefined;

        const bucket = this.table[index];

        if (!bucket) return undefined;

        const indexExist = bucket.find(i => i[0] === key);

        if (indexExist) bucket.splice(bucket.indexOf(indexExist), 1);
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) console.log(i, this.table[i]);
        }
    }
}

const hashTable = new HashTable(50);

hashTable.display();

hashTable.set('name', 'Amar');
hashTable.set('age', 26);
hashTable.set('city', 'Vizianagaram');

hashTable.display();

console.log(hashTable.get('city'));

hashTable.remove('age');

console.log(hashTable.get('age'));

hashTable.set('mane', 'Stark');
hashTable.set('ticy', 'Bangalore');

console.log(hashTable.get('ticy'));

hashTable.remove('mane');

hashTable.display();