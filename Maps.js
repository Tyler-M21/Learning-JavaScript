// Create New Map
const fruit =new Map()

// Set Mpa Values
fruit.set("Apples", 3)
fruit.set("Bananas", 5)
fruit.set("Oranges", 6)
console.log(typeof fruit.set)
console.log(fruit)

// Map Methods
const titan = new Map([
    ["Attack", 1]
    ["Jaw", 2]
    ["Colossal", 3]
    ["Cart", 4]
])

// Get method
let ej =titan.get("Attack")
let mg =titan.get("Jaw")

// Map Size
let le= titan.size

// Map Delete
let pf =titan.delete("Cart")

// Map Has
let rb =titan.has("Founder")
console.log(titan)
console.log(ej)
console.log(mg)
console.log(le)
console.log(pf)
console.log(rb)
