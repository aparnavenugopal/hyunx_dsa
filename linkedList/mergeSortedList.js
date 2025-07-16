class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let headA = new Node(1);
headA.next = new Node(3);
headA.next.next = new Node(3);
headA.next.next.next = new Node(4);

let headB = new Node(2);
headB.next = new Node(2);
headB.next.next = new Node(4);
headB.next.next.next = new Node(5);

const mergeList = (headA, headB) => {
    if(!headA && !headB) return ;

    let senitel = new Node();
    let ans = senitel;
    let ansHead = ans;
    let l1 = headA;
    let l2 = headB;

    while (l1 || l2) {
        let val1 = l1 ? l1.value : Infinity;
        let val2 = l2 ? l2.value : Infinity;

        if (val1 < val2) {
            ans.next = new Node(val1);
            l1 = l1.next;
            ans = ans.next;
        } else if (val1 > val2) {
            ans.next = new Node(val2);
            l2 = l2.next;
            ans = ans.next;
        } else if (val1 === val2) {
            ans.next = new Node(val1);
            ans.next.next = new Node(val2);
            l1 = l1.next;
            l2 = l2.next;
            ans = ans.next.next;
        }
    }

    return ansHead.next;
};

const t = mergeList(headA, headB);
const printList = (r) => {
    let result = [];
    while (r) {
        result.push(r.value);
        r = r.next;
    }
    console.log(result.join(" → "));
};

printList(t);