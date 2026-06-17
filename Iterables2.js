// Iterating a string with a for of loop
let m = "Churches"
for(let k of m){
    console.log(k)
}

// for in loop
for(let e in m){
    console.log(e)
}

// Iterating an array with for in and for of
const n = ["snow", "sand", "rain", "sun"]
for(let r of n){
    console.log(r)
}

for(let y in n){
    console.log(y)
}

// Iterating a set
const op = new Set("goku", "jiren", "majin", "gohan")
for(let f of op){
    console.log(f)
}

for(let b in op){
    console.log(b)
}

const pupils = [
    {name: "ruth", age: 10, sst: 60, maths: 90, english: 75, sci: 89},
    {name: "phiona", age: 12, sst: 59, maths: 87, english: 70, sci: 81},
    {name: "Rachael", age: 9, sst: 84, maths: 61, english: 40, sci: 92},
    {name: "Rose", age: 13, sst: 60, maths: 63, english: 76, sci: 98},
    {name: "florence", age: 8, sst: 83, maths: 95, english: 38, sci: 88},
]

// Determining the Average
const withAverage= []
for(let x of pupils){
    let pupilAverage = (x.sst + x.maths + x.english + x.maths)/4
    console.log(x.name, pupilAverage)


// Assigning a new attribute to the object
x.average = pupilAverage
console.log(x)
withAverage.push(x)
console.log(withAverage)
}