// task - 1
localStorage.setItem("name", "shwetangi");
const username = localStorage.getItem("name", "shwetangi");
console.log(username);

// task - 2
const obj = {
  name: "shwetangi",
  age: 21,
  profession: "Developer",
};
localStorage.setItem("UserDetails", JSON.stringify(obj));
const getDetails = localStorage.getItem("UserDetails");
console.log(getDetails);
const retrieve = JSON.parse(getDetails);
console.log(retrieve);

// task - 3
document.addEventListener("DOMContentLoaded", function () {
  const savedData = JSON.parse(localStorage.getItem("userData"));
  if (savedData) {
    document.getElementById(
      "savedData"
    ).innerHTML = `<p>Name:${savedData.username}</p><p>Email:${savedData.email}</p>`;
  }
});
document
  .getElementById("userform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const userData = {
      username: username,
      email: email,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    document.getElementById(
      "savedData"
    ).innerHTML = `<p>Name:${username}</p><p>Email:${email}</p>`;
  });

// task - 4
function RemoveItem() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value);
  }
}
localStorage.setItem("item1", "value1");
localStorage.setItem("item2", "value2");
localStorage.setItem("item3", "value3");
RemoveItem();
console.log("after");
localStorage.removeItem("item2");
RemoveItem();

// task - 5
// task - 6
// task - 7
// task - 8
// above task has same you need to replace only local to session

// task - 9
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  const localStorageValue = localStorage.getItem(key);
  console.log(`localStorage - ${key}: ${localStorageValue}`);
  const sessionStorageValue = sessionStorage.getItem(key);
  console.log(`sessionStorage - ${key}: ${sessionStorageValue}`);
}
saveToStorage("username", "Shwetangi");

// task - 10
function clearAllStorage() {
  localStorage.clear();
  sessionStorage.clear();
  const localStorageIsEmpty = localStorage.length === 0;
  console.log(`localStorage is empty: ${localStorageIsEmpty}`);
  const sessionStorageIsEmpty = sessionStorage.length === 0;
  console.log(`sessionStorage is empty: ${sessionStorageIsEmpty}`);
}
clearAllStorage();
