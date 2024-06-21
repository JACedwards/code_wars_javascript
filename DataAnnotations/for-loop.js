// // `for` Loop:
// for (let i = 0; i < 5; i++) {
//     console.log(i); // Outputs 0, 1, 2, 3, 4
// }

// console.log('\n')

// //`for . . . in` Loop:
// let person = { name: "Alice", age: 30 };
// for (let key in person) {
//     console.log(key, person[key]); // Outputs name Alice, age 30
// }

// console.log('\n')

// //`hasOwnProperty` Check:
// function Person(name, age) {
//     this.name = name; // Own property
//     this.age = age;   // Own property
// }
// Person.prototype.gender = "female"; // Inherited property
// person = new Person("Alice", 30);
// person.occupation = "Engineer"; // Own property
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`Own property: ${key} - ${person[key]}`);
//     } else {
//         console.log(`Inherited property: ${key} - ${person[key]}`);
//     }
// }


// Response B

const person = {
    name: "Alice",
    age: 12,
    occupation: "student"
  };

                      
  for (let key in person) {
    console.log(key);          // Outputs: name, age, occupation (one per loop iteration)
    console.log(person[key]);  // Outputs: "Alice", 12, "student" (corresponding values)
  }

