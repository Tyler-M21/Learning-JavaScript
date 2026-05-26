// s1 students pay 1m, s2 pay 2m, s3 pay 3m....
// s7-doesn't exist
let learnersClass = "S3"
switch (learnersClass) {
    case "S1":
        console.log("Pays shs.1million school fees")
        break;
    case "S2":
        console.log("Pays shs.2million school fees")
        break;
    case "S3":
        console.log("Pays shs.3million school fees")
        break;
    case "S4":
        console.log("Pays shs.4million school fees")
        break;
    case "S5":
        console.log("Pays shs.5million school fees")
        break;
    case "S6":
        console.log("Pays shs.6million school fees")
        break;
        default:
        console.log("We do not have that class")
}
// null example 1
let position="Striker"
let secondPosition="Winger"
let final= position ?? secondPosition
console.log(final)

// null example 2
let favFood=null
let otherFood="Chapati"
let Food=favFood ?? otherFood
console.log(Food)