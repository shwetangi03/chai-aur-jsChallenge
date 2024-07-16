//task-1
let num = -3;
if (num > 0) {
  console.log("positive number");
} else if (num < 0) {
  console.log("negative number");
} else {
  console.log("zero number");
}

//task-2
let age = 18;
if (age >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

//task-3
let a = 20;
let b = 15;
let c = 10;
let largest;
if (a >= b) {
  if (a >= c) {
    largest = a;
  } else {
    largest = c;
  }
} else {
  if (b >= c) {
    largest = b;
  } else {
    largest = c;
  }
}
console.log(largest);

//task-4
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

//task-5
let grade = 30;
if (grade >= 80 && grade <= 100) {
  console.log("A");
} else if (grade >= 75 && grade < 80) {
  console.log("B");
} else if (grade >= 60 && grade < 75) {
  console.log("C");
} else if (grade >= 55 && grade < 60) {
  console.log("D");
} else if (grade >= 75 && grade < 80) {
  console.log("E");
} else {
  console.log("F");
}

//task-6
let nums = 11;
let res = nums % 2 === 0 ? "even" : "odd";
console.log(res);

//task-7
let year = 1024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

