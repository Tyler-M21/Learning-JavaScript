// Assignment 1. 23/05/2026
let studentMarks = [45, 78, 90, 66, 54, 99, 81];
function read(green) {
    let highest = green[0]
    for (let i = 1; i < green.length; i++) {
        if (highest < green[i]) {
            highest = green[i]
        }
}
console.log(highest)
}
read(studentMarks)

let free = [53, 67, 89, 45, 43, 65, 80,]
read(free)