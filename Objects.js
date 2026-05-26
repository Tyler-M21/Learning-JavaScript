const TV = {
    type: "Hisense",
    size: "55 inches",
    price: "$550"
}
console.log(TV)

const Bianca={
    gender:"girl",
    height:"tall",
    weight:"85kg",
    class:"S5"
}
console.log(Bianca)
// object object
const planet={
    name:"Saturn",
    diameter:"120000km",
    rings:"yes",
}
console.log(planet)

const Job={
    location:"Kololo",
    salary:"$550 per month",
    hours:"40 hours per week",
    leave:"3 weeks paid leave"
}
console.log(Job)

const car={}
car.brand="Nissan";
car.size="Medium";
car.price="$1200"
car.origin="Japan";
console.log(car)

// Create a new object
const pc= new Object({
    model:"Lenovo",
    specs:"8GB RAM",
    size:"7.8 inches",
    warranty:"2 years",
})
console.log(pc)

// Accessing object items using a dot notation
const person={personHeight:"6 feet", personWeight:"95kg", personCountry:"Kenya"}
console.log(person)

console.log(person.personHeight)
console.log(person.personCountry)
console.log(person.personWeight)

// Accessing object items using angle brackets notation
console.log(person["personHeight"])
console.log(person["personWeight"])
console.log(person["personCountry"])

const student={
    Name:"Tyler",
    Class:"S5",
    Birth:"6th July, 2006",
    ID: function(){
        return "I am " + this.Name + " of " + this.Class + " born on " + this.Birth
    }
}
console.log(student.ID())

// EXERCISE
const girl={
    Name:"Petrina",
    Class:"S6",
    Age:"19",
    favouriteSubject:"Physics",
    Introduce: function(){
        return "My name is " + this.Name + " and I am in " + this.Class
    },
    study: function(){
        return "I love studying " + this.favouriteSubject
    },
    growOlder: function(){
      
    }
}
console.log(girl.study())
console.log(girl.Introduce())

// create object, check its data type
const friend={
    Name: "Malcolm",
    height: "6 feet"
}
console.log(typeof friend)
console.log(friend)

let frnd=JSON.stringify(friend)
console.log(frnd)
console.log(typeof frnd)

// Object Constructor
function Praise(salary, age, nationality){
    this.salary= salary;
    this.age= age;
    this.nationality= nationality;
}
const read =new Praise(150, 32, "Tanzanian")
console.log(read.nationality)

// Object Constructor Exercise
//1.
function Music(artiste, label, origin){
    this.myArtiste= artiste;
    this.myRecords= label;
    this.myOrigin= origin;
}
const MTV= new Music("Don Toliver", "Cactus Jack Records", "American")
console.log(MTV.myArtiste)
console.log(MTV.myRecords)
console.log(MTV.myOrigin)

//2.
function School(name, location, type, levels){
    this.hisName= name;
    this.hisLocation= location;
    this.hisType= type;
    this.hisLevels= levels;
}
const educ= new School("SMACK", "Kisubi", "Boarding", "O'level and A' level")
console.log(educ.hisName)
console.log(educ.hisLocation)
console.log(educ.hisType)
console.log(educ.hisLevels)

// 3.
function Phone(type, model, storage, cost){
    this.type= type;
    this.model= model;
    this.storage= storage;
    this.cost= cost;
}
const tele= new Phone("Samsung", "A20", "128GB", "$120")
console.log(tele.type)
console.log(tele.model)
console.log(tele.storage)
console.log(tele.cost)

// 4.
function Country(name, continent, language, currency, independence){
    this.name= name;
    this.continent= continent;
    this.language= language;
    this.currency= currency;
    this.independence= independence;
}
const nation= new Country("Nigeria", "Africa", "English", "Naira", "1960")
console.log(nation.name)
console.log(nation.continent)
console.log(nation.language)
console.log(nation.currency)
console.log(nation.independence)

// Default Value
function Church(name, location, denomination,){
    this.itsName= name;
    this.itsLocation= location;
    this.itsDenomination= "Catholic";
}

const pray= new Church("Christ The King", "Kampala", "Anglican")
console.log(pray)

function Sport(type, numbers){
    this.teamType= type;
    this.teamNumbers= numbers;
    this.teamBestTeam= "South Africa";
}

const play= new Sport("Contact", "15",)
console.log (play)

// A method to an Object Constructor
function dancehall(best, next, other, him ){
    this.best= best;
    this.next= next;
    this.other= other;
    this.him= him;
    this.dancehallArtistes= function(){
        console.log("My dancehall favourites are " + best +", " + next+", " + other+", " +him)
    }
}
const Artistes=new dancehall("Sean Paul", "Vybz Kartel", "Mavado", "Dexta Daps")
Artistes.dancehallArtistes()