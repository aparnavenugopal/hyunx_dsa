class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const evenOdd = (head) => {
    let odd = new Node();
    let s = odd;
    let even = new Node();
    let f = even;
    let count =1;
    let curr= head;
    while(curr){
     
       if(count%2 !== 0){
        s.next = new Node(curr.value);
        s = s.next;
       }else{
        f.next = new Node(curr.value);
        f = f.next;
       }
       curr = curr.next;
       count++;
    }

    s.next = even.next;
    return odd.next;
    
}

const t = evenOdd(head);
const printList = (head) => {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join(" → "));
};

printList(t);
