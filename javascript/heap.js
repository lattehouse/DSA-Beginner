// tree based data structure
// complete binary tree
// min heap   max heap



// min heap:value(parent)<=value(child)

/**
       1
     /   \
    2     3
   / \   / \
  4   5 6   7
 */


// max heap:value(parent)>=value(child)
/**
       90
     /    \
   85      80
  /  \    /  \
 75  60  45  50
/  \
30 40

 */








class Node{
    constructor(value=null,left=null,right=null){
        this.value = value
        this.right = right
        this.left = left
    }



    insert(value){

    }

    delete(value){}
}

const heap = new Node(5)


console.log(JSON.stringify(heap,null,2))