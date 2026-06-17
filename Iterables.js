const me = "Tyl3r"
for (const y of me) {
    console.log(y)
}

const boys = ["Josh", "Jona", "Wesley"]
for (let n of boys) {
    console.log(n)
}

const mod = [1, 2, 3, 4, 5, 6]
let currentTotal = 0
for (let x of mod) {
    currentTotal = currentTotal + x
}
console.log(currentTotal)

let smallNo = mod[0]
for (let u of mod) {
    if (u < smallNo) {
        smallNo = u
    }
}
console.log(smallNo)

// biggest number
let bigNo = mod[0]
for (let j of mod) {
    if (j > bigNo) {
        bigNo = j
    }
}
console.log(bigNo)

// Longest string
let jean = ["Jacobson", "Annie", "Christian", "Elijah"]
let longString = ""
for (let p of jean){
    console.log(longString.length)
    if (p.length > longString.length) {
        longString = p
    }
}

// 8 strings in an array, find the shortest string
let x = ["Castle", "Bell", "Nile", "James", "Barry", "Megan", "Messi", "Ronaldo"]
let shortString = x[0]
for (let e of x){
    console.log(shortString.length)
    if (e.length < shortString.length){
        shortString = e
    }
}
console.log(shortString)
