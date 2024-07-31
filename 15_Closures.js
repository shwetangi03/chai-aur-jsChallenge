// task - 1
function outer() {
  let name = "shwetagi";
  function inner() {
    console.log(name);
  }
  return inner;
}
const fn = outer();
fn();

// task - 2
function createCounter() {
  let counter = 0;
  return {
    incre: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}
const res = createCounter();
console.log(res.getValue());
res.incre();
console.log(res.getValue());

// task - 3
function uniqueId() {
  let id = 0;
  return function () {
    id++;
    return id;
  };
}
const result = uniqueId();
console.log(result());
console.log(result());
console.log(result());

// task - 4
function greet() {
  let usename = "shwetangi";
  return function () {
    console.log(`hi..${usename}`);
  };
}
const person = greet();
person();

// task - 5
function loops() {
  return function () {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
  };
}
const loop = loops();
loop();

// task - 6
const createItemManager = () => {
  let items = [];
  return {
    addItem: (item) => {
      items.push(item);
      console.log(`Added: ${item}`);
    },
    removeItem: (item) => {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(`Removed: ${item}`);
      } else {
        console.log(`Item not found: ${item}`);
      }
    },
    listItems: () => {
      console.log("Items:", items);
      return items;
    },
  };
};
const itemManager = createItemManager();
itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.listItems();
itemManager.removeItem("Apple");
itemManager.listItems();
itemManager.removeItem("Orange");

// task - 7
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("Fetching from cache:", key);
      return cache[key];
    } else {
      console.log("Computing result for:", key);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}
const slowFunction = (num) => {
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
};
const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(10));
console.log(memoizedSlowFunction(10));

// task - 8
function memoizeFactorial() {
  let cache ={}
  function factorial(n) {
    if(n<=1){
      return 1
    }
    if(cache[n]!==undefined){
      return cache[n]
    }
    else{
      const res= n*factorial(n-1)
      cache[n]= res
      return res 
    }
  }
  return factorial
}
const memoizedFactorial = memoizeFactorial()
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(9));
