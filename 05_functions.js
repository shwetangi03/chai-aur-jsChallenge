// task-1
function fn(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
fn(6);

// task-2
function sq(num) {
  return num * num;
}
console.log(sq(6));

// task-3
const max = function (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};
console.log(max(5, 8));

// task-4
const greet = function (greet, name) {
  return `${greet},${name}`;
};
console.log(greet("hello", "shwetangi"));

// task-5
const sum = (a, b) => {
  console.log(a + b);
};
sum(3, 6);

// task-6
const check = (str, char) => {
  return str.includes(char);
};
console.log(check("shwetangi", "t"));

// task-7
function product(a, b = 10) {
  return a * b;
}
console.log(product(6));

// task-8
function geet(name, age = "21") {
  return `hello! this is ${name} and i am ${age} year old`;
}
console.log(geet("shwetangi"));

// task-9
function higherOrder(num, fn) {
  for (let i = 0; i < num; i++) {
    fn();
  }
}
function hello() {
  console.log("hello shwetangi");
}
higherOrder(4, hello);

// task-10
function fn(fn1, fn2, val) {
  const first = fn1(val);
  const final = fn2(first);
  return final;
}
function add(num) {
  return num + 7;
}
function seq(num) {
  return num * num;
}
const res = fn(add, seq, 6);
console.log(res);
