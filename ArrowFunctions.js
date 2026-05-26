const them= (girl, boy) => 
    {
        console.log("I live near "+ girl + " and " + boy)

    }
them("Abigail", "Deroy")

const we=(war, victory)=>{
    console.log(war + " and " + victory + " are Greek gods")
}
we("Kratos", "Nike")

const parents=(mum, dad)=>{
    console.log("My parents are " + mum + " and " + dad)
}
parents("Patricia", "Edward")

const subjects=(first, second, third)=>{
    console.log("I did " + first + ", " + second + " and " + third)
}
subjects("Physics", "Ent", "Math")

const music=(upbeat, smooth, rap)=>{
    console.log("We listen to " + upbeat + ", " + smooth + " and " + rap + " they are all good") 
}
music("Watermelon Sugar", "Sade", "Topia Twins")

const planet=(one, two, three)=>{
    console.log("There is life on " + one + " but there is no life on " + two + " and " + three)
}
planet("Earth", "Mars", "Neptune")

const classMates=(him, her, you)=>{
    console.log("My classmates are " + him + ", " + her + " and " + you)
}
classMates("Olczar", "Christel", "Jara")

const games=(COD, AC , FC)=>{
    console.log("I play " + COD + ", " + AC + " and " + FC)
}
games("Modern Warfare", "AC Valhalla", "FC24")

//before arrow
const hello= function(){
    return "Hello World"
}
console.log (hello())

//after arrow
const bye=()=> "Bye World"
console.log(bye())

//brackets
const sq=(x)=>x*x;
let x=3
console.log(sq(x))

//no brackets
const squ=y=>y*y;
let y=4
console.log(squ(y))

//Assignments
//1.function that takes price and quantity and returns total cost
const price=(total)=>{
    if(total>100){
        return total + (total*0.1)
    }
}
let my=price(550)
console.log(my)

//2.applies salary bonus
const salary=(their)=>{
    if(their>=2000){
        return their+(their*0.15)
    }
    else return their+(their*0.05)
}
let hers=salary(2500)
console.log(hers)

//3.Electricity bill
// const electricityBillCalc=(unitsOfElectricityConsumed)=>{
//     // let firstHundredUnits= units of Electricity Consumed-100
//     let bill=0
//     if(unitsOfElectricityConsumed<=100){
//         bill= unitsOfElectricityConsumed*1
//     }
//     else if(unitsOfElectricityConsumed>=101 && unitsOfElectricityConsumed<=200){
//     let billForFirstHundredUnits=100*1
//     let billForNextHundredUnits=(unitsOfElectricityConsumed-100)*1.5
//     bill=billForFirstHundredUnits+billForNextHundredUnits
// }
// else if(unitsOfElectricityConsumed>=201){
//     let billForFirstHundredUnits=100*1
//     let billForNextHundredUnits=100*1.5
//     let billForThirdHundredUnits=(unitsOfElectricityConsumed-200)*2
//     bill= billForThirdHundredUnits + billForNextHundredUnits + billForThirdHundredUnits
// }
// else return "Invalid"
// }
// mybill=electricityBillCalc(433)
// totalElectricityBill=electricityBillCalc(250)
// console.log("$" + electricityBillCalc)

//4.username generator
const userName=(firstName, lastName)=>{
    console.log("My username is " + firstName + lastName)
}
userName("mar", "ell")

//5. Number Analyzer
const numAnalyse=(div)=>{
    if (div%3==0){
        return "Fizz"
    }
    else if (div%5==0){
        return "Buzz"
    }
    else if (div%5==0 && div%3==0){
        return "FizzBuzz"
    }
    else return div
    }
    let num=numAnalyse(30)
    console.log(num)