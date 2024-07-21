// task-1
const person = {
  name: "shwee",
  age: "21",
  getData: function () {
    return `my name is ${this.name} and i m ${this.age} old`;
  },
};
console.log(person.getData());

// task-2
const multiStr = `This is a multiline string
using template literals.
shwee`;
console.log(multiStr);

// task-3
let arr = [3, 2, 5, 6, 8];
const [a, b] = arr;
console.log(a, b);

// task-4
const book = {
  title: "Pandit ji",
  author: "shwee",
};
const { title, author } = book;
console.log(title, author);

// task-5
let array = [1, 2, 3];
let array2 = [2, 3, 4];
let array3 = [...array, ...array2];
console.log(array3);

// task-6
function sum(...arr) {
  return arr.reduce((num, num2) => num + num2, 0);
}
console.log(sum(1, 3, 4, 5));

// task-7
function product(a, b = 5) {
  return a * b;
}
console.log(product(2, 6));

// task-8
const obj = {
  name: "shwetangi",
  age: 21,
};
console.log(obj.name);

// task-9
const key1 = "name";
const key2 = "age";
const object = {
  [key1]: "shwee",
  [key2]: "21",
};
console.log(object);
