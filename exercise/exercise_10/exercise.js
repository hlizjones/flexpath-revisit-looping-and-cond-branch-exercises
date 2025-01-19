// Explain how closures can lead to increased memory usage in JavaScript. 

// Create an example where a closure holds onto a large object in the heap, 
// preventing it from being garbage collected. 

// Show how to modify the code to allow for proper garbage collection.

let addProperty = function () {
let obj = {
    firstName: "hannah",
    lastName: "jones",
    age: 26,
    favFood: "sushi",
}
function addFavBook() {
    obj.favBook = "Throne of Glass"
    return obj
}
addFavBook()
return obj
}

let closure = addProperty()

console.log(closure)

closure = null

console.log(closure)



