class Node {
    constructor(value, next= null){
        this.value = value;
        this.next = null;
    }
}

const n1 = new Node(1);
n1.next = new Node(2);
n1.next.next = new Node(3);
n1.next.next.next = new Node(3);
n1.next.next.next.next = new Node(2);
// n1.next.next.next.next.next = new Node(1);

const isPlaindrome = (head) => {
    const values = [];
    let curr = head;
    while(curr){
      values.push(curr.value);
      curr = curr.next;
    }
    let i=0;
    let j=values.length-1;
    while(i<j){
        if(values[i] !== values[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}


console.log(isPlaindrome(n1)); 