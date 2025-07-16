class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let headA = new Node(2);
headA.next = new Node(4);
headA.next.next = new Node(3);

let headB = new Node(5);
headB.next = new Node(6);
headB.next.next = new Node(4);

const add = (headA, headB) =>{
    let arr1 = [];
    let arr2 = [];
    let currA = headA;
    let currB = headB;
    while(currA  || currB){
        if(currA){
            arr1.push(currA.value);
            currA = currA.next;
        }
        if(currB){
            arr2.push(currB.value);
            currB = currB.next;
        }
    }
   let num1 = Number(arr1.join('')); 
   let num2 = Number(arr2.join(''));
   let result = num1 + num2; 
   let reversedStr = result.toString().split('').reverse().join('');
   let sentinel = new Node();
   let curr = sentinel;
   for(let i=0;i<reversedStr.length;i++){
      curr.next = new Node(Number(reversedStr[i]));
      curr = curr.next;
   }
   return r=sentinel.next;
}

const t = add(headA, headB);
const printList = (r) => {
    let result = [];
    while (r) {
        result.push(r.value);
        r = r.next;
    }
    console.log(result.join(" → "));
};

printList(t);