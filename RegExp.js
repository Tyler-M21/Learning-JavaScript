let text = "I WILL eat today"
let k = text.match(/WILL/i)
console.log(k)

let z = text.search(/eat/i)
console.log(z)

let w = "Visit Microsoft"
let n = w.replace(/Microsoft/i, "W3Schools")
console.log(n)

let re = "benz, carl, krista, marx"
let mn = re.match(/benz|krista/g)
console.log(mn)

let mine = "I am Kenyan"
let de = /am|Kenyan/g
let sa = mine.match(de)
console.log(sa)

// create a function which checks if a certain word is present in a string; if the string is found, "word found", if not, "word not found"
function wordCheck(data ,checkFor) {
    const a = new RegExp(checkFor, "gi");
    let b = data.match(a)
    if (b == null) {
        console.log("word not found")
    }
    else {
        console.log("word found")
    }
}
let sentence = "I was there yesterday with her"
console.log(wordCheck(sentence, "her"))

let cv = "I have 20 schools"

const digiPattern = /\d/g

let cx = cv.match(digiPattern)
console.log(cx)

let rt = "on the way to my 3 cars"
const ptrn =/\w/g
let fr = rt.match(ptrn)
console.log(fr)