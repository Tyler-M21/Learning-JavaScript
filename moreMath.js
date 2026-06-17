// function to find the area of a circle
// A=pi(r)^2
const circleArea=(radius)=>{
    return (Math.PI*(radius)**2)
}
console.log("The area of the circle is " + circleArea(5) + "square meters")
console.log(Math.round(circleArea(5)))

// Find the largest and smallest number in an array
const nb =[23, 44, 56, 78, 34, 45, 21, 35, 56]
let maximum = Math.max(...nb)
console.log(maximum)

const large= (num) =>{
    return (Math.max(...num))
}
let c =[3, 5, 8, 52, 45, 36, 28]
console.log(large(c))

const small = (lit) =>{
    return (Math.min(...lit))
}
let d =[23, 34, 45, 56, 67, 78]
console.log(small(d))

function randomNum(){
    return (Math.random()*100)
}
console.log("My random number is " + randomNum())

// function that finds the luckiest person in the class
const classMates = ["Deborah", "Hazel", "Racheal", "Tyler", "Kalungi"]
console.log(classMates[Math.floor(Math.random()*classMates.length)])

 