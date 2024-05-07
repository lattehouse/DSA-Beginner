// binary tree
// 

// binary search tree
// nodes are sorted left<parent<right
// balanced or unbalanced


// full binary tree 
// All nodes of the binary tree have 0 childre or 2 children
/**
       1
     /   \
    2     3
   / \   / \
  4   5 6   7
 */

// complate binary tree
// All levels of the tree are filled except last level which may be filled from the left
/**
       1
     /   \
    2     3
   / \   /
  4   5 6
 /
7
 */




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