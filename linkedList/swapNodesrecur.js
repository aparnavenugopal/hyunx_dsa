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

const swapNodesrecur = (head) => {
    let index =1;
    let prev = head;
    let curr = head;
    let temp = curr.next;
    while(curr){
        if(index%2 == 0){
            curr.next = prev;
            prev.next = temp;
        }
        curr = curr.next.next;
        temp = temp.next;
        prev =prev.next;
    }
}