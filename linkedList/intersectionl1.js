class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//shared part: 8-->4-->5
let intersectNode = new Node(8);
intersectNode.next = new Node(4);
intersectNode.next.next = new Node(5);

//list A: 4-->1-->intersect
let headA = new Node(4);
headA.next = new Node(1);
headA.next.next = intersectNode;

//listB: 5-->6-->1-->intersect
let headB = new Node(5);
headB.next = new Node(6);
headB.next.next = new Node(1);
headB.next.next.next = intersectNode;

const intersection = (headA, headB) => {
    let currA = headA;
    while(currA){
        let currB = headB;
        while(currB){
            if(currA !== currB){
                currB = currB.next;
            }else{
                return currA;
            }
        }
        currA = currA.next;
    }
    return null;
}

const t = intersection(headA, headB);
console.log(t);