// 5 basic JavaScript Functions:

  // Example (1) Simple Greeting Function:

  function greet(name) {
    console.log('Hello,To The World!');
  }
  greet(); // Output: Hello, World!

 //  Example (2) Addition Function:

  function add(a, b) {
  console.log(a + b);
 }
 add(3, 5); // Output: 8

 // Example (3) Multiplication Function:

   function multiply(x, y) {
    console.log(x * y);
   }
   multiply(4, 6); // Output: 24

 // Example (4) Square Function:

 function square(num) {
   console.log(num * num);
 }
 square(45); // Output: 2025

 // Example (5) Greeting:

 function greet(name) {
   console.log('Hello, ' + name + '!');
 }
 greet('John'); // Output: Hello, John!
 


// (5) function with return Value:

// example (1) Addition 
{ 
 function add(a, b) {
   return a + b;
 }
 let result1 = add(5, 3);
 console.log(result); // Output: 8
}
 // Example (2) multiplication function
{
   function multiply(x, y) {
   return x * y;
 }
 let product = multiply(4, 6);
 console.log(product); // Output: 24
}
 // Example (3) exponantial function
{
   function power(base, exponent) {
   return Math.pow(base, exponent);
 }
 let result2 = power(2, 3);
 console.log(result); // Output: 8
}
 // example (4) concatenation 
{
   function concatenateStrings(str1, str2) {
   return str1 + ' ' + str2;
 }
 let combined = concatenateStrings('Hello', 'World!');
 console.log(combined); // Output: Hello World!
}  
 // Example (5) check even or odd num
{
   function isEven(number) {
   return number % 2 === 0;
 }
 let checkEven = isEven(7);
 console.log(checkEven); // Output: false

} 
 

// (5) anonymous Function 
//  (1) Immmediatly Invoked Functions Expression (IIFE) :

(function() {
 console.log('This is an IIFE!');
})();    // Output: This is an IIFE!

// (2) Basic anooymous function

 let multiply = function(x, y) {
   return x * y;
 };
 console.log(multiply(4, 6)); // Output: 24
   
// (3) anonymous function with parameter:

let add = function(a, b) {
 console.log(a + b);
};
add(3, 5); // Output: 8

// (4) anonymouse basic function

let greet = function() {
 console.log('Hello, World!');
};
greet(); // Output: Hello, World!


//  (5) Anonymous Function Assigned to a Variable

let square = function(num) {
 return num * num;
};
let result = square(9);
console.log(result); // Output: 81


//Arrow FUnction 

//  (1) SQuare of number
 let square = (num) => num * num;
console.log(square(9)); // Output: 81


// (2) Arrow Function with Object Literal
let createPerson = (name, age) => ({ name: name, age: age });
let person = createPerson('John', 25);
console.log(person); // Output: { name: 'John', age: 25 }

// (3) call back function
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
 console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10

//  Arrow function with Parameter
let add = (a, b) => {
 console.log(a + b);
};
add(3, 5); // Output: 8

// Basic Arrow function
let greet = () => {
 console.log('Hello, World!');
};
greet(); // Output: Hello, World!

