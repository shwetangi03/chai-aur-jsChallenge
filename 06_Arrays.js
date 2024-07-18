// task-1
let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

// task-2
console.log(arr[0], arr[arr.length - 1]);

// task-3
arr.push(6);
console.log(arr);

// task-4
arr.pop();
console.log(arr);

// task-5
arr.shift();
console.log(arr);

// task-6
arr.unshift(3);
console.log(arr);

// task-7
let newArr = arr.map((item) => item * 2);
console.log(newArr);

// task-8
let filteredArr = arr.filter((item) => item % 2 === 0);
console.log(filteredArr);

// task-9
let sum = arr.reduce((item, item2) => item + item2, 0); //initial value is optional as of now
console.log(sum);

// task-10
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// task-11
arr.forEach((item) => console.log(item));

// task-12
let twoDimentionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < twoDimentionalArr.length; i++) {
  for (let j = 0; j < twoDimentionalArr[i].length; j++) {
    console.log(twoDimentionalArr[i][j]);
  }
}

// task-13
console.log(twoDimentionalArr[2][2]);
