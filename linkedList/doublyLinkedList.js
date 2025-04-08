class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail =  newNode;
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        if(this.length === 1){
            const temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        let temp = this.tail;
        this.tail =  this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length --;
        return temp;
    }
    unshift(value){
        const newNode = new Node(value);
        if (!this.head) {
           this.head = this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
          this.length++;
          return this;
        }
    }
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
      
        if (this.head === this.tail) {
          this.head = this.tail = null;
        } else {
          this.head = temp.next;
          this.head.prev = null;
          temp.next = null;
        }
        this.length--;
        return temp;
    }
}

doubleLinkedList = new DoublyLinkedList(10);
doubleLinkedList.push(20);
doubleLinkedList.push(30);
doubleLinkedList.push(40);
doubleLinkedList.push(50);
doubleLinkedList.pop();
doubleLinkedList.unshift(5);
doubleLinkedList.unshift(1);
doubleLinkedList.shift();
doubleLinkedList.shift();
console.log(doubleLinkedList);
