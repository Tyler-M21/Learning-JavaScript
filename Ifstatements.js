// height greater than 5 is a tall man
let height = 6
if (height > 5) {
    console.log("he is a tall man")
}
// height above 60 qualifies for the NBA
let tall = 75
let location = "USA"
if (tall > 60 && location == "USA") {
    console.log("qualifies for the NBA")
}

// doesn't go to work or steals money, he's a thief
let stealsmoney = true
let abscondedfromwork = true
if (stealsmoney == true && abscondedfromwork == true) {
    console.log("he is a thief")
}
let age = 30
if (age > 25) {
    console.log("can enter the club")
}
else {
    console.log("cannot enter the club")
}
let years = 25
let ownsCar = true
if (years >= 18 && ownsCar == true) {
    console.log("can drive on the highway")
}
else {
    console.log("cannot drive on the highway")
}
// Grading System
let mathResults = 100
if (mathResults == 0 && mathResults <= 20) {
    console.log("F")
}
else if (mathResults > 21 && mathResults <= 40) {
    console.log("E")
}
else if (mathResults > 41 && mathResults <= 50) {
    console.log("D")
}
else if (mathResults > 51 && mathResults <= 70) {
    console.log("C")
}
else if (mathResults > 71 && mathResults <= 85) {
    console.log("B")
}
else if (mathResults > 86 && mathResults <= 100) {
    console.log("A")
}
else {
    console.log("Invalid")
}
// if score>55, she has passed, else she has failed
let score = 67
let myAcademics = (score > 55) ? "Passed" : "Failed";
console.log(myAcademics)
// if a number %2 is = 0, that number is even, else it is odd
let number = 35
let point = (number % 2 == 0) ? "Even" : "Odd"
console.log(point)
// perogram that compares two numbers and prints the larger number