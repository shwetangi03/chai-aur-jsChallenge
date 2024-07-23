// task - 1
document.getElementById("event").addEventListener("click", function () {
  alert("hey... this is button and dont click sone do yarr");
});

// task - 2
const toggle = document.getElementById("toggle");
toggle.addEventListener("dblclick", function () {
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
});

// task - 3
const mouseover = document.getElementById("event");
mouseover.addEventListener("mouseover", function () {
  mouseover.style.backgroundColor = "red";
});

// task - 4
const mouseout = document.getElementById("event");
mouseout.addEventListener("mouseout", function () {
  mouseout.style.backgroundColor = "white";
});

// task - 5
const keyDown = document.getElementById("key");
keyDown.addEventListener("keydown", function (event) {
  console.log(`pressed ${event.key}`);
});

// task - 6
const keyUp = document.getElementById("keyup");
keyUp.addEventListener("keyup", function (event) {
  console.log(`key released ${event.key}`);
});

// task - 7
const submitForm = document.getElementById("form");
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submition prevented");
});

// task - 8
const dropdown = document.getElementById("drop");
const selectedVal = document.getElementById("selectedVal");
dropdown.addEventListener("change", function () {
  const selected = dropdown.value;
  selectedVal.textContent = `selected value ${selected}`;
});

// task - 9
const form = document.getElementById("form");
const selectedValueDisplay = document.getElementById("selectedValue");

form.addEventListener("change", function (event) {
  if (event.target.tagName === "SELECT") {
    const selectedValue = event.target.value;
    selectedValueDisplay.textContent = `Selected value: ${selectedValue}`;
  }
});

// task - 10

