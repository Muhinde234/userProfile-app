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