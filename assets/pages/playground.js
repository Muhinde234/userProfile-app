let username= "Jane Doe";
const birthYear= 1980;
const currentYear= 2025;
function calculateAge(){
let age = currentYear-birthYear;
console.log(`Hello your name is ${username} and your age is${age}`); 
}

calculateAge();
const calculateBirthYear=() =>{
    let Age= 56;
    let bornYear = currentYear - Age;
    console.log(`You were born in ${bornYear}`);
}
calculateBirthYear()

let personInfo={
    name:"dosta",
    age:20,
    country:"Rwanda",
   
}
console.log(personInfo.age);
console.log(personInfo.name);
console.log(personInfo.country);
//Array destructuring//
let colors= ["green","red","white"];
let [first, second] = colors;
console.log([first, second])

/*let numbers = [10, 20, 30, 40, 50];

let [first, second] = numbers;  // Destructuring the first two elements

console.log([first, second]);  // Output: [10, 20]*/
