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
function numbers(...numbers)
{
    console.log(numbers);
}
numbers(1,2,3,4,5)

let arrayOne = [1,2,3,4,5];
let arrayTwo =[2,4,5,6,7];
let combinedArray= [...arrayOne, ...arrayTwo];
console.log(combinedArray);