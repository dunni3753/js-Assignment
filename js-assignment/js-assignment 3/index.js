//array functions

const student = ['cynthia','tolu','toheeb','mariam','joba','adam'];
console.log(student[5]);

// Array pop:

// example (1)
student.pop();
console.log(student);

// array push

// example (1)
student.push("joseph","ibrahim","abiola");
console.log(student);

// Array toString

const givenNUm = [1, 2, 3, 4, 5];                    // Example (1) Converting an array of numbers to a string
const stringRepresentation1 = givenNUm.toString();
console.log(stringRepresentation1);

const fruits = ["apple", "banana", "orange"];       // Example (2) Converting an array of strings to a string
const stringRepresentation2 = fruits.toString();
console.log(stringRepresentation1); 

const mixeArrayData = ["apple",1, 2, 3,"apple", "banana", "orange", 4, 5, "banana",1, 2, 3, 4, 5, "orange"];
const stringRepresentation3 = mixeArrayData.toString();
console.log(stringRepresentation3)



// Array shift()

let shiftedName = student.shift();          // example (1)
console.log(shiftedName);
console.log(student);

let numbers = [1, 2, 3, 4, 5];            // example (2)
while (numbers.length > 0) {
  let removedNumber = numbers.shift();
  console.log('Removed:', removedNumber, 'Remaining:', numbers);
}

let colors = ['red', 'blue', 'green'];      // Example (3)
let firstColor = colors.shift();
console.log(firstColor);
console.log(colors); 

// array join()
let reuslt = student.join();    // example (1)
let reuslt2 = numbers.join();   // example (2)
let result3 = colors.join();    //example (3)
console.log(reuslt,reuslt2,result3);

// Array Delete()

delete student [3];   //example 1
delete numbers [1];   //example 2
delete colors [1];    //example 3
console.log(numbers, student ,colors
  );

// Array flat()

const nestedArray1 = [1, [2, 3], 4];                 //example (1) Flattening a simple nested array
const flattenedArray1 = nestedArray1.flat();
console.log(flattenedArray1); 


const nestedArray2 = ['mike', ['yusuf', 'faith'], 'apex'];  // Example (2) Flattening a simple nested array
const flattenedArray2 = nestedArray2.flat();
console.log(flattenedArray2); 

const nestedArray3 = [1, [2, [3, [4, 5]]]];                // Example (3) Flattening with a specified depth
const flattenedArray3 = nestedArray3.flat(2);
console.log(flattenedArray3); 

const nestedArray = [1, , [2, 3], , 4];                   // Example (4) Flattening and removing empty slots
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); 
 



