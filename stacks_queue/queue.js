class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new node(value);
        this.first = newNode;
        this .last =newNode;
        this.length = 1;
    }
    enqueue(value){
        if(this.length === 0){
            this.first = new node(value);
            this.last = this.first;
        }
        const newNode = new node(value);
        let temp = this.last;
        temp.next = newNode;
        this.last = newNode;
        this.last.next = null;
        this.length++;
        return this;
    }
    dequeue(){
        if(this.length === 0) return null;
        let temp = this.last;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.last = this.last.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    
}

const queue = new Queue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
console.log(queue);