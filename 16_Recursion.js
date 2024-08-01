// task-1
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// task-2
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

// task-3
function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}
console.log(sum([1, 3, 4, 5, 6]));

// task-4
function findMax(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  return Math.max(arr[0], findMax(arr.slice(1)));
}
console.log(findMax([2, 5, 6, 7, 8, 9, 9]));

// task-5
function reverseStr(str) {
  if (str === "") {
    return "";
  }
  return str.charAt(str.length - 1) + reverseStr(str.slice(0, -1));
}
console.log(reverseStr("shwetangi"));

// task-6
function strPanilindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return strPanilindrome(str.slice(1, -1));
  }
  return false;
}
console.log(strPanilindrome("abccba"));
console.log(strPanilindrome("shwetangi"));

// task-7
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
  if (arr[mid] < target) {
    return binarySearch(arr, target, end, mid + 1);
  }
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));

// task-8
function findOccurance(arr, target) {
  if (arr.length === 0) {
    return 0;
  }
  const count = arr[0] === target ? 1 : 0;
  return count + findOccurance(arr.slice(1), target);
}
console.log(findOccurance([2, 4, 5, 6, 7, 8, 7], 7));
