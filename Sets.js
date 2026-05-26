// A collection of unique values, one value can only occur once in a set, values can be primitive or objects
const letters = new Set(["a", "b", "c", "d", "e"])
console.log(letters)

const numbers = new Set([1, 2, 3, 4, 5, 6])
console.log(numbers)

const letter = new Set()
letter.add("a");
letter.add("b");
letter.add("c");
console.log(letter)

const Letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
Letters.add(a);
Letters.add(b);
Letters.add(c);
console.log(Letters)

// size method
const marvel = new Set(["Iron-Man", "Hulk", "Thor"])
let nd = marvel.size


// list method
let text = "";
for (const x of marvel) {
    text += x;
}

// has method
bro = marvel.has("Black Panther")
console.log(nd)
console.log(text)
console.log(bro)

// Sets logic
const X = new Set("a", "b", "c", "d")
const Y = new Set("c", "d", "e", "f")
const me = X.union(Y)
const you = X.intersection(Y)
const them = X.difference(Y)
const we = X.symmetricDifference(Y)
const sc = X.isSubsetOf(Y)
const mi = X.isSupersetOf(Y)
const li = X.isDisjointFrom(Y)
console.log(me)
console.log(you)
console.log(them)
console.log(we)
console.log(sc)
console.log(mi)
console.log(li)

// weak set
const gh = new WeakSet()
let vc = {
    first: "gift",
    second: "praise",
    third: "peace",
}
gh.add(vc)
let zj = gh.has(vc)
console.log(zj)