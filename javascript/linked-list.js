// Node containing the data anf reference to next node
class Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

// Class to store our data structure
class LinkedList {
    constructor() {
        this.data = null
        this.next = null
    }

    // Complexity: O(1)
    prepend(value) {
        const newNode = new Node(value, this.head)
        this.head = newNode
        this.tail = this.tail ? this.tail : newNode
    }

    // Complexity: O(1)
    append(value) {
        const newNode = new Node(value);
        // if the linkedlist is empty
        if (!this.head) {
            this.head = newNode
            this.tail = newNode

            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    // O(n)
    traverse() {
        let curNode = this.head
        while (curNode) {
            console.log(curNode.data)
            curNode = curNode.next
        }
    }

    //O(n)
    find(value) {
        let curNode = this.head

        while(curNode){
            if(curNode.data === value){
                return curNode
            }
            curNode = curNode.next
        }

        return null
    }

    // O(1)
    deleteHead() {
        if (!this.head) {
            return
        }
        if (this.head.next) {
            this.head = this.head.next
        }else{
            this.head = null
            this.tail = null
        }
    }

    toArray() {
        const items = []

        let curNode = this.head
        while (curNode) {
            items.push(curNode.data)
            curNode = curNode.next
        }

        return items
    }
}


const list = new LinkedList();

list.append(4)
list.append(6)
list.append(2)

list.prepend(1)

console.log(list.toArray())

list.find(6)
list.deleteHead()

console.log(list.toArray())

