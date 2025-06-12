class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const getHeigth = (root) => {
    if(root === null) return 0;
    const leftHeigth = getHeigth(root.left);
    const rigthHeigth =  getHeigth(root.right);

    return 1+Math.max(leftHeigth, rigthHeigth);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.right = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);
root.right.right.right = new Node(7);

console.log(getHeigth(root)); 