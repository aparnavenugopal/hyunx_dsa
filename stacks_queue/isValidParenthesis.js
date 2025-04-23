class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StringStack{
    constructor(str){
        this.top = null;
        for(let i =0; i<str.length; i++){
            this.push(str[i]);
        }
    }
    push(char){
        const newNode = new Node(char);
        newNode.next = this.top;
        this.top = newNode;
    }
    print() {
        let current = this.top;
        while (current) {
          console.log(current.value); 
          current = current.next;
        }
      }
    }

const stack = new StringStack("(){}[]");
stack.print(); 

