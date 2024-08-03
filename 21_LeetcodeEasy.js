// task - 1
var twoSum = function (nums, target) {
  // for(let i=0;i<nums.length;i++){
  //     for(let j=i+1;j<nums.length;j++){
  //         if(nums[i]+nums[j]===target){
  //             return [i,j]
  //         }
  //     }
  // }
  // return null

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (map.has(sum)) {
      return [map.get(sum), i];
    }
    map.set(nums[i], i);
  }
  return null;
};

// task - 2
var reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  reverse *= sign;
  return reverse;
};

// task - 3
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let reverse = 0;
  let copy = x;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reverse === copy;
};

// task - 4
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// task - 5
var isValid = function (s) {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let char of s) {
    if (obj[char]) {
      stack.push(char);
    } else if (obj[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length == 0;
};
