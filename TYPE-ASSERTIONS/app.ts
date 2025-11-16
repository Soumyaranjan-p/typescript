// Why Use Type Assertions?

// ✔ When TypeScript cannot infer the correct type
// ✔ When working with DOM elements
// ✔ When dealing with any
// ✔ When getting API data and you know the structure

// AS SYNTAX
let value: any = "Hello";
let length = (value as string).length;

//ANGLE-BRACKET
let length = (<string>value).length;

//NO NULL ASSERTION
 let a:null |undefined|string;
 a="hey"
