function robotWalks(){
    console.log("The Robot is Walking")
}

function robotSpeaks(){
    console.log("The Robot is Speaking")
}

function robotSterilises(){
    console.log("The Robot is sterilising the doctor's tools")
}

function robotWorks(){
    console.log("The Robot does work for the surgeon")
}

function robotTemperature(){
    console.log("The robot is taking a patient's temperature")
}

function alignrobot(){
 robotSpeaks()
 robotWalks()
 robotWorks()
 robotTemperature()
 robotSterilises()
}

alignrobot()

// functions that return data
function watchingTV(){
    return "It is relaxing to watch TV"
}
console.log(watchingTV())

function sports(){
    return "It is good to engage in sports"
}
console.log(sports())

function readBooks(){
    return "Your vocabulary improves when you read books"
}
console.log(readBooks())

function eatHealthy(){
    return "Eat healthy to prevent sickness"
}
console.log(eatHealthy())