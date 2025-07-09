class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create nodes
let head = new Node(1);
head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

const removenthnode = (head, n) => {
    let count =0;
    let curr=head;
    while(curr){
        count++;
        curr= curr.next;
    }

    let senitel = new Node();
    senitel.next = head;
    let prev = senitel;
    let l=0;
    while(prev && prev.next){
        l++;
        if(l == count +1-n){
           prev.next = prev.next.next; 
        }
        prev = prev.next;
    }
    return senitel.next;
}

const t=  removenthnode(head, 1);


const printList = (head) => {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join(" → "));
};

printList(t);
