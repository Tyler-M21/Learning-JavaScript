// Positive or Negative or Zero
let x = -6
if (x > 0) {
    console.log("positive number")
}
else if (x < 0) {
    console.log("negative number")
}
else if (x == 0) {
    console.log("number is zero")
}
// Grading System
let score = 85
if (score = 0 && score <= 60) {
    console.log("F")
}
else if (score = 60 && score <= 69) {
    console.log("D")
}
else if (score = 70 && score <= 79) {
    console.log("C")
}
else if (score = 80 && score <= 89) {
    console.log("B")
}
else if (score = 90 && score <= 100) {
    console.log("A")
}
else {
    console.log("Invalid")
}

for (let counter = 40; counter >= 20; counter--) {
    if (counter == 34) {
        break
    }
    console.log(counter)
}
let currentNumber = 1
while (currentNumber <= 24) {
    if (currentNumber % 2 == 0 && currentNumber >= 10) {
        break
    }
    console.log(currentNumber)
    currentNumber++
}
for (let y = 31; y <= 45; y++) {
    if (y == 35) { continue }
    console.log(y)
}

// student profile
const s1Student = {

    name: {
        firstName: "Tyler",
        surName: "Kazooba",
    },

    age: 13,

    homeLocation: {
        villageName: "Bugolobi",
        district: "Kampala",
    },

    formerSchool: {
        schoolName: "Viva College",
        schoolDistrict: "Jinja",
    },
}
// arrow function to determine whether home district and school district are the same
const dist = (s1Student) => {
    if (district === schoolDistrict) {
        return "Mwaana wakukyaalo"
    }
    else if (district = !schoolDistrict) {
        return "Not from the same district"
    }
}
console.log(dist)
