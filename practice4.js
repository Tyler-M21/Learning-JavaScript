// const cv = "I am inevitable"
// let gb = /inevitable/i
// cv.search(gb)
// let x = cv.search(gb)
// console.log(x)

// const mn = "My life is my own"
// let gv = /my/gi
// mn.search(gv)
// let yg = mn.search(gv)
// console.log(yg)

// let myPattern = /(Na)(mu)/d
// let names = "Namugongo"
// let fg = names.match(myPattern)
// console.log(fg)

// let df = "The trees are green"
// const pattern = /\bgr/gi
// const mypt = /green$/gi
// const fdc = /^are/gi
// let final = df.match(pattern)
// console.log(final)
// console.log(df.match(mypt))
// console.log(df.match(fdc))

// // write a function that checks for the presence of the name Lukwago
// function check(name) {
//   let jim = /\bLukwago/gi
//   if (name.match(jim)) {
//     return("He was found")
//   }
//   else return ("He wasn't found")
// }
// console.log(check("Lukwago was kidnapped a while back"))

// let txt = "I will go to London next year"
// let pot = /(?<= to)London/
// let fin= txt.match(pot)
// console.log(fin)

// let x = 12345
// let y =x.toString()
// console.log(typeof(y))

// A function to calculate the bill
const bill= [
  {item: "ariel", cost:2000},
  {item: "soda", cost:1500},
  {item: "chaptai", cost:1000}
]
function costs(total){
  let sum = 0
  for(let x of total){
      sum=sum+x.cost
  }
  sum =sum.toLocaleString("en-US", {style:"currency", currency:"USD"})
  return sum
}
console.log(costs(bill))