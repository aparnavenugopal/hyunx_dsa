class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let n1 = new Node(1);
n1.next = new Node(2);
n1.next.next = new Node(6);
n1.next.next.next = new Node(3);
n1.next.next.next.next = new Node(4);
n1.next.next.next.next.next = new Node(5);
n1.next.next.next.next.next.next = new Node(6);

const remove = (n1, value) => {
    if (!n1) return null;
    while (n1 !== null && n1.value === value) {
        n1 = n1.next;
    }
    let curr = n1;
    while(curr){
        if(curr.next && curr.next.value == value){
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }
    return n1;
}

let t = remove(n1, 6);


const printList = (head) => {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join(" → "));
};

printList(t);
