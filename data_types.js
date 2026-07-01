//1. Primitive Data Types
//Primitive data types hold single values and are immutable (cannot be changed). There are seven primitive data types in JavaScript:

// String

// Number

// BigInt

// Boolean

// Undefined

// Null

// Symbol

// 1.1 String
// A string represents a sequence of characters enclosed in single ('), double ("), or backticks (` ).

// Examples:
// Example 1: Using single and double quotes
let name1 = "Alice";  
let name2 = 'Bob';  

// Example 2: Using backticks (Template Literals)
let message = `Hello, ${name1}!`;  

// Example 3: Escaping characters
let quote = "She said, \"JavaScript is fun!\"";  

// Example 4: String concatenation
let fullName = name1 + " " + name2;  

// Example 5: String length
console.log(fullName.length); // Output: 10

// 1.2 Number
// The number type in JavaScript includes both integers and floating-point (decimal) numbers.

// Examples:
// Example 1: Integer
let age = 25;  

// Example 2: Floating point number
let price = 99.99;  

// Example 3: Exponential notation
let bigNumber = 1.5e6; // 1500000  

// Example 4: Infinity and -Infinity
console.log(10 / 0); // Output: Infinity  

// Example 5: NaN (Not a Number)
console.log("Hello" / 2); // Output: NaN

// 1.3 BigInt
// BigInt is used for very large numbers that cannot be represented by the regular Number type. It is created by adding n at the end of a number.

// Examples:
// Example 1: Creating BigInt
let bigNumber = 123456789012345678901234567890n;  

// Example 2: Arithmetic operations with BigInt
let result = bigNumber + 100n;  

// Example 3: Comparing BigInt and Number
console.log(10n === 10); // Output: false  

// Example 4: Converting Number to BigInt
let converted = BigInt(100);  

// Example 5: BigInt division
console.log(5n / 2n); // Output: 2n (BigInt does not have decimals)

// 1.4 Boolean
// A boolean represents true or false. It is often used in conditions and comparisons.

// Examples:
// Example 1: Direct boolean values
let isRaining = true;  
let isSunny = false;  

// Example 2: Boolean from expressions
console.log(5 > 3); // Output: true  

// Example 3: Using Boolean() function
console.log(Boolean(0)); // Output: false  
console.log(Boolean("Hello")); // Output: true  

// Example 4: Boolean in conditions
if (isRaining) {  
  console.log("Take an umbrella!");  
}

// Example 5: Boolean from null and undefined
console.log(Boolean(null)); // Output: false  
console.log(Boolean(undefined)); // Output: false

// 1.5 Undefined
// A variable is undefined when it has been declared but not assigned a value.

// Examples:
// Example 1: Declaring a variable without assigning a value
let x;  
console.log(x); // Output: undefined  

// Example 2: Function without return statement
function test() {}  
console.log(test()); // Output: undefined  

// Example 3: Accessing an object property that doesn’t exist
let person = {};  
console.log(person.age); // Output: undefined  

// Example 4: Array index that doesn't exist
let arr = [1, 2, 3];  
console.log(arr[5]); // Output: undefined  

// Example 5: Explicitly setting a variable to undefined
let y = undefined;  
console.log(y); // Output: undefined

// 1.6 Null
// Null is an intentional absence of a value. It is an object in JavaScript.

// Examples:
// Example 1: Assigning null
let emptyValue = null;  

// Example 2: Checking if a variable is null
console.log(emptyValue === null); // Output: true  

// Example 3: Resetting a variable
let data = "Some data";  
data = null;  

// Example 4: Function returning null
function getData() {  
  return null;  
}

// Example 5: Comparing null with undefined
console.log(null == undefined); // Output: true  
console.log(null === undefined); // Output: false

// 1.7 Symbol
// A Symbol is a unique and immutable identifier.

// Examples:
// Example 1: Creating a symbol
let sym1 = Symbol("description");  
let sym2 = Symbol("description");  

// Example 2: Symbols are unique
console.log(sym1 === sym2); // Output: false  

// Example 3: Using Symbols as object keys
let user = {  
  [Symbol("id")]: 123  
};

// Example 4: Symbols are not enumerable
console.log(Object.keys(user)); // Output: []  

