// ✅ Function Syntax

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Payal"); // Output: Hello, Payal!
greet("Amit");  // Output: Hello, Amit!


//1. Function Declaration (Normal Way)
//Function Declaration can be hoisted (used before declaration).

function sayHello() {
  console.log("Hello World!");
}
sayHello();

// 2. Function Expression
// Function Expression cannot be hoisted.
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

//3. Arrow Function (ES6 Feature)
// Shorter syntax for function expressions.

const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20


// Parameters – Variables in the function definition.

// Arguments – Actual values passed when calling the function.

function welcome(user) {  // user is a parameter
  console.log("Welcome " + user);
}

welcome("Priya");  // "Priya" is an argument


// 🔹 Return Statement
// If you want to send a value back from the function, use return.

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let fullName = getFullName("Ravi", "Kumar");
console.log(fullName); // Output: Ravi Kumar

// // example

// function calculateTotal(price, quantity) {
//   let total = price * quantity;
//   return total;
// }

// let cartTotal = calculateTotal(500, 3);
// console.log("Your cart total is ₹" + cartTotal); // Output: ₹1500


// 🔹 Callback Functions (Function inside Function)
// A callback function is passed as an argument to another function, and is called after some operation is completed.

function showMessage(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

showMessage("Sonia", sayBye);


//example


// Step 1: Product List (Array of Objects)
const products = [
  { id: 1, name: "Rice", price: 60 },
  { id: 2, name: "Sugar", price: 40 },
  { id: 3, name: "Wheat", price: 50 },
];

// Step 2: Function Declaration to Display Products
function showProducts() {
  products.forEach((product) => {
    console.log(`Product: ${product.name} - ₹${product.price}`);
  });
}
showProducts();  // Shows product list

// Step 3: Cart Array
let cart = [];

// Step 4: Function Expression to Add to Cart
const addToCart = function (productId, quantity) {
  const product = products.find((item) => item.id === productId);
  if (product) {
    cart.push({
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
    console.log(`${product.name} added to cart (${quantity}kg)`);
  } else {
    console.log("Product not found");
  }
};

// Add items to cart
addToCart(1, 2);  // Rice - 2kg
addToCart(3, 1);  // Wheat - 1kg

// Step 5: Arrow Function to Calculate Total
const calculateTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

// Step 6: Function to Apply Discount Based on Total
function applyDiscount(totalAmount) {
  if (totalAmount >= 150) {
    return 20; // flat ₹20 discount
  }
  return 0;
}

// Step 7: Callback Function Example
function showFinalMessage(total, discount, callback) {
  console.log(`Cart Total: ₹${total}`);
  console.log(`Discount Applied: ₹${discount}`);
  let finalAmount = total - discount;
  callback(finalAmount);
}

// Step 8: Final Execution
let total = calculateTotal(); // ₹170
let discount = applyDiscount(total); // ₹20
showFinalMessage(total, discount, function (finalAmount) {
  console.log(`You need to pay ₹${finalAmount}`);
});
