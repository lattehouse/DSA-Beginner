const fruits = ["apple", "mango", "peach", "orange", "banana"];

// Accessing at index:O(1)
console.log(fruits[2])

// Inserting at a position:O(n)
insertAtPosition(fruits, 0, "litchi")
console.log(fruits)

// Deleting from  position:O(n)
deleteFromPosition(fruits, 0)
console.log(fruits)

// Updating at position:O(n)
fruits[0] = "litchi"
console.log(fruits)

// Traversing an array:O(n)
traverse(fruits)

// Complexity O(n)
function insertAtPosition(items, position, item) {
    // Built-in option available in javascript,return items
    // items.splice(position,0,item)

    // Push all the items to the right until position
    for (let counter = items.length; counter > position; counter--) {
        items[counter] = items[counter - 1]
    }

    items[position] = item

    return items
}

// Complexity O(n)
function deleteFromPosition(items, position) {
    // Built-in option available in javascript,return items
    // items.splice(position,1)

    for (let counter = position; counter < items.length; counter++) {
        items[counter] = items[counter + 1]
    }
    // remove last element from array
    items.pop()
    return items
}

// Complexity O(n)
function traverse(array) {
    for (let counter = 0; counter < array.length; counter++) {
        console.log(array[counter])
    }
}
