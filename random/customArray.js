class MyArray {
    constructor() { // Fixed typo here
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(number){
        for(let i=0;i<this.length;i++){
            if(i === number){
                return this.data[i];
            }
        }
    }
    pop(){
        if(this.length === 0) return undefined;
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    deleteByIndex(a){
        delete this.data[a];
        this.length--;
        return this.data
    }
}

const myNewArray = new MyArray();
console.log(myNewArray.push("apple")); 
console.log(myNewArray.push("banana"));
console.log(myNewArray.push("orange"));
console.log(myNewArray.push("grapes"));
console.log(myNewArray);
myNewArray.push('pineapple');
console.log(myNewArray.deleteByIndex(2));