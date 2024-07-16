//task-1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//task-2
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

//task-3
let total = 0;
let n = 0;
while (n <= 10) {
  total += n;
  n++;
}
console.log(total);

//task-4
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

//task-5
let a = 5;
let res = 1;
while (a > 0) {
  res *= a;
  a--;
}
console.log(res);

//task-6
for (let i = 0; i <= 5; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
}

//task-7
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//task-8
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
