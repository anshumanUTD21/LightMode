import "./styles.css";

("use strict");

let containerEl = document.getElementById("container");
let lightButtonEl = document.getElementById("light-button");
let circleEl = document.getElementById("circle");

circleEl.addEventListener("click", function () {
  lightButtonEl.classList.toggle("lightMode");
  containerEl.classList.toggle("darkMode");
  circleEl.classList.toggle("translate");
});
