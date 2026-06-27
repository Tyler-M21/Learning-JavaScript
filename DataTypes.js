// // this data type is of type string
// const word="I am nineteen years old"
// // this data type is of type number
// let x=9
// console.log(word)
// console.log(x)
// // the n at the end keeps the original number
// let y=1234567892345678978997n
// console.log(y)
// // BigInt is for maintaining a huge number but with a slight modification
// let m=BigInt(1616616166889654345690)
// console.log(m)
// // Boolean
// let p= true;
// let q= false;
// console.log(p)
// console.log(q)
// // Object
// const grandmother={firstName:"Madeline", lastName:"Idro", age:97, deceased:true}
// console.log(grandmother)

// // Assignments: toString() tolocaleString()

// TO STRING()
// Array to String
// Returns a comma separated string
// let you = ["Victor", " Junior", " Joshua", " Isaiah"]
// let v = you.toString()
// console.log(v)

// // Date to String
// // Returns a human-readable date and time string
// let today = new Date("2024-April-20 07:25")
// let now = today.toString()
// console.log(now)

// // Number to String
// // Returns the number as a string
// let we = 1738
// let fet = we.toString()
// console.log(fet)

// // Function to String
// // Returns the source code of the function as a string
// function agi() {
//     console.log("I love Fullmetal Alchemist: Brotherhood")
// }
// agi()
// let bc = agi.toString()
// console.log(bc)

// // Object to String
// // Returns [object Object]
// const anime = {
//     First: "One Punch Man",
//     Emotional: "Tokyo Revengers",
//     Favourite: "Attack on Titan",
//     Weird: "Jojo's Bizarre Adventures"
// }
// console.log(anime.toString())

// To LocaleString()
let number = 1234567.89
console.log(number.toLocaleString())

// can be used with a language of choice
let UK = 3456789
console.log(UK.toLocaleString("en-US"))

// to localeString() can convert numbers to currency and percentages
let price = 200000
let usd = price.toLocaleString("en-US", {style:"currency", currency:"USD"})
console.log(usd)

let euro = price.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
console.log(euro)

let gui = 0.85
let pass =gui.toLocaleString("en-UK", {style:"percent"})
console.log(pass)

// to localeString() can be used to control the number of decimal places
let uce = 33.45634
let cvg =uce.toLocaleString("en-UK", {maximumFractionDigits: 2})
console.log(cvg)

// Dates can be formatted with toLocaleString()
let date = new Date()
let text = date.toLocaleString("en-UK")
console.group(text)