var myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
document.querySelector("h1").onclick = function () {
  alert("Ouch! Stop poking me!");
};
var myButton = document.querySelector("button");

myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}