// Example 5: Using Symbol.for
let sharedSymbol = Symbol.for("shared");  
console.log(Symbol.for("shared") === sharedSymbol); // Output: true

// 2. Non-Primitive (Reference) Data Types
// Reference types store memory addresses instead of actual values. The main types are:

// Objects

// Arrays




// 1. Objects in JavaScript
// An object in JavaScript is a collection of key-value pairs. Objects are one of the most fundamental data structures in JavaScript.

// Ways to Create Objects in JavaScript
// Method 1: Using Object Literal {} (Most Common Way)
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 25

// Method 2: Using new Object() Constructor
let person2 = new Object();
person2.name = "Bob";
person2.age = 30;

console.log(person2.name); // Output: Bob

// Method 3: Using Object.create()
let prototypeObj = {greet: function() { return "Hello!"; }};
let newObj = Object.create(prototypeObj);

console.log(newObj.greet()); // Output: Hello!

// Method 4: Using a Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person3 = new Person("Charlie", 28);
console.log(person3.name); // Output: Charlie

// Method 5: Using Class Syntax (ES6+)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person4 = new PersonClass("David", 35);
console.log(person4.name); // Output: David

//Method 6: Using JSON (JavaScript Object Notation)
let jsonData = '{"name": "Emma", "age": 22}';
let person5 = JSON.parse(jsonData); // Convert JSON string to object

console.log(person5.name); // Output: Emma

//Object Methods and Operations
// Example 1: Adding and Deleting Properties
let car = { brand: "Tesla", model: "Model 3" };
car.year = 2023; // Adding new property
delete car.model; // Deleting property

console.log(car); // Output: { brand: 'Tesla', year: 2023 }

// Example 2: Checking Property Existence (hasOwnProperty)
console.log(car.hasOwnProperty("brand")); // Output: true
console.log(car.hasOwnProperty("model")); // Output: false

// Example 3: Looping Through an Object (for...in)
let student = { name: "John", age: 20, grade: "A" };

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
// Output:
// name: John
// age: 20
// grade: A

// 2. Arrays in JavaScript
// An array is an ordered collection of elements. JavaScript arrays are dynamic, meaning they can grow or shrink in size.

// Ways to Create an Array in JavaScript
// Method 1: Using Array Literal [] (Most Common Way)
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple

// Method 2: Using new Array() Constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers[2]); // Output: 3

// Method 3: Using Array.of()
let items = Array.of("Pen", "Pencil", "Eraser");
console.log(items); // Output: [ 'Pen', 'Pencil', 'Eraser' ]

// Method 4: Using Array.from()
let str = "Hello";
let letters = Array.from(str);

console.log(letters); // Output: [ 'H', 'e', 'l', 'l', 'o' ]

// Array Methods and Operations
// Example 1: Adding and Removing Elements
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow"); // Adds at end
colors.pop(); // Removes last element
colors.unshift("Purple"); // Adds at beginning
colors.shift(); // Removes first element

console.log(colors); // Output: [ 'Green', 'Blue' ]

// Example 2: Looping Through an Array (forEach)
let numbers = [10, 20, 30];
numbers.forEach(num => console.log(num * 2));
// Output:
// 20
// 40
// 60

// Example 3: Filtering an Array (filter())
let scores = [85, 92, 76, 95];
let highScores = scores.filter(score => score > 90);

console.log(highScores); // Output: [92, 95]

// Example 4: Transforming an Array (map())
let prices = [10, 20, 30];
let discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices); // Output: [9, 18, 27]

// 3. Functions in JavaScript
// Functions are first-class objects in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

// Ways to Declare Functions in JavaScript
// Method 1: Function Declaration
function greet() {
  return "Hello!";
}

console.log(greet()); // Output: Hello!

// Method 2: Function Expression
let greet = function() {
  return "Hello!";
};

console.log(greet()); // Output: Hello!

// Method 3: Arrow Function (ES6+)
let greet = () => "Hello!";

console.log(greet()); // Output: Hello!

// Method 4: Function as a Parameter
function executeFunction(fn) {
  console.log(fn());
}

executeFunction(() => "Hello from a function!"); // Output: Hello from a function!

// Method 5: Function Returning Another Function
function multiplier(factor) {
  return (number) => number * factor;
}

let double = multiplier(2);
console.log(double(5)); // Output: 10