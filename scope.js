// Global Variable
let country="Uganda"

function district(){
    console.log(country)
}
district()

// Function scope variable
function news(){
    let town="Mbale"
    console.log(town)
}
news()
// ref error means the variable isn't seen
// console.log(town)
// news()

function hard(){
    let we=tennis
}
console.log(we)
hard()