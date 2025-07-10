class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create nodes
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

const onePassRev = (head, n) => {
    let senitel = new Node();
    senitel.next = head;

    let fast = senitel;
    let slow = senitel;

    for(let i=0; i<=n; i++){
        fast = fast.next;
    }

    while(fast !== null){
        fast=fast.next;
        slow=slow.next;
    }

    slow.next = slow.next.next;
    return senitel.next;
    
}

const t=  onePassRev(head, 5);


const printList = (head) => {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join(" → "));
};

printList(t);