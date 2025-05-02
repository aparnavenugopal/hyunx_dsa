class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
       while(true){
        if(newNode.value === currentNode.value){
            return undefined;
        }
        if(newNode.value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = newNode;
                return this;
            }
            currentNode = currentNode.left;
        }else{
            if(currentNode.right === null){
                currentNode.right = newNode;
                return this;
            }
            currentNode = currentNode.right;
        }
       }
    }
    includes(value){
        if(this.root == null) return undefined;
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if(value >  currentNode.value){
                currentNode = currentNode.right;
            }else if(value === currentNode.value){
                return true;
            }   
        }
        return false;
    }
    bfs(){
        let current = this.root;
        let queue = [];
        let data  = [];
        queue.push(current);
        while(queue.length){
            current = queue.shift();
            data.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return data;
    }
    dfsPreOrder(node  =this.root, data = []){
        if(node == null) return data;
        data.push(node.value);
        if(node.left) this.dfsPreOrder(node.left, data);
        if(node.right) this.dfsPreOrder(node.right, data);
        return data;
    }
    dfsPostOrder(node = this.root, data = []){
        if(node == null) return data;
        if(node.left) this.dfsPostOrder(node.left, data);
        if(node.right) this.dfsPostOrder(node.right, data);
        data.push(node.value);
        return data;
    }
    dfsInOrder(node =this.root , data = []){
        if(node == null) return data;
        if(node.left) this.dfsPostOrder(node.left, data);
        data.push(node.value);
        if(node.right) this.dfsPostOrder(node.right, data);
        return data;
    }
}

const tree = new BST();
tree.insert(10);  
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);
tree.insert(17);
console.log(tree.includes(10));
console.log(tree);
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());