// for (variabel init,condtion checking, increment/decrement) {
//     // code
// }
// while (condition) {
//     // code
// }
// do {
//     // code
// } while (condition)

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }
// let condition = 10;
// while (condition >= 0) {
//     console.log(condition);
//     condition--;
// }

// of is used for getting the value
// for (let item of arr) {
//     console.log(item);
// }
// in is used for getting the index of element
// for (let item in arr) {
//     console.log("numbers", arr[item]);
// }

const obj = {
  name: "John",
  age: 25,
  address: "123 Main St",
  city: "New York",
  state: "NY",
};
// for (let item in obj) {
//   console.log(obj[item]);
// }

const arr = [0, 2, 3, 4, 5, 6, 6, 5, 6, 6, 7];

// arr.forEach((item, index, originl) => {
//     console.log(item, index, originl);
// })

const modified = arr.map((item, index, originl) => {
  // arr[index] = item + 1;
  // return arr
  return originl;
});
// console.log(Boolean(0))
const filteredValues = arr.filter((item, index, originl) => {
  if (item > 5) {
    return true;
  } else {
    return false;
  }
});
// console.log(filteredValues);

const repeated = arr.reduce((acc, item, index, originl) => {
  if (acc[item]) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});
// console.log(repeated)

const maps = (callBackFn) => {
  const data = [1, 3, 4, 5];
  return callBackFn(data);
};
const functionToBeCallback = (props) => {
  return props;
};

console.log("CallBackers======>", maps(functionToBeCallback));
