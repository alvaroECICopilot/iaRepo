
// This is a simple JavaScript function to calculate the sum of two numbers
// and log the result to the console.   
function calculateSum(a, b) {
    return a + b;
}

// Test the function
const result = calculateSum(5, 10); 

//Show the result
console.log("The sum is:", result); // Expected output: The sum is: 15


function calculateProductWithErrorHandling(var1, var2) {
    try {
        if (typeof var1 !== 'number' || typeof var2 !== 'number') {
            throw new Error('Both arguments must be numbers');
        }
        return var1 * var2;
    } catch (error) {
        console.error(error.message);
    }
}


//Test the function
const restul = calculateProductWithErrorHandling(5, '10'); // This will trigger an error
console.log("The product is:", restul); // Expected output: The product is: undefined   

// Test the function with valid numbers
const validResult = calculateProductWithErrorHandling(5, 10);   
console.log("The product is:", validResult); // Expected output: The product is: 50 

