// task - 1
function bubbleSort(arr) {
  let n = arr.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    n--;
  }
  return arr;
}
let arr = [2, 5, 6, 8, 2, 1, 1, 2, 4];
console.log(bubbleSort(arr));

// task - 2
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
let arra = [2, 3, 4, 8, 9, 9, 1, 3];
console.log(selectionSort(arra));

// task - 3
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const array = [64, 34, 25, 12, 22, 11, 90];
const target = 22;
console.log(linearSearch(array, target));

// task - 4
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
const sortedArray = [11, 12, 22, 25, 34, 64, 90];
const target = 22;
const index = binarySearch(sortedArray, target);
console.log(index);

// task - 5
function countCharacterOccurrences(str) {
  const charCount = {};
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (const [char, count] of Object.entries(charCount)) {
    console.log(`Character '${char}': ${count}`);
  }
}
const inputString = "hello world";
console.log("Character counts in the string:");
countCharacterOccurrences(inputString);

// task - 6
function longestUniqueSubstring(str) {
  let longest = 0;
  let currentSubstring = "";
  let charIndexMap = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charIndexMap.has(char)) {
      currentSubstring = str.substring(charIndexMap.get(char) + 1, i + 1);
    } else {
      currentSubstring = str.substring(0, i + 1);
    }
    charIndexMap.set(char, i);
    longest = Math.max(longest, currentSubstring.length);
  }
  return longest;
}
const inputString = "abcabcbb";
const length = longestUniqueSubstring(inputString);
console.log(
  `Length of the longest substring without repeating characters: ${length}`
);

// task - 7
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  if (k === 0) return arr;
  const rotatedArray = new Array(n);
  for (let i = 0; i < n; i++) {
    rotatedArray[(i + k) % n] = arr[i];
  }
  return rotatedArray;
}
const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(array, k);
console.log("Original array:", array);
console.log("Rotated array by", k, "positions:", rotatedArray);

// task - 8
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
console.log("Merged array:", mergedArray);
