let btn = document.querySelector(".btn");
let color = document.querySelector(".color");
let body = document.querySelector("body");
btn.addEventListener("click", function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + randomColor;
  btn.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
});