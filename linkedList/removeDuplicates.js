class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);

const removeDuplicate = (head) => {
    let mySet =  new Set();
    let curr = head;
    while(curr){
        mySet.add(curr.value);
        curr = curr.next;
    }
    let senitel = new Node();
    let current = senitel
    for(let value of mySet){
        current.next =new Node(value);
        current = current.next;
    }
    return senitel.next;
}

const t=  removeDuplicate(head);


const printList = (head) => {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join(" → "));
};

printList(t);