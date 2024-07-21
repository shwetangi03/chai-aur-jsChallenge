// task-1
let textContent = document.getElementById("text");
textContent.textContent = "Hello World";

// task-2
let changeBG = document.getElementById("bg");
changeBG.style.backgroundColor = "red";

// task-3
let appendEle = document.createElement("div");
appendEle.textContent = "hey... This is shweee!!!";
document.body.appendChild(appendEle);

// task-4
let ul = document.getElementById("insertLi");
let insertLi = document.createElement("li");
insertLi.textContent = "hmmm...."; //checking purpose
ul.appendChild(insertLi);

// task-5
let remove = document.getElementById("remove");
remove.remove();

// task-6
let removeLast = document.getElementById("insertLi");
removeLast.removeChild(removeLast.lastElementChild);

// task-7
let myLink = document.getElementById("link");
myLink.setAttribute("href", "www.//href.shwetangi.com");

// task-8

// task-9
let changeContent = document.getElementById("changeEvent");
changeContent.addEventListener("click", function () {
  changeContent.textContent = "hurray";
});

// task-10
let hoverElement = document.getElementById("hoverElement");
hoverElement.addEventListener("mouseover", function () {
  hoverElement.style.border = "5px solid red";
});
hoverElement.addEventListener("mouseout", function () {
  hoverElement.style.border = "2px solid black";
});
