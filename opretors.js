//1. The Spread Operator (...)
//✅ Copying an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

//✅ Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//✅ Using Spread in Function Arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [10, 20, 30];
console.log(sum(...numbers)); // Output: 60

//✅ Copying an Object
const person = { name: "Alice", age: 25 };
const copiedPerson = { ...person };
console.log(copiedPerson); // Output: { name: "Alice", age: 25 }

//✅ Merging Objects
const obj1 = { name: "Alice" };
const obj2 = { age: 25, city: "New York" };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { name: "Alice", age: 25, city: "New York" }

//2. The Rest Operator (...)
//What is the Rest Operator?
//The rest operator (...) collects multiple elements into a single array. It is primarily used in function parameters and array/object destructuring.

//Use Cases of Rest Operator
//✅ Collecting Function Arguments
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//✅ Destructuring Arrays
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(rest); // Output: [30, 40, 50]

//✅ Destructuring Objects
const student = { name: "John", age: 22, grade: "A", city: "London" };
const { name, ...otherDetails } = student;
console.log(name); // Output: John
console.log(otherDetails); // Output: { age: 22, grade: "A", city: "London" }









//Step 1: Adding Items to Cart (Using Spread Operator)
//When a user adds a new item, we use the Spread Operator (...) to ensure that the previous items remain in the cart while adding the new one.

const cart = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 }
];

const newItem = { id: 3, name: "Headphones", price: 100 };

const updatedCart = [...cart, newItem]; // Adding new item
console.log(updatedCart);

//Output:

[
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 }
]



//Step 2: Updating Product Details (Using Spread Operator)
//Let's say the user wants to update the price of the Phone. Instead of modifying the array directly, we use Spread Operator (...) to create a new array with the updated item.

const updatedCartWithNewPrice = cart.map(item => 
  item.id === 2 ? { ...item, price: 450 } : item
);

console.log(updatedCartWithNewPrice);

//Output:

[
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 450 }, // Price updated
  { id: 3, name: "Headphones", price: 100 }
]




//Step 3: Calculating Total Price (Using Rest Operator)
//Now, we need to calculate the total price of all items in the cart. We use the Rest Operator (...) to collect all item prices into an array and sum them up.

function calculateTotalPrice(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

const totalPrice = calculateTotalPrice(...updatedCart.map(item => item.price));
console.log(`Total Price: $${totalPrice}`);

//Output:

//Total Price: $1350


