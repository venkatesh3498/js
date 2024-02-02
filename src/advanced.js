class Parent {
  constructor() {
    this.name = "Parent";
    this.age = 25;
  }

  get getName() {
    return this.name;
  }
  setName(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(this.name);
  }
}
// const parent = new Parent();
// parent.setName = "John";
// parent.print();

class Child extends Parent {
  constructor() {
    super();
    this.name = "Child";
  }

  printChild() {
    super.name = "John";
    super.print();
  }
}

// const child = new Child();
// child.printChild();

const Object = {
  name: "John",
  age: 25,
  print: () => {
    console.log(this);
  },
};

Object.print();

// const numbers = Math.random() * 100;
// function sum(number, number2, number3) {
//   return number + number2 + number3 * numbers;
// }
// sum(2, 3, 4);