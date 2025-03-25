//step 2 declaring variables 
let username= "Jane Doe";
const birthYear= 1980;
const currentYear= 2025;
// step 3 using template literals
function calculateAge(){
let age = currentYear-birthYear;
console.log(`Hello your name is ${username} and your age is${age}`); 
}
//step 4 arrow function
calculateAge();
const calculateBirthYear=() =>{
    let Age= 56;
    let bornYear = currentYear - Age;
    console.log(`You were born in ${bornYear}`);
}
calculateBirthYear()

//step 5 destructuring
//object destructuring 
let personInfo={
    names:"dosta",
    age:20,
    country:"Rwanda",
   
}
const{names,age,country} = personInfo;
console.log(age);
console.log(names);
console.log(country);
//Array destructuring//
let colors= ["green","red","white"];
let [first, second] = colors;
console.log([first, second])

// step 6 rest and spread operators
//rest operator 
function numbers(...numbers)
{
    console.log(numbers);
}
numbers(1,2,3,4,5)
//spread operator
let arrayOne = [1,2,3,4,5];
let arrayTwo =[2,4,5,6,7];
let combinedArray= [...arrayOne, ...arrayTwo];
console.log(combinedArray);

//step 7 use promises

function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1') 
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json(); 
                })
                .then(data => resolve(data)) 
                .catch(error => reject("Data fetch failed: " + error.message)); 
        }, 1000);
    });
}


fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log("Data fetched successfully:", data))
    .catch(error => console.error(error));