// 1. length Returns the length of a string.
let str = "Hello, World!";
console.log(str.length); // Outputs: 13

let str1 = "we are playing ball";
console.log(str1.length); // outputs: 19

// 2.charAt(index) Returns the character at the specified index.
let str2 = "Hello, World!";
console.log(str2.charAt(0)); // Outputs: H

let str2i = "we, are at mahub";
console.log(str2i.charAt(6)) // Outputs: e


// 3.concat() Concatenates two or more strings
let str3 = "Hello";
let str4 = " World";
let str4i = "today"
let str4ii = "is"
let str4iii = "Good!"
console.log(str3.concat(str4)); // Outputs: Hello World
console.log(str3.concat(str4," ",str4i," ",str4ii," ",str4iii))

// 4.indexOf(substring) Returns the index of the first occurrence of a substring, or -1 if not found.
let str5 = "Hello, World!, Today is wed";
console.log(str5.indexOf("W")); // Outputs: 7
console.log(str5.indexOf("i")); // Outputs: 21
console.log(str5.indexOf("y")); // Outputs: 19

// 5.substring(start, end) Returns a portion of the string starting from start index to end index (end index not included).
let str6 = "Hello, World! Today is wed";
console.log(str6.substring(0, 5)); // Outputs: Hello
console.log(str6.substring(6, 13)); // Outputs: World!
console.log(str6.substring(14, 22)); // Outputs: Today is 

// 6. slice(start, end) Similar to substring, but allows negative indices.
let str7 = "Hello, World! Today is wed";
console.log(str7.slice(-6)); // Outputs: is wed
console.log(str7.slice(-13)); // OUTPUT: Today is wed

// 7. toUpperCase() and toLowerCase() Converts a string to uppercase or lowercase.
let str8 = "Hello, World!";
let str8i = "we are cool and happy"
console.log(str8.toUpperCase()); // Outputs: HELLO, WORLD!
console.log(str8.toLowerCase()); // Outputs: hello, world!
console.log(str8i.toUpperCase()); // output:WE ARE COOL AND HAPPY


// 8. replace(search, replacement) Replaces a specified substring with another string.
let str9 = "Hello, World!";
let str9i = "we are in class";
console.log(str9.replace("World", "Universe")); // Outputs: Hello, Universe!
console.log(str9i.replace("are","were"));  // Output: we were in class
console.log(str9i.replace("in","do"));    // Output: we are do class
console.log(str9i.replace("class","party")); // Output: we are in party

// 9. split(separator) Splits a string into an array of substrings based on the specified separator.
let str10 = "apple,orange,banana,pineapple";
let str10i = "man,woman,boy,girl,people";
let fruits = str10.split(",");
console.log(fruits); // Outputs: ["apple", "orange", "banana"]
console.log(str10i.split("")) // Output: []

// 10. Splits a string into an array of substrings based on the specified separator.
let str11 = "   Hello, World!   ";
console.log(str11.trim()); // Outputs: Hello, World!

// 11. startsWith(prefix) and endsWith(suffix) Checks if a string starts or ends with a specified prefix or suffix.
let str12 = "Hello, World!";
console.log(str12.startsWith("Hello")); // Outputs: true
console.log(str12.endsWith("World")); // Outputs: false

//12. Returns the Unicode value of the character at the specified index.
let str13 = "Hello, World!";
console.log(str13.charCodeAt(7)); // Outputs: 87 (Unicode for 'W')

// 13.repeat(count) Returns a new string containing the original string repeated a specified number of times.
let str14 = "Hello, ";
console.log(str14.repeat(3)); // Outputs: Hello, Hello, Hello,

// 14. padStart(length, padString) and padEnd(length, padString) Pads a string with a specified padding string to reach the desired length.
let str15 = "7";
console.log(str15.padStart(3, "0")); // Outputs: 007
