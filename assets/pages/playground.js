// Step 2: Declaring variables
let username = "delice";
const birthYear = 1980;
const currentYear = 2025;

// Step 3: Using template literals
function calculateAge() {
    let age = currentYear - birthYear;
    console.log(`Hello your name is ${username} and your age is ${age}`);
 
}

// Step 4: Arrow function
calculateAge();

const calculateBirthYear = () => {
    let Age = 56;
    let bornYear = currentYear - Age;
    console.log(`You were born in ${bornYear}`);
    
}
calculateBirthYear();

// Step 5: Destructuring
// Object destructuring
let personInfo = {
    names: "dosta",
    age: 20,
    country: "Rwanda",
};

const { names: personName, age: personAge, country: personCountry } = personInfo;


console.log(personAge);
console.log(personName);
console.log(personCountry);

// Array destructuring
let colors = ["green", "red", "white"];
let [first, second] = colors;
console.log([first, second]);

// Step 6: Rest and spread operators
// Rest operator
function numbers(...nums) {
    console.log(nums);
}
numbers(1, 2, 3, 4, 5);

// Spread operator
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = [2, 4, 5, 6, 7];
let combinedArray = [...arrayOne, ...arrayTwo];
console.log(combinedArray);

// Step 7: Updated promise with getUsers()
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% chance of success

            if (success) {
                resolve([
                    { username: 'dosta', email: 'dosta@test.com' },
                    { username: 'delice', email: 'delice@test.com' },
                ]);
            } else {
                reject('Error: Failed to fetch users');
            }
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log('Users:', users);
    const loadingSpinner = document.getElementById('loadingSpinner');
    const dataDisplay = document.getElementById('dataDisplay');
    
    loadingSpinner.style.display = 'none';
    dataDisplay.style.display = 'block';
    dataDisplay.innerHTML = `
        <h3>Fetched Users:</h3>
        <div class="user-list">
            ${users.map(user => `
                <div class="user-card">
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function onRejected(error) {
    console.error('Error:', error);
    const loadingSpinner = document.getElementById('loadingSpinner');
    const dataDisplay = document.getElementById('dataDisplay');
    
    loadingSpinner.style.display = 'none';
    dataDisplay.style.display = 'block';
    dataDisplay.innerHTML = `<p class="error">${error}</p>`;
}

document.getElementById('fetchDataBtn').addEventListener('click', () => {
    const loadingSpinner = document.getElementById('loadingSpinner');
    const dataDisplay = document.getElementById('dataDisplay');
    
    loadingSpinner.style.display = 'block';
    dataDisplay.style.display = 'none';
    
    const promise = getUsers();
    promise.then(onFulfilled).catch(onRejected);
})