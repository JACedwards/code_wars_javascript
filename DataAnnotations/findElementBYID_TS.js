// const myArray = [
//     { id: 1, name: "Alice" },
//     { id: 5, name: "Bob" },
//     { id: 3, name: "Charlie" }
//   ];
  
//   const targetId = 5;
//   const foundElement = myArray.find(item => item.id === targetId);
  
//   console.log(foundElement); // { id: 5, name: "Bob" } 

// const myArray = [
//     { id: 1, name: "Alice" },
//     { id: 5, name: "Bob" },
//     { id: 3, name: "Charlie" }
//   ]; 
// const targetId = 5;
// const foundElements = myArray.filter(item => item.id === targetId);
// const foundElement = foundElements[0]; // Get the first (and hopefully only) match
// console.log(foundElement);

const myArray = [
    { id: 1, name: "Alice" },
    { id: 5, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]; 
const targetId = 5;
let foundElement = null;

for (const item of myArray) {
  if (item.id === targetId) {
    foundElement = item;
    break; // Stop searching once found
  }
}
console.log(foundElement);