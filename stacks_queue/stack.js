class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.bottom = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);
        let temp =  this.top;
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
           this.top = newNode;
           this.top.next = temp;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return null;
    
        let temp = this.top;
    
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
            temp.next = null;
        }
    
        this.length--;
        return temp; 
    }
    min(){
        if(this.length === 0) return null;
        let current = this.top;
        let min = this.top.value;
        while(current){
            if(current.value < min){
                min = current.value;
            }
            current = current.next;
        }
        return min;
    }
}

let theStack = new Stack(10);
theStack.push(20);
theStack.push(30);
theStack.push(40);
theStack.push(50);
console.log(theStack.min());
console.log(theStack);