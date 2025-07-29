
//User case 1

//Funtion to calculate the difference of two numbers

function calculateDifference(a, b) {

    //Verify that both inputs are numbers if not show message
    if (typeof a !== 'number' || typeof b !== 'number') {   
         return a - b;
    } else {
        console.error('Both inputs must be numbers');
        return undefined; // Return undefined if inputs are not numbers
    }   
}

//Test the function with a variety of inputs
const diffResult1 = calculateDifference(10, 5); // Expected output: 5
console.log("The difference is:", diffResult1); //Test with negative numbers
const diffResult2 = calculateDifference(5, 10); // Expected output: -5
console.log("The difference is:", diffResult2); //Test with zero
const diffResult3 = calculateDifference(0, 10); // Expected output: -10
console.log("The difference is:", diffResult3); //Test with equal numbers
const diffResult4 = calculateDifference(10, 10); // Expected output: 0
console.log("The difference is:", diffResult4); //Test with large numbers
const diffResult5 = calculateDifference(1000000, 500000); // Expected output: 500000
console.log("The difference is:", diffResult5); //Test with floating point numbers
const diffResult6 = calculateDifference(5.5, 2.2); // Expected output: 3.3
console.log("The difference is:", diffResult6); //Test with negative floating point numbers

// User case 2

/*
    Function name: calculateSum
    Function inputs: a, b (both numbers)
    Function output: The sum of a and b
    Description: This function takes two numbers as input and returns their sum.
*/

// This is a simple JavaScript function to calculate the sum of two numbers
// and log the result to the console.   
function calculateSum(a, b) {
    return a + b;
}   


//User case 3

/*
    Write a regex expression 
    Inputs : Hey How Are You
    Output: HHAY

*/

const regex = /(\w)\w*/g; // Matches the first letter of each word
//Test the regex
const inputString = "Hey How Are You";
const matches = inputString.match(regex);   
// Join the matches to form the output string
const outputString = matches.join('').toUpperCase(); // Expected output: HHAY
console.log("The output string is:", outputString); // Show the result


// Expresión regular para validar un email
// - Debe comenzar con letras, números, puntos, guiones o guiones bajos
// - Debe contener un símbolo '@'
// - Debe contener un dominio con al menos un punto
// - El dominio debe tener al menos dos caracteres
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Test the email regex
const testEmails = [

    "exampleEmail@Gmail.com",
    "exampleemailgmail.com",

]
testEmails.forEach(email => {
    if (emailRegex.test(email)) {
        console.log(`${email} is a valid email address.`);
    } else {
        console.log(`${email} is not a valid email address.`);
    }
});


//User case 5

/**
 * @typedef {Object} Product
 * @property {string} id - Unique product identifier
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {string[]} categories - Product categories
 */

/**
 * Filters products by a specific category
 * @param {Product[]} products - Array of product objects
 * @param {string} category - Category to filter by
 * @returns {Product[]} Filtered product array
 */

function filterProductsByCategory(products, category) {
    return products.filter(product => product.categories.includes(category));
}       

// Example usage
const products = [
    { id: '1', name: 'Laptop', price: 1000, categories: ['electronics', 'computers'] },
    { id: '2', name: 'Smartphone', price: 500, categories: ['electronics', 'mobile'] },
    { id: '3', name: 'Tablet', price: 300, categories: ['electronics', 'computers'] },
];

//Log results