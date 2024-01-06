// Examples of var, let and const
// Variables are declared using the keyword "var", which can be reassigned.
let myVar = 10;
console.log(myVar); // Output: 10
myVar = 20;
console.log(myVar); // Output: 20

// The "let" keyword is used to declare a variable that is limited in scope to the
// block, statement, or expression it's created in. This means that variables
// declared with "let" cannot be accessed outside their respective blocks.
let myLet = 30;
if (true) {
    let myLet = 10;
    console.log(myLet); // Output: 10
}

// The "const" keyword is also used to create a variable, but it cannot be reassigned once it's
// assigned. 
const myConst = 40;
try {
    myConst = 50; // Throws an error because constants cannot be reassigned
    } catch (e) {
        console.error("Error: ", e);
        }

//Example of an arrow function:
const multiplyByTwo = x => x * 2;


// Single-line comment
const result = calculateTotal(); // Inline comment

/*
Multi-line comment
Provides detailed explanations
*/

//String Templates and concatenation
const name = "Alice";
const age = 30;

// Using +
const message1 = "Hello, " + name + "! You are " + age + " years old.";

// Using template literals
const message2 = `Hello, ${name}! You are ${age} years old.`;

//Hoisting example
console.log(message1); // Output: Hello, Alice! You are 30 years
function addNumbers() {
    num1 = 10;
    num2 = 20;
    sum = num1 + num2;
    }
    addNumbers();
    console.log(sum); //Output: undefined - Because the variables aren't declared until the function runs