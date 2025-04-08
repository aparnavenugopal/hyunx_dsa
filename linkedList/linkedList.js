class Node{
   constructor(value){
     this.head = value;
     this.next = null;
   }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next =null;
        this.length--;
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);
    
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    
        this.length++;
        return this;
    }
    shift(){
        if(!this.head) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        if(this.head === null){
            this.tail = null;
        }
        this.length--;
        return temp;
    }
    getFirst(){
        if(!this.head) return undefined;
        return this.head;
    }
    getLast(){
        let temp = this.head;
        if(!temp) return undefined;
        while(temp.next){
            temp = temp.next;
        }
        return temp;
    }
    getElementByIndex(index) {
        if (index < 0 || index >= this.length) return undefined;
      
        let temp = this.head;
        let i = 0;
      
        while (temp) {
          if (i === index) return temp;
          temp = temp.next;
          i++;
        }
      
        return undefined; 
      }
      setValueByIndex(index, value){
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        let i=0;
        while(temp){
            if(index === i){
                temp.head =value;
                return temp;
            }
            temp = temp.next;
            i++;
        }
      
      }
      insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        const newNode = new Node(value);
        const prev = this.getElementByIndex(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }
    size(){
        return this.length;
    }
    clear(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);
myLinkedList.push(50);
myLinkedList.push(60);
myLinkedList.push(70);
myLinkedList.push(3);
myLinkedList.pop();
myLinkedList.unshift(5);
myLinkedList.unshift(1);
myLinkedList.unshift(0);
myLinkedList.shift();
myLinkedList.getFirst();
myLinkedList.getLast();
myLinkedList.getElementByIndex(1);
myLinkedList.setValueByIndex(1, 100);
myLinkedList.insert(2, 200);
console.log(myLinkedList);
console.log(myLinkedList.size());
