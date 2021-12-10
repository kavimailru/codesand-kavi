var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
document.querySelector("h1").onclick = function () {
  alert("Ouch! Stop poking me!");
};
var myButton = document.querySelector("button");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
