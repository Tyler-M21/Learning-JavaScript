const students = [
  { name: "Sarah", class: "P7", score: 88 },
  { name: "John", class: "P7", score: 45 },
  { name: "Mary", class: "S1", score: 92 },
  { name: "Peter", class: "S2", score: 67 },
  { name: "James", class: "S3", score: 54 },
  { name: "Anna", class: "S1", score: 76 },
  { name: "David", class: "S4", score: 39 },
  { name: "Grace", class: "S2", score: 81 },
  { name: "Kevin", class: "S3", score: 95 },
  { name: "Ruth", class: "S4", score: 58 }
];

// Use a for loop to print out the names of students
for(let we in students){
    console.log(students[we].name)
}

// use a for loop to see who scored above 80
for(let re of students){
    if (re.score>80){
        console.log(re)
    }
}

// use a for...while loop to count how many students are in the array
let i=0;
let count= 0;
while(i<students.length){
    count++;
    i++;
}
console.log("Number of Students:", count)

// do...while loop that prints the first 5 students
let index= 0;
do{
    console.log(students[index]);
    index++;
}
while(index<5);