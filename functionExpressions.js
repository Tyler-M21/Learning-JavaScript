//Function expression
const we = function (classmates) {
    return ("We were " + classmates)
}
console.log(we("together"))

const add= function(x, y, z){
    return((x/y)*z)
}
console.log(add(15, 5, 10))

// Hoisted Functions
stop("right", "left")

function stop(here, there){
    console.log("Look " + here + " and " + there + " before crossing the road")
}

eat("buns", "doughnuts")

function eat(either, and){
    console.log("I will have " + either + " or " + and + " in the morning")
}
const my=(clothes)=>console.log(jeans)