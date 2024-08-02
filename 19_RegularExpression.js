// task - 1
const text =
  "JavaScript is a versatile language. I love learning new Technologies.3 45 32 ";
const pattern = /JavaScript/g;
console.log(text.match(pattern));

// task - 2
const pattern2 = /\d+/g;
console.log(text.match(pattern2));

// task - 3
const pattern3 = /\b[A-Z][a-z]*\b/g;
console.log(text.match(pattern3));

// task - 4
const pattern4 = /\d+/g;
console.log(text.match(pattern4));

// task - 5
const text1 = "(123) 456-7890";
const pattern5 = /\((\d{3})\) (\d{3})-(\d{4})/;
const matches = text1.match(pattern5);
if (matches) {
  console.log(matches[1]);
  console.log(matches[2]);
  console.log(matches[3]);
} else {
  console.log("No matches found");
}

// task - 6
const email = "username@example.com";
const pattern6 = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/;
const match = email.match(pattern6);
if (match) {
  console.log(match[1]);
  console.log(match[2]);
} else {
  console.log("not matches");
}

// task - 7
const text2 = "JavaScript is a versatile language";
const pattern7 = /^\w+/g;
console.log(text2.match(pattern7));

// task - 8
const pattern8 = /\w+$/g;
console.log(text2.match(pattern8));

// task - 9
const password = "Password123!";
const pattern9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log(pattern9.test(password));

// task - 10
const url = "https://www.example.com";
const pattern10 = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
console.log(pattern10.test(url));
