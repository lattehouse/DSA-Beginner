// binary tree
// 

// binary search tree
// nodes are sorted left<parent<right
// balanced or unbalanced







// INORDER:left->root->right
// PREORDER:root->let->right
// POSTORDER:left->right->root

class Node{
    constructor(value=null,left=null,right=null){
        this.value = value
        this.right = right
        this.left = left
    }



    insert(value){

    }

    contains(value){

    }

    printInOrder(){}

    printPreOrder(){}

    printPostOrder(){}
}

const tree = new Node(5)


console.log(JSON.stringify(tree,null,2))