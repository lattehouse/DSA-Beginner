class Stack{
    constructor(){
        // we can also use linked list here
        this.items =[]
    }

    push(item){
        this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }

    size(){
        return this.items.length
    }

    peek(){
        return this.items[this.items.length-1]
    }
}


const stack = new Stack()

stack.push(4)
stack.push(2)
stack.push(5)

console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())