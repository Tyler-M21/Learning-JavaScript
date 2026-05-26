const boys =["Sam", "Michael", "Peter", "Noah"]
let closest =boys[3]
console.log(closest)

// number, boolean, string & object
const them =[23, true, "shirt", {size:43, weight:75}]
let choose =them[1]
console.log(choose)

// An Empty array then fill it with indices
const music=[]
music[0]="Heal the world"
music[1]="Human Nature"
music[2]="Last Last"
music[3]="On The Low",
music[4]={records:25, Awards:4, Songs:75}
music[5]=["MJ", "Lionel Ritchie", "Seal", "Burna Boy"]
console.log(music)

// new keyword
const game =new Array("GTA V", "COD", "Fort")
console.log(game)

// Array Methods
// 1. toString
const sons =["Mike", " Jackie", " Jermaine", " Marlon"]
let there = sons.toString()
console.log(there)

// 2. Length
const just = ["Robin ", "Victor ", "Garfield ", "Rachael ", "Kori"]
let leg = just.length
console.log(leg)

// 3. At
const team = ["Bruce ", "Clark ", "Diana ", "Hal"]
let justice = team.at(1)
console.log(justice)

// 4.Pop
const city = ["Kampala ", "Nairobi ", "Lusaka ", "Lagos"]
let bit = city.pop()
console.log(city)
console.log(bit)

// 5. Join
const some = ["eggs ", " fish ", " batteries ", " jeans "]
let trey = some.join("-")
console.log(typeof trey)

// 6. Push
const clothes = ["jacket ", "shoes ", "watch ", "shirt "]
let other = clothes.push("socks")
console.log(clothes)
// console.log(other)

// 7. Shifting(I)
const juice = ["Mango ", "Strawberry ", "Apple"]
let fav = juice.shift()
console.log(juice)
console.log(fav)

// Shifting(II).Unshifting
const drink = ["Coke ", "Mirinda ", "Fanta ", "Sprite "]
let ben = drink.unshift("Novida")
console.log(drink)

// splice
const sold = ["soap", "ghost", "roach"]
let real = sold.splice(0, 1,)
console.log(real)

// Merging Arrays/Concatenating
const animals = ["dogs", "cats", "rabbits "]
const wildAnimals = ["zebras", "lions", "cheetah"]
const reptiles = ["snakes", "lizards"]
const all = animals.concat(wildAnimals, reptiles)
console.log(all)

// Flat
const mt = [2, 3, 4, 5]
let p = mt.flatMap((f)=> f*7)
console.log(p)

const Lt = ["Wash", "Match", "Sing"]
let b = Lt.flatMap((g)=>g+"ing")
console.log(b)

// Includes
const bas = ["PS", "Samsung", "Apple", "XBOX"]
let h = bas.includes("XBOX")
console.log(h)

// Search
const queen = ["drums", "bass", "guitar", "drums"]
let io = queen.indexOf("bass")
console.log(io)
let imp = queen.lastIndexOf("drums")
console.log(imp)

// Find index
const mn = [1, 2, 3, 4, 5, 6, 7]
let nb = mn.find(myFunction)
function myFunction(value, index, array){
    return value<5
}
console.log(nb)