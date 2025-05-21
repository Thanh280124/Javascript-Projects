let circle = document.querySelector(".circle");
let box = document.querySelector(".box");
circle.addEventListener("click", function () {
    circle.classList.toggle("active");
    box.classList.toggle("active");
    document.body.classList.toggle("active");
});