// data types in js
// String
// const name = " ohn ";
const greet = "Hello";

// Number
const age = 25;

// Boolean
// const isStudent = true;

// Object
const person = {
  name: "John",
  age: 25,
  isStudent: true,
  hobbies: ["Sports", "Cooking"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};
const { city: cityName } = person.address;
console.log(cityName);
// console.log(person.name?.soosd)

// console.log("Log", person['address']['state']);

// Array
const numbers = [1, 2, 3, 4, 5, "inix", true, { name: "John", age: 25 }];

numbers[7][greet] = 872349782;
// console.log(numbers[7]);

// Null
const nullValue = null;

// Undefined
let undefinedValue;

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(person);
// console.log(numbers);
// console.log(nullValue);
// console.log(undefinedValue);

// number  +,-,*,/

// console.log(greet +name);
// console.log(greet.concat(' ', name))
// console.log(`${greet} ${name}`);
// console.log(name.replace('J', 'H'));
// console.log(name.trim());
