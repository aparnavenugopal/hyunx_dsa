class HashTable{
    constructor(size = 20){
        this.keyMap = new Array(size);
    }

    _hashFunction(key){
        let sum = 0;

        const PRIME_NUMBER = 31;

        for(let i =0; i < Math.min(key.length, 100); i++){
            const charCode = key.charCodeAt(i) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
        return sum; 
    }
    set(key, value){
        const index = this._hashFunction(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return this;
    }
    get(key){
        const index = this._hashFunction(key);
        if(!this.keyMap[index]){
            return undefined;
        }
        for(let i = 0; i < this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key){
                return this.keyMap[index][i][1];//value
            }
        }
    }
    getAllKeys(){
        const keys = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j< this.keyMap[i].length; j++){
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }
    getAllValues(){
        const values = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j< this.keyMap[i].length;j++){
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

const hashTable = new HashTable(10);    
hashTable.set("grapes", 10000);
hashTable.set("apples", 54);
hashTable.set("oranges", 2);
console.log(hashTable.get("grapes"));
console.log(hashTable.getAllKeys());
console.log(hashTable.getAllValues());
console.log(hashTable);