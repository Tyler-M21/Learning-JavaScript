// A string  is zero or more characters written inside quotes
let myName="Tyler"

// Single and Double quotes can be used
const lastName="Karuhanga"
const middleName='Kirabo'
console.log(middleName)

// Quotes can be used within strings
let me="I called her 'amazing"
const owner=`He's called "Robert"`
console.log(owner)
// Multiline Strings
let text=`He's called "Sterling Archer"
The world's greatest spy`

let firstClub="Chelsea"
let secondClub="Liverpool"
let finalText=`Support ${firstClub} then ${secondClub}`;
console.log(finalText)

// On Easter Jesus resurrected
const Easter='On Easter, "Jesus resurrected"'
console.log(Easter)

let game="BASKETBALL"
let length=game.length;
console.log(length)

// Applying a Backslash
console.log("He was as \"inevitable\" as they said")
 
let dob="my date of birth is \\6th July, 2006\\"
console.log(dob)

// string interpolation
let animal="cow"
let t=`my favourite animal is ${animal}`
console.log(t)

let school="ISBAT"
let u=`I go to ${20*8}`
console.log(u)
 
let buyingPrice=2500000
let sellingPrice=4500000
let profit=`I made ${sellingPrice-buyingPrice} in profits`
console.log(profit
)
// charAt
let supe="SAITAMA"
console.log(supe.charCodeAt(5))

// string slice method
let fruits="Apple, Banana, Kiwi"
let favFruit=fruits.slice(7, 13)
console.log(favFruit)

// If slice has a negative it means we count from the end of the string
let sport="rugby"
let pos=sport.slice(-4)
console.log(pos)

// to Uppercase
let him="assasin's creed"
let ezio=him.toUpperCase()
console.log(ezio)

// to Lowercase
const president="KENYATTA"
console.log(president.toLocaleLowerCase())

// length
let hero="   Spider-Man"
console.log("The length of this string is " +hero.length)
let k=hero.trim()
console.log(k.length)

// trimstart
let fort="  robin"
console.log(fort.trim())

// trim end
let cod="ghost   "
console.log(cod.trimEnd())

// pad start
let soko="00"
console.log(soko.padStart(3,"5"))

// pad end
let num="25"
console.log(num.padEnd(5,".00"))

// repeat
let zone="Winter is coming, "
console.log(zone.repeat(4))

//replace
let asa="I will go to Nigeria"
console.log(asa.replace("Nigeria", "Ghana"))

//matching characters can be replaced
let more="Doja, Doja, Drake"
console.log(more.replace(/Doja/g, "Drake"))

// replacing is case sensitive, to replace case insesitive use /i
let day="Monday, Tuesday, Friday"
console.log(day.replace(/MONDAY/i, "Wednesday"))

let them="Koboji, Litandi, Christel"
console.log(them.replace("Christel", "Peter"))

//replace all removes all similar strings in text
let sea="I love Marvel movies. I think Marvel movies are cool. Idris Elba acts for Marvel "
console.log(sea.replaceAll("Marvel","DC"))

let cold="The more you eat the more weight you gain. Eat to  be healthy, don't eat just because you can"
console.log(cold.replaceAll(/Eat/g, "Drink"))
console.log(cold.replaceAll(/eat/g, "drink"))