// Function to calculate my age
function subtract(birthYear){
    return 2026-birthYear;
}
let age=subtract(2006)
console.log(age)

let deborahAge=subtract(2003)
console.log(deborahAge)

let hazelAge=subtract(2005)
console.log(hazelAge)

// function to square a number
function square(sqNumber){
    return sqNumber*sqNumber
}

let number=square(5)
console.log(number)

let newNumber=square(64)
console.log(newNumber)

//Convert from Farenheit to Celsius
function toCelsius(Farenheit){
return (5/9)*(Farenheit-32)
}
let value=toCelsius(100.04)
console.log(value) 

// Using if conditions in functions
function checkAge(AGE){
    if (AGE<18){
        return "Too Young"
    }
   else  return "Access Granted"
}
let me=checkAge(25)
console.log(me)

// If a person weighs more than 500lbs, they are obese
function checkWeight(Pound){
    if (Pound>500){
    return (0.454*Pound)}
    else return "Person is underweight"
}
let her=checkWeight(550)
console.log(her)

// If a student has 50% or higher, passed. If a student has below 50%, failed.
function studentGrade(Marks){
if (Marks>=50){
    return "PASSED"}
    else return "FAILED"
}
let Koboji=studentGrade(98)
console.log(Koboji)

// Airtime Bonus
function ATbonus(Airtime){
    if(Airtime>=10000){
        return Airtime+1000;
    }
    else return "No Bonus"
}
let mine=ATbonus(20000)
console.log(mine)

// Shop discount 
function calcDiscount(Total){
    if(Total>=50000){
        return Total-(Total*0.1)
    }
    else return "No Discount"
}

let Damian=calcDiscount(15000)
console.log(Damian)

// Group people by age
function input(Them){
    if (Them<=12){
        return "Child"
    }
    if (Them<=19){
        return "Teen"
    }
    if (Them>=20){
        return "Adult"
    }
    else return "invalid"
}

let Laker=input(20)
console.log(Laker)
let Tyler=input(19)
console.log(Tyler)
let Mark=input(5)
console.log(Mark)

//Arrow function that prints the larger number of two numbers
const sizeNum=(a, b)=>{
    if(typeof a != "number" && typeof b != "number"){
        return "Not a Number"
    }
    else if(a>b){
        return a + " is greater than " + b
    }
    else if(b>a){
        return b + " is greater than " + a
    }
    else if(a==b){
        return a + " is equal to " + b
    }
    else return "invalid"
}
let mesh=sizeNum(10, 20)
console.log(mesh)

console.log(sizeNum(20, 20))

// //an arrow function that checks 3 numbers if they're even, 
// if they are not even, it subracts them one from the other.
const checkThree=(x, y, z)=>{
    if(x%2==0 && y%2==0 && z%2==0){
     return x + y + z
}
else if(x%2 !=0 && y%2 !=0 && z%2 !=0){
    return x-y-z
}
else if (typeof x!= "number" && typeof y != "number" && typeof z != "number"){
    return "Put a Number"
}
else return "Invalid"
}
let them=checkThree("me", "her", "us")
console.log(them)